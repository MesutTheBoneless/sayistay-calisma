(() => {
  const lessons = window.SAYISTAY_LESSONS || {};

  function add(day, html) {
    if (!lessons[day]) return;
    lessons[day].html = html + lessons[day].html;
  }

  add(1, `
    <section class="lesson-section clear-table-section">
      <div class="lesson-kicker">ÖNCE BU TABLOLARA BAK</div>
      <h2>Gün 1 — en net özet tablolar</h2>
      <p>Önce aşağıdaki tabloları oturt. Sonra ayrıntılı anlatıma geç.</p>

      <h3>1) Mal türlerini tek bakışta ayır</h3>
      <div class="table-wrap clear-wrap">
        <table class="clear-table">
          <thead><tr><th>Mal türü</th><th>Rakiplik</th><th>Dışlanabilirlik</th><th>En kolay örnek</th><th>Kısa ezber</th></tr></thead>
          <tbody>
            <tr><td><strong>Özel mal</strong></td><td><span class="chip red">Var</span></td><td><span class="chip green">Var</span></td><td>Ekmek</td><td>Parasını vermeyen dışarıda kalır.</td></tr>
            <tr><td><strong>Tam kamusal mal</strong></td><td><span class="chip green">Yok</span></td><td><span class="chip red">Yok</span></td><td>Ulusal savunma</td><td>Herkes birlikte yararlanır.</td></tr>
            <tr><td><strong>Ortak kaynak</strong></td><td><span class="chip red">Var</span></td><td><span class="chip red">Yok</span></td><td>Ortak mera / balık stoku</td><td>Birinin kullanımı diğerine kalanı azaltır.</td></tr>
            <tr><td><strong>Kulüp malı</strong></td><td><span class="chip green">Yok*</span></td><td><span class="chip green">Var</span></td><td>Üyelikli dijital yayın</td><td>Üye olmayan dışlanabilir.</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-footnote">* Kapasite dolana kadar rakipsiz kabul edilen klasik sınav mantığı.</div>

      <h3>2) Dışsallıkta soru çözme tablosu</h3>
      <div class="table-wrap clear-wrap">
        <table class="clear-table">
          <thead><tr><th>Durum</th><th>Piyasa ne yapar?</th><th>Devlet ne yapar?</th><th>Örnek</th></tr></thead>
          <tbody>
            <tr><td><strong>Negatif dışsallık</strong></td><td><span class="direction bad">Fazla üretim / tüketim</span></td><td>Vergi, kota, yasak, standart</td><td>Fabrika kirliliği</td></tr>
            <tr><td><strong>Pozitif dışsallık</strong></td><td><span class="direction good">Eksik üretim / tüketim</span></td><td>Sübvansiyon, teşvik, kamu sunumu</td><td>Aşı, eğitim, Ar-Ge</td></tr>
          </tbody>
        </table>
      </div>

      <h3>3) Kamu harcamaları sınıflandırması</h3>
      <div class="table-wrap clear-wrap">
        <table class="clear-table">
          <thead><tr><th>Soru neyi soruyor?</th><th>Sınıflandırma</th><th>Örnek</th></tr></thead>
          <tbody>
            <tr><td>“Harcamayı kim yaptı?”</td><td><strong>İdari</strong></td><td>Bakanlık, üniversite</td></tr>
            <tr><td>“Hangi hizmet için yapıldı?”</td><td><strong>Fonksiyonel</strong></td><td>Eğitim, sağlık, savunma</td></tr>
            <tr><td>“Ekonomik niteliği ne?”</td><td><strong>Ekonomik</strong></td><td>Cari, yatırım, transfer</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `);

  add(2, `
    <section class="lesson-section clear-table-section">
      <div class="lesson-kicker">ÖNCE BU TABLOLARA BAK</div>
      <h2>Gün 2 — talep, arz ve esneklik özet tabloları</h2>

      <h3>1) Ne değişirse ne olur?</h3>
      <div class="table-wrap clear-wrap">
        <table class="clear-table">
          <thead><tr><th>Değişen şey</th><th>Hangi eğri?</th><th>Ne olur?</th><th>Ezber</th></tr></thead>
          <tbody>
            <tr><td><strong>Malın kendi fiyatı</strong></td><td>Talep veya arz</td><td><span class="chip gold">Eğri üzerinde hareket</span></td><td>Eğri kaymaz.</td></tr>
            <tr><td><strong>Gelir</strong></td><td>Talep</td><td><span class="chip blue">Talep eğrisi kayar</span></td><td>Normal malda gelir ↑ → talep ↑</td></tr>
            <tr><td><strong>İkame mal fiyatı</strong></td><td>Talep</td><td><span class="chip blue">Talep kayar</span></td><td>Çay pahalıysa kahve talebi artabilir.</td></tr>
            <tr><td><strong>Tamamlayıcı mal fiyatı</strong></td><td>Talep</td><td><span class="chip blue">Talep kayar</span></td><td>Benzin pahalıysa otomobil talebi düşebilir.</td></tr>
            <tr><td><strong>Girdi maliyeti</strong></td><td>Arz</td><td><span class="chip purple">Arz eğrisi kayar</span></td><td>Maliyet ↑ → arz sola.</td></tr>
            <tr><td><strong>Teknoloji</strong></td><td>Arz</td><td><span class="chip purple">Arz eğrisi kayar</span></td><td>Teknoloji ↑ → arz sağa.</td></tr>
          </tbody>
        </table>
      </div>

      <h3>2) Denge fiyatı ve miktarı</h3>
      <div class="table-wrap clear-wrap">
        <table class="clear-table big-arrow-table">
          <thead><tr><th>Değişim</th><th>Denge fiyatı</th><th>Denge miktarı</th><th>Akılda tut</th></tr></thead>
          <tbody>
            <tr><td><strong>Talep artar</strong></td><td><span class="arrow-up">↑</span></td><td><span class="arrow-up">↑</span></td><td>İkisi de artar.</td></tr>
            <tr><td><strong>Talep azalır</strong></td><td><span class="arrow-down">↓</span></td><td><span class="arrow-down">↓</span></td><td>İkisi de azalır.</td></tr>
            <tr><td><strong>Arz artar</strong></td><td><span class="arrow-down">↓</span></td><td><span class="arrow-up">↑</span></td><td>Fiyat düşer, miktar artar.</td></tr>
            <tr><td><strong>Arz azalır</strong></td><td><span class="arrow-up">↑</span></td><td><span class="arrow-down">↓</span></td><td>Fiyat artar, miktar düşer.</td></tr>
          </tbody>
        </table>
      </div>

      <h3>3) Talep esnekliği karar tablosu</h3>
      <div class="table-wrap clear-wrap">
        <table class="clear-table">
          <thead><tr><th>|Ed|</th><th>Adı</th><th>Fiyat %10 düşerse miktar...</th><th>Toplam hasılat</th></tr></thead>
          <tbody>
            <tr><td><strong>&gt; 1</strong></td><td><span class="chip green">Esnek</span></td><td>%10'dan daha fazla artar</td><td><span class="direction good">Artar</span></td></tr>
            <tr><td><strong>= 1</strong></td><td><span class="chip gold">Birim esnek</span></td><td>Tam %10 artar</td><td>Değişmez</td></tr>
            <tr><td><strong>&lt; 1</strong></td><td><span class="chip red">Esnek değil</span></td><td>%10'dan daha az artar</td><td><span class="direction bad">Azalır</span></td></tr>
          </tbody>
        </table>
      </div>

      <h3>4) Üretim imkânları eğrisi</h3>
      <div class="table-wrap clear-wrap">
        <table class="clear-table">
          <thead><tr><th>Konum</th><th>Anlam</th><th>Tek kelimelik ezber</th></tr></thead>
          <tbody>
            <tr><td><strong>Eğri üzerinde</strong></td><td>Kaynaklar tam ve etkin kullanılıyor</td><td><span class="chip green">Etkin</span></td></tr>
            <tr><td><strong>Eğrinin içinde</strong></td><td>İşsizlik / atıl kapasite var</td><td><span class="chip red">Atıl</span></td></tr>
            <tr><td><strong>Eğrinin dışında</strong></td><td>Mevcut kaynak ve teknolojiyle ulaşılamaz</td><td><span class="chip gold">Ulaşılamaz</span></td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `);

  add(3, `
    <section class="lesson-section clear-table-section">
      <div class="lesson-kicker">ÖNCE BU TABLOLARA BAK</div>
      <h2>Gün 3 — muhasebenin temel ezber tabloları</h2>

      <h3>1) Borç / alacak mantığı</h3>
      <div class="table-wrap clear-wrap">
        <table class="clear-table account-table">
          <thead><tr><th>Hesap türü</th><th>Artınca</th><th>Azalınca</th><th>Normal bakiye</th></tr></thead>
          <tbody>
            <tr><td><strong>Varlık</strong></td><td><span class="chip blue">BORÇ</span></td><td>Alacak</td><td>Borç</td></tr>
            <tr><td><strong>Gider</strong></td><td><span class="chip blue">BORÇ</span></td><td>Alacak</td><td>Borç</td></tr>
            <tr><td><strong>Yabancı kaynak</strong></td><td><span class="chip purple">ALACAK</span></td><td>Borç</td><td>Alacak</td></tr>
            <tr><td><strong>Öz kaynak</strong></td><td><span class="chip purple">ALACAK</span></td><td>Borç</td><td>Alacak</td></tr>
            <tr><td><strong>Gelir</strong></td><td><span class="chip purple">ALACAK</span></td><td>Borç</td><td>Alacak</td></tr>
          </tbody>
        </table>
      </div>
      <div class="memory-strip"><b>Tek cümle:</b> Varlık + gider artarsa BORÇ; kaynak + gelir artarsa ALACAK.</div>

      <h3>2) Tek Düzen Hesap Planı — numarayı görünce grubu bil</h3>
      <div class="table-wrap clear-wrap">
        <table class="clear-table number-table">
          <thead><tr><th>No</th><th>Hesap sınıfı</th><th>Kısa örnek</th></tr></thead>
          <tbody>
            <tr><td><span class="number-badge">1</span></td><td><strong>Dönen Varlıklar</strong></td><td>Kasa, banka, stok, alacak</td></tr>
            <tr><td><span class="number-badge">2</span></td><td><strong>Duran Varlıklar</strong></td><td>Bina, taşıt, makine</td></tr>
            <tr><td><span class="number-badge">3</span></td><td><strong>Kısa Vadeli Yabancı Kaynak</strong></td><td>Satıcılar, kısa kredi</td></tr>
            <tr><td><span class="number-badge">4</span></td><td><strong>Uzun Vadeli Yabancı Kaynak</strong></td><td>Uzun kredi</td></tr>
            <tr><td><span class="number-badge">5</span></td><td><strong>Öz Kaynaklar</strong></td><td>Sermaye, yedek, kâr</td></tr>
            <tr><td><span class="number-badge">6</span></td><td><strong>Gelir Tablosu Hesapları</strong></td><td>Gelir, gider, maliyet</td></tr>
            <tr><td><span class="number-badge">7</span></td><td><strong>Maliyet Hesapları</strong></td><td>Maliyet dağıtımı</td></tr>
            <tr><td><span class="number-badge">9</span></td><td><strong>Nazım Hesaplar</strong></td><td>Bilanço dışı izleme</td></tr>
          </tbody>
        </table>
      </div>

      <h3>3) Sık çıkan hesap numaraları</h3>
      <div class="table-wrap clear-wrap">
        <table class="clear-table">
          <thead><tr><th>Hesap</th><th>Ne demek?</th><th>Hafıza ipucu</th></tr></thead>
          <tbody>
            <tr><td><strong>100 Kasa</strong></td><td>Eldeki nakit</td><td>100 = kasa</td></tr>
            <tr><td><strong>102 Bankalar</strong></td><td>Banka mevduatı</td><td>102 = banka</td></tr>
            <tr><td><strong>120 Alıcılar</strong></td><td>Senetsiz ticari alacak</td><td>120 = müşteri borcu</td></tr>
            <tr><td><strong>121 Alacak Senetleri</strong></td><td>Senetli ticari alacak</td><td>121 = senede bağlanmış</td></tr>
            <tr><td><strong>320 Satıcılar</strong></td><td>Senetsiz ticari borç</td><td>320 = satıcıya borç</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `);

  add(6, `
    <section class="lesson-section clear-table-section">
      <div class="lesson-kicker">ÖNCE BU TABLOLARA BAK</div>
      <h2>Gün 6 — hesap numaralarını ve yönleri netleştiren tablolar</h2>

      <h3>1) 191 mi, 391 mi?</h3>
      <div class="table-wrap clear-wrap">
        <table class="clear-table account-table">
          <thead><tr><th>İşlem</th><th>Hesap</th><th>Kayıt yönü</th><th>Ezber cümlesi</th></tr></thead>
          <tbody>
            <tr><td><strong>Alış yaptın</strong></td><td>191 İndirilecek KDV</td><td><span class="chip blue">BORÇ</span></td><td>Alış = 191</td></tr>
            <tr><td><strong>Satış yaptın</strong></td><td>391 Hesaplanan KDV</td><td><span class="chip purple">ALACAK</span></td><td>Satış = 391</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-wrap clear-wrap">
        <table class="clear-table">
          <thead><tr><th>Karşılaştırma</th><th>Sonuç</th></tr></thead>
          <tbody>
            <tr><td><strong>391 &gt; 191</strong></td><td><span class="direction bad">Ödenecek KDV doğabilir</span></td></tr>
            <tr><td><strong>191 &gt; 391</strong></td><td><span class="direction good">Devreden KDV oluşabilir</span></td></tr>
          </tbody>
        </table>
      </div>

      <h3>2) Stok hesabını seç</h3>
      <div class="table-wrap clear-wrap">
        <table class="clear-table number-table">
          <thead><tr><th>Hesap</th><th>Ne var?</th><th>Basit örnek</th></tr></thead>
          <tbody>
            <tr><td><span class="number-badge">150</span></td><td><strong>İlk Madde ve Malzeme</strong></td><td>Üretime girecek hammadde</td></tr>
            <tr><td><span class="number-badge">151</span></td><td><strong>Yarı Mamuller</strong></td><td>Üretim devam ediyor</td></tr>
            <tr><td><span class="number-badge">152</span></td><td><strong>Mamuller</strong></td><td>Üretim tamamlandı</td></tr>
            <tr><td><span class="number-badge">153</span></td><td><strong>Ticari Mallar</strong></td><td>Alıp aynen satacağın mal</td></tr>
          </tbody>
        </table>
      </div>

      <h3>3) Maddi duran varlık hesabını seç</h3>
      <div class="table-wrap clear-wrap">
        <table class="clear-table number-table">
          <thead><tr><th>Hesap</th><th>Varlık</th><th>Kritik not</th></tr></thead>
          <tbody>
            <tr><td><span class="number-badge">250</span></td><td><strong>Arazi ve Arsalar</strong></td><td>Klasik sınav mantığında amortisman yok</td></tr>
            <tr><td><span class="number-badge">252</span></td><td><strong>Binalar</strong></td><td>Amortismana tabi</td></tr>
            <tr><td><span class="number-badge">253</span></td><td><strong>Makine / Cihaz</strong></td><td>Amortismana tabi</td></tr>
            <tr><td><span class="number-badge">254</span></td><td><strong>Taşıtlar</strong></td><td>Amortismana tabi</td></tr>
            <tr><td><span class="number-badge">255</span></td><td><strong>Demirbaşlar</strong></td><td>Amortismana tabi</td></tr>
            <tr><td><span class="number-badge">257</span></td><td><strong>Birikmiş Amortisman</strong></td><td>Aktifi düzenleyici hesap</td></tr>
          </tbody>
        </table>
      </div>

      <h3>4) Borç mu, öz kaynak mı?</h3>
      <div class="table-wrap clear-wrap">
        <table class="clear-table">
          <thead><tr><th>Sınıf</th><th>Ne içerir?</th><th>Artış yönü</th><th>Örnek</th></tr></thead>
          <tbody>
            <tr><td><strong>3 — Kısa vadeli borçlar</strong></td><td>Yakın vadede ödenecek borçlar</td><td><span class="chip purple">ALACAK</span></td><td>300, 320, 360</td></tr>
            <tr><td><strong>4 — Uzun vadeli borçlar</strong></td><td>1 yıldan uzun vadeli borçlar</td><td><span class="chip purple">ALACAK</span></td><td>400, 421</td></tr>
            <tr><td><strong>5 — Öz kaynak</strong></td><td>Sermaye, yedek, kâr/zarar</td><td><span class="chip purple">ALACAK*</span></td><td>500, 540, 590</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-footnote">* Zarar gibi eksi öz kaynak hesapları istisna niteliğindedir.</div>

      <h3>5) Tahsilat / ödeme ile gelir / gideri karıştırma</h3>
      <div class="table-wrap clear-wrap">
        <table class="clear-table">
          <thead><tr><th>Olay</th><th>Gelir / gider doğar mı?</th><th>Neden?</th></tr></thead>
          <tbody>
            <tr><td><strong>Vadeli satış</strong></td><td><span class="chip green">Gelir doğar</span></td><td>Para gelmese bile satış gerçekleşti.</td></tr>
            <tr><td><strong>Eski alacağı tahsil etme</strong></td><td><span class="chip red">Yeni gelir yok</span></td><td>Sadece alacak bankaya dönüşür.</td></tr>
            <tr><td><strong>Eski borcu ödeme</strong></td><td><span class="chip red">Yeni gider yok</span></td><td>Sadece banka ve borç azalır.</td></tr>
            <tr><td><strong>Gelecek döneme ait peşin ödeme</strong></td><td><span class="chip gold">Tamamı gider değil</span></td><td>Dönemsellik uygulanır.</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `);
})();
