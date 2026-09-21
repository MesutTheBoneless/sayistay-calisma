window.SAYISTAY_LESSONS = window.SAYISTAY_LESSONS || {};
window.SAYISTAY_LESSONS[3] = {
  title: 'Muhasebe — Gün 3 Konu Anlatımı',
  subtitle: 'Temel kavramlar, muhasebe eşitliği, borç/alacak mantığı, hesapların işleyişi, TDHP, yevmiye-büyük defter-mizan, hazır değerler ve ticari alacaklar',
  html: `
    <section class="lesson-section">
      <div class="lesson-kicker">1 · MUHASEBE EŞİTLİĞİ</div>
      <h2>Bilanço mantığının tek satırlık özeti</h2>
      <div class="formula-card"><span>Temel eşitlik</span><strong>Varlıklar = Yabancı Kaynaklar + Öz Kaynaklar</strong></div>
      <div class="table-wrap">
        <table class="lesson-table">
          <thead><tr><th>İşlem</th><th>Varlıklar</th><th>Yabancı kaynak</th><th>Öz kaynak</th></tr></thead>
          <tbody>
            <tr><td><strong>Peşin sermaye koyma</strong></td><td>↑</td><td>—</td><td>↑</td></tr>
            <tr><td><strong>Banka kredisi alma</strong></td><td>↑</td><td>↑</td><td>—</td></tr>
            <tr><td><strong>Borcu nakden ödeme</strong></td><td>↓</td><td>↓</td><td>—</td></tr>
            <tr><td><strong>Varlıklar arasında dönüşüm</strong></td><td>Toplam değişmez</td><td>—</td><td>—</td></tr>
          </tbody>
        </table>
      </div>
      <div class="callout"><strong>Sınav tuzağı:</strong> Her işlem toplam varlığı değiştirmez. Kasadan bankaya para yatırmak sadece varlıkların kendi içinde yer değiştirmesidir.</div>
    </section>

    <section class="lesson-section">
      <div class="lesson-kicker">2 · BORÇ / ALACAK MANTIĞI</div>
      <h2>Hesap türüne göre artış ve azalış</h2>
      <div class="table-wrap">
        <table class="lesson-table compact">
          <thead><tr><th>Hesap türü</th><th>Artış</th><th>Azalış</th><th>Normal bakiye</th></tr></thead>
          <tbody>
            <tr><td><strong>Varlık</strong></td><td>Borç</td><td>Alacak</td><td>Borç</td></tr>
            <tr><td><strong>Yabancı kaynak</strong></td><td>Alacak</td><td>Borç</td><td>Alacak</td></tr>
            <tr><td><strong>Öz kaynak</strong></td><td>Alacak</td><td>Borç</td><td>Alacak</td></tr>
            <tr><td><strong>Gelir</strong></td><td>Alacak</td><td>Borç</td><td>Alacak</td></tr>
            <tr><td><strong>Gider</strong></td><td>Borç</td><td>Alacak</td><td>Borç</td></tr>
          </tbody>
        </table>
      </div>
      <div class="memory-strip"><b>Ezber:</b> Varlık ve gider artışı borç; kaynak ve gelir artışı alacak.</div>
    </section>

    <section class="lesson-section">
      <div class="lesson-kicker">3 · TEK DÜZEN HESAP PLANI</div>
      <h2>Hesap sınıflarını tek tabloda gör</h2>
      <div class="table-wrap">
        <table class="lesson-table compact">
          <thead><tr><th>Sınıf</th><th>Adı</th><th>Temel içerik</th></tr></thead>
          <tbody>
            <tr><td><strong>1</strong></td><td>Dönen Varlıklar</td><td>Kasa, bankalar, alacaklar, stoklar</td></tr>
            <tr><td><strong>2</strong></td><td>Duran Varlıklar</td><td>Uzun süre kullanılan varlıklar</td></tr>
            <tr><td><strong>3</strong></td><td>Kısa Vadeli Yabancı Kaynaklar</td><td>Bir yıl içinde ödenecek borçlar</td></tr>
            <tr><td><strong>4</strong></td><td>Uzun Vadeli Yabancı Kaynaklar</td><td>Bir yıldan uzun vadeli borçlar</td></tr>
            <tr><td><strong>5</strong></td><td>Öz Kaynaklar</td><td>Sermaye, yedekler, dönem sonucu</td></tr>
            <tr><td><strong>6</strong></td><td>Gelir Tablosu Hesapları</td><td>Gelir, gider ve maliyet hesapları</td></tr>
            <tr><td><strong>7</strong></td><td>Maliyet Hesapları</td><td>Maliyet oluşum ve dağıtım hesapları</td></tr>
            <tr><td><strong>8</strong></td><td>Serbest</td><td>İhtiyaca göre kullanılabilir</td></tr>
            <tr><td><strong>9</strong></td><td>Nazım Hesaplar</td><td>Bilanço dışı izleme bilgileri</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="lesson-section">
      <div class="lesson-kicker">4 · KAYIT AKIŞI</div>
      <h2>Belgeden mizana kadar sıra</h2>
      <div class="step-flow">
        <div><b>1</b><span>Belge</span></div><div class="arrow">→</div>
        <div><b>2</b><span>Yevmiye Defteri</span></div><div class="arrow">→</div>
        <div><b>3</b><span>Büyük Defter</span></div>
      </div>
      <div class="step-flow" style="margin-top:10px">
        <div><b>4</b><span>Mizan</span></div><div class="arrow">→</div>
        <div><b>5</b><span>Envanter / Düzeltme</span></div><div class="arrow">→</div>
        <div><b>6</b><span>Mali Tablolar</span></div>
      </div>
      <div class="table-wrap">
        <table class="lesson-table">
          <thead><tr><th>Aşama</th><th>Temel işlev</th><th>Sınavda karışan nokta</th></tr></thead>
          <tbody>
            <tr><td><strong>Yevmiye</strong></td><td>Kayıtları tarih sırasıyla izler</td><td>Hesap bazlı toplama yapmaz</td></tr>
            <tr><td><strong>Büyük defter</strong></td><td>Kayıtları hesaplar itibarıyla toplar</td><td>Kronolojik defter değildir</td></tr>
            <tr><td><strong>Mizan</strong></td><td>Borç/alacak toplamlarını ve bakiyeleri gösterir</td><td>Eşitlik, tüm kayıtların doğru olduğunu kanıtlamaz</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="lesson-section">
      <div class="lesson-kicker">5 · HAZIR DEĞERLER</div>
      <h2>Sık kullanılan hesaplar</h2>
      <div class="table-wrap">
        <table class="lesson-table">
          <thead><tr><th>Hesap</th><th>İçerik</th><th>Artış yönü</th></tr></thead>
          <tbody>
            <tr><td><strong>100 Kasa</strong></td><td>İşletmedeki nakit</td><td>Borç</td></tr>
            <tr><td><strong>101 Alınan Çekler</strong></td><td>İşletmeye verilmiş çekler</td><td>Borç</td></tr>
            <tr><td><strong>102 Bankalar</strong></td><td>Banka mevduatları</td><td>Borç</td></tr>
            <tr><td><strong>103 Verilen Çekler ve Ödeme Emirleri (-)</strong></td><td>Aktifi düzenleyici hesap</td><td>Alacak</td></tr>
          </tbody>
        </table>
      </div>
      <div class="callout"><strong>Karıştırma:</strong> 103 hesabı bir borç hesabı değil; banka varlığını düzenleyen aktifi düzenleyici hesaptır.</div>
    </section>

    <section class="lesson-section">
      <div class="lesson-kicker">6 · TİCARİ ALACAKLAR</div>
      <h2>Senetli-senetsiz ayrımı</h2>
      <div class="table-wrap">
        <table class="lesson-table">
          <thead><tr><th>Hesap</th><th>Ne izlenir?</th><th>Örnek</th></tr></thead>
          <tbody>
            <tr><td><strong>120 Alıcılar</strong></td><td>Senetsiz ticari alacak</td><td>Vadeli mal satışı</td></tr>
            <tr><td><strong>121 Alacak Senetleri</strong></td><td>Senede bağlanmış ticari alacak</td><td>Müşteriden bono alınması</td></tr>
            <tr><td><strong>128 Şüpheli Ticari Alacaklar</strong></td><td>Tahsilinde ciddi belirsizlik doğan alacak</td><td>Dava/icra safhasına gelen alacak</td></tr>
            <tr><td><strong>129 Şüpheli Ticari Alacaklar Karşılığı (-)</strong></td><td>Karşılık hesabı</td><td>Alacağın bilanço değerini düzenler</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="lesson-section recap-section">
      <div class="lesson-kicker">30 SANİYELİK HATIRLAMA</div>
      <h2>Gün 3 hızlı tekrar</h2>
      <div class="recap-grid">
        <div><b>Varlık ↑</b><span>Borç.</span></div>
        <div><b>Kaynak ↑</b><span>Alacak.</span></div>
        <div><b>1-2</b><span>Varlık sınıfları.</span></div>
        <div><b>3-4-5</b><span>Kaynak sınıfları.</span></div>
        <div><b>6</b><span>Gelir tablosu hesapları.</span></div>
        <div><b>Yevmiye</b><span>Kronolojik.</span></div>
        <div><b>Büyük defter</b><span>Hesap bazlı.</span></div>
        <div><b>120 / 121</b><span>Senetsiz / senetli ticari alacak.</span></div>
      </div>
    </section>
  `
};
