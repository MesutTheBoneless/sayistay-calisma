(() => {
  const data = window.SAYISTAY_DATA;
  const lessons = window.SAYISTAY_LESSONS || {};
  const letters = 'ABCDE';
  const nav = document.getElementById('dayNav');
  const quizArea = document.getElementById('quizArea');
  const lessonArea = document.getElementById('lessonArea');
  const emptyState = document.getElementById('emptyState');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('overlay');
  const lessonTab = document.getElementById('lessonTab');
  const quizTab = document.getElementById('quizTab');
  const resetButton = document.getElementById('resetButton');
  const readyDays = new Set(Object.keys(data.quizzes).map(Number));

  const params = new URLSearchParams(location.search);
  let selectedDay = Number(params.get('day')) || Math.max(...readyDays);
  if (!data.days.some(d => d.day === selectedDay)) selectedDay = Math.max(...readyDays);
  let activeView = params.get('view');
  if (!['lesson', 'quiz'].includes(activeView)) activeView = lessons[selectedDay] ? 'lesson' : 'quiz';

  let answers = [];

  function storageKey(day) {
    return `sayistay-day-${day}-answers-v1`;
  }

  function loadAnswers(day, total) {
    try {
      const raw = JSON.parse(localStorage.getItem(storageKey(day)) || '[]');
      if (!Array.isArray(raw) || raw.length !== total) return Array(total).fill(null);
      return raw.map(v => Number.isInteger(v) ? v : null);
    } catch {
      return Array(total).fill(null);
    }
  }

  function saveAnswers() {
    localStorage.setItem(storageKey(selectedDay), JSON.stringify(answers));
  }

  function renderNav() {
    nav.innerHTML = data.days.map(day => {
      const hasQuiz = readyDays.has(day.day);
      const hasLesson = Boolean(lessons[day.day]);
      const statusTitle = hasQuiz && hasLesson ? 'Konu anlatımı ve test hazır' : hasQuiz ? 'Test hazır' : hasLesson ? 'Konu anlatımı hazır' : 'Henüz eklenmedi';
      return `
        <button class="day-button ${day.day === selectedDay ? 'active' : ''}" data-day="${day.day}" type="button">
          <span class="day-no">${day.day}</span>
          <span class="day-copy"><strong>${day.lesson} · ${day.date}</strong><span>${day.topics}</span></span>
          <span class="status-dot ${hasQuiz || hasLesson ? 'ready' : ''}" title="${statusTitle}"></span>
        </button>
      `;
    }).join('');

    nav.querySelectorAll('.day-button').forEach(button => {
      button.addEventListener('click', () => selectDay(Number(button.dataset.day)));
    });

    document.getElementById('programProgress').textContent = `${readyDays.size} / ${data.days.length} test aktif`;
    document.getElementById('programProgressBar').style.width = `${Math.round((readyDays.size / data.days.length) * 100)}%`;
  }

  function updateUrl() {
    const url = new URL(location.href);
    url.searchParams.set('day', String(selectedDay));
    url.searchParams.set('view', activeView);
    history.replaceState({}, '', url);
  }

  function selectDay(day) {
    selectedDay = day;
    activeView = lessons[day] ? 'lesson' : 'quiz';
    updateUrl();
    closeSidebar();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function selectView(view) {
    activeView = view;
    updateUrl();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderTabs() {
    const hasLesson = Boolean(lessons[selectedDay]);
    const hasQuiz = Boolean(data.quizzes[selectedDay]);
    lessonTab.classList.toggle('active', activeView === 'lesson');
    quizTab.classList.toggle('active', activeView === 'quiz');
    lessonTab.classList.toggle('unavailable', !hasLesson);
    quizTab.classList.toggle('unavailable', !hasQuiz);
    lessonTab.setAttribute('aria-selected', String(activeView === 'lesson'));
    quizTab.setAttribute('aria-selected', String(activeView === 'quiz'));
    lessonTab.title = hasLesson ? 'Konu anlatımını aç' : 'Konu anlatımı henüz eklenmedi';
    quizTab.title = hasQuiz ? 'Gün sonu testini aç' : 'Test henüz eklenmedi';
  }

  function showEmpty(meta, type) {
    lessonArea.hidden = true;
    quizArea.hidden = true;
    emptyState.hidden = false;
    document.getElementById('emptyTitle').textContent = type === 'lesson'
      ? `Gün ${meta.day} — ${meta.lesson} konu anlatımı henüz eklenmedi.`
      : `Gün ${meta.day} — ${meta.lesson} testi henüz eklenmedi.`;
    document.getElementById('emptyText').textContent = meta.topics;
  }

  function renderLesson(meta) {
    const lesson = lessons[selectedDay];
    resetButton.hidden = true;
    quizArea.hidden = true;
    if (!lesson) {
      showEmpty(meta, 'lesson');
      return;
    }
    emptyState.hidden = true;
    lessonArea.hidden = false;
    document.getElementById('lessonNoteTitle').textContent = lesson.title;
    document.getElementById('lessonNoteSubtitle').textContent = lesson.subtitle;
    document.getElementById('lessonContent').innerHTML = lesson.html;
  }

  function renderQuiz(meta) {
    const quiz = data.quizzes[selectedDay];
    resetButton.hidden = !quiz;
    lessonArea.hidden = true;
    if (!quiz) {
      showEmpty(meta, 'quiz');
      return;
    }

    emptyState.hidden = true;
    quizArea.hidden = false;
    document.getElementById('lessonTitle').textContent = quiz.title;
    document.getElementById('topicSummary').textContent = meta.topics;
    answers = loadAnswers(selectedDay, quiz.questions.length);
    renderQuestions();
    updateStats();
  }

  function render() {
    renderNav();
    renderTabs();
    const meta = data.days.find(d => d.day === selectedDay);

    document.getElementById('sessionLabel').textContent = `GÜN ${meta.day} · ${meta.lesson.toUpperCase()}`;
    document.getElementById('pageTitle').textContent = activeView === 'lesson' ? 'Konu Anlatımı' : 'Gün Sonu Testi';

    if (activeView === 'lesson') renderLesson(meta);
    else renderQuiz(meta);
  }

  function renderQuestions() {
    const quiz = data.quizzes[selectedDay];
    const root = document.getElementById('questions');
    root.innerHTML = quiz.questions.map((item, index) => {
      const picked = answers[index];
      const answered = picked !== null;
      const options = item.o.map((option, optionIndex) => {
        let cls = 'option';
        if (answered && optionIndex === item.a) cls += ' correct';
        if (answered && optionIndex === picked && picked !== item.a) cls += ' wrong';
        return `<button class="${cls}" data-q="${index}" data-o="${optionIndex}" type="button" ${answered ? 'disabled' : ''}>
          <span class="option-letter">${letters[optionIndex]}</span><span>${option}</span>
        </button>`;
      }).join('');
      return `<article class="question-card" id="q-${index}">
        <div class="question-head"><span class="question-number">${index + 1}</span><div class="question-title">${item.q}</div></div>
        <div class="options">${options}</div>
        ${answered ? `<div class="explanation"><strong>Doğru cevap: ${letters[item.a]}</strong><br>${item.e}</div>` : ''}
      </article>`;
    }).join('');

    root.querySelectorAll('.option:not(:disabled)').forEach(button => {
      button.addEventListener('click', () => answerQuestion(Number(button.dataset.q), Number(button.dataset.o)));
    });
  }

  function answerQuestion(qIndex, optionIndex) {
    if (answers[qIndex] !== null) return;
    answers[qIndex] = optionIndex;
    saveAnswers();
    renderQuestions();
    updateStats();
    const card = document.getElementById(`q-${qIndex}`);
    card?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  function updateStats() {
    const quiz = data.quizzes[selectedDay];
    if (!quiz) return;
    const total = quiz.questions.length;
    const answered = answers.filter(v => v !== null).length;
    const correct = answers.filter((v, i) => v !== null && v === quiz.questions[i].a).length;
    const wrong = answered - correct;
    const remaining = total - answered;
    const percent = Math.round((answered / total) * 100);

    document.getElementById('answeredCount').textContent = answered;
    document.getElementById('correctCount').textContent = correct;
    document.getElementById('wrongCount').textContent = wrong;
    document.getElementById('remainingCount').textContent = remaining;
    document.getElementById('heroScore').textContent = `${correct}/${total}`;
    document.getElementById('progressText').textContent = `%${percent}`;
    document.getElementById('progressBar').style.width = `${percent}%`;

    const resultCard = document.getElementById('resultCard');
    const completed = answered === total;
    resultCard.hidden = !completed;
    if (completed) {
      document.getElementById('resultScore').textContent = `${correct} / ${total}`;
      const ratio = correct / total;
      document.getElementById('resultText').textContent = ratio >= .85
        ? `Güçlü sonuç. ${wrong} yanlışını tekrar ederek günü kapat.`
        : ratio >= .65
          ? `Temel yapı oturmuş. ${wrong} yanlışın açıklamalarını tekrar gözden geçir.`
          : `${wrong} yanlış var. Yanlışları tekrar çöz seçeneğiyle ikinci tur yap.`;
      resultCard.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  function retryWrong() {
    const quiz = data.quizzes[selectedDay];
    if (!quiz) return;
    answers = answers.map((value, index) => value !== null && value !== quiz.questions[index].a ? null : value);
    saveAnswers();
    renderQuestions();
    updateStats();
    const firstOpen = answers.findIndex(v => v === null);
    if (firstOpen >= 0) document.getElementById(`q-${firstOpen}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function resetQuiz() {
    const quiz = data.quizzes[selectedDay];
    if (!quiz) return;
    answers = Array(quiz.questions.length).fill(null);
    localStorage.removeItem(storageKey(selectedDay));
    renderQuestions();
    updateStats();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.hidden = false;
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.hidden = true;
  }

  document.getElementById('menuButton').addEventListener('click', openSidebar);
  overlay.addEventListener('click', closeSidebar);
  lessonTab.addEventListener('click', () => selectView('lesson'));
  quizTab.addEventListener('click', () => selectView('quiz'));
  document.getElementById('retryWrongButton').addEventListener('click', retryWrong);
  resetButton.addEventListener('click', resetQuiz);
  document.getElementById('resetBottomButton').addEventListener('click', resetQuiz);

  render();
})();
