window.SAYISTAY_LESSONS = window.SAYISTAY_LESSONS || {};
window.SAYISTAY_LESSONS[6] = {
  title: 'Muhasebe — Gün 6 Konu Anlatımı',
  subtitle: 'Stoklar, KDV kayıtları, maddi duran varlıklar, amortisman, yabancı kaynaklar, öz kaynaklar, gelir-gider ve envanter işlemleri',
  html: `
    <section class="lesson-section">
      <div class="lesson-kicker">1 · STOKLAR</div>
      <h2>15 Stoklar grubu — sınavda en çok kullanılan hesaplar</h2>
      <div class="table-wrap">
        <table class="lesson-table compact">
          <thead><tr><th>Hesap</th><th>Adı</th><th>Ne zaman kullanılır?</th></tr></thead>
          <tbody>
            <tr><td><strong>150</strong></td><td>İlk Madde ve Malzeme</td><td>Üretimde kullanılacak hammadde ve malzeme</td></tr>
            <tr><td><strong>151</strong></td><td>Yarı Mamuller — Üretim</td><td>Üretimi tamamlanmamış ürünler</td></tr>
            <tr><td><strong>152</strong></td><td>Mamuller</td><td>Üretimi tamamlanmış ürünler</td></tr>
            <tr><td><strong>153</strong></td><td>Ticari Mallar</td><td>Değiştirilmeden satılmak üzere alınan mallar</td></tr>
            <tr><td><strong>158</strong></td><td>Stok Değer Düşüklüğü Karşılığı (-)</td><td>Stok değerindeki düşüşleri düzenleyen hesap</td></tr>
            <tr><td><strong>159</strong></td><td>Verilen Sipariş Avansları</td><td>Stok alımı için önceden verilen tutarlar</td></tr>
          </tbody>
        </table>
      </div>
      <div class="callout"><strong>Sınav tuzağı:</strong> Ticari mal alışı gider değildir; önce stok varlığı oluşur. Gider etkisi satış maliyeti doğduğunda ortaya çıkar.</div>
    </section>

    <section class="lesson-section">
      <div class="lesson-kicker">2 · KDV KAYITLARI</div>
      <h2>191 ile 391'i tek tabloda ayır</h2>
      <div class="table-wrap">
        <table class="lesson-table">
          <thead><tr><th>Hesap</th><th>İşlem</th><th>Normal yön</th><th>Mantık</th></tr></thead>
          <tbody>
            <tr><td><strong>191 İndirilecek KDV</strong></td><td>Alışlar</td><td>Borç</td><td>İndirilecek vergi hakkı</td></tr>
            <tr><td><strong>391 Hesaplanan KDV</strong></td><td>Satışlar</td><td>Alacak</td><td>Müşteriden hesaplanan vergi</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-wrap">
        <table class="lesson-table compact">
          <thead><tr><th>Durum</th><th>Sonuç</th></tr></thead>
          <tbody>
            <tr><td><strong>391 &gt; 191</strong></td><td>Aradaki fark genel olarak ödenecek KDV niteliğine gelir.</td></tr>
            <tr><td><strong>191 &gt; 391</strong></td><td>İndirilemeyen kısım sonraki döneme devreden KDV niteliğinde olabilir.</td></tr>
          </tbody>
        </table>
      </div>
      <div class="memory-strip"><b>Ezber:</b> Alış → 191 borç. Satış → 391 alacak.</div>
    </section>

    <section class="lesson-section">
      <div class="lesson-kicker">3 · MADDİ DURAN VARLIKLAR</div>
      <h2>25 Maddi Duran Varlıklar grubu</h2>
      <div class="table-wrap">
        <table class="lesson-table compact">
          <thead><tr><th>Hesap</th><th>Adı</th><th>Kısa not</th></tr></thead>
          <tbody>
            <tr><td><strong>250</strong></td><td>Arazi ve Arsalar</td><td>Klasik sınav kuralında amortisman ayrılmaz.</td></tr>
            <tr><td><strong>252</strong></td><td>Binalar</td><td>Uzun süre kullanılan fiziki varlık</td></tr>
            <tr><td><strong>253</strong></td><td>Tesis, Makine ve Cihazlar</td><td>Üretim ve faaliyet araçları</td></tr>
            <tr><td><strong>254</strong></td><td>Taşıtlar</td><td>İşletme taşıtları</td></tr>
            <tr><td><strong>255</strong></td><td>Demirbaşlar</td><td>Mobilya, ofis ekipmanı vb.</td></tr>
            <tr><td><strong>257</strong></td><td>Birikmiş Amortismanlar (-)</td><td>Aktifi düzenleyici hesap</td></tr>
            <tr><td><strong>258</strong></td><td>Yapılmakta Olan Yatırımlar</td><td>Henüz tamamlanmamış yatırımlar</td></tr>
          </tbody>
        </table>
      </div>
      <div class="compare-row">
        <div><span>Aktifleştirilir</span><strong>Varlığı kullanıma hazır hale getiren maliyet</strong><p>Satın alma bedeli ve doğrudan ilişkilendirilebilir gerekli maliyetler.</p></div>
        <div><span>Genellikle giderleşir</span><strong>Olağan bakım-onarım</strong><p>Sadece mevcut faydayı koruyan rutin harcamalar.</p></div>
      </div>
    </section>

    <section class="lesson-section">
      <div class="lesson-kicker">4 · AMORTİSMAN</div>
      <h2>Amortismanın muhasebe mantığı</h2>
      <div class="formula-card"><span>Doğrusal yöntem</span><strong>Yıllık amortisman = Amortismana tabi değer × oran</strong></div>
      <div class="table-wrap">
        <table class="lesson-table">
          <thead><tr><th>İfade</th><th>Doğru mu?</th><th>Açıklama</th></tr></thead>
          <tbody>
            <tr><td>Amortisman nakit çıkışı yaratır.</td><td><strong>Hayır</strong></td><td>Amortisman nakit çıkışı olmayan giderdir.</td></tr>
            <tr><td>Birikmiş amortisman borçtur.</td><td><strong>Hayır</strong></td><td>Aktifi düzenleyici hesaptır.</td></tr>
            <tr><td>Amortisman piyasa değer düşüşünü aynen ölçer.</td><td><strong>Hayır</strong></td><td>Maliyetin yararlı ömre sistematik dağıtımıdır.</td></tr>
            <tr><td>Arazi ve arsalar klasik kuralda amortismana tabi değildir.</td><td><strong>Evet</strong></td><td>Sınırsız/çok uzun faydalı ömür varsayımı nedeniyle.</td></tr>
          </tbody>
        </table>
      </div>
      <div class="memory-strip"><b>Kayıt mantığı:</b> Amortisman gideri → borç; 257 Birikmiş Amortisman → alacak.</div>
    </section>

    <section class="lesson-section">
      <div class="lesson-kicker">5 · YABANCI KAYNAKLAR</div>
      <h2>Kısa ve uzun vadeli borç ayrımı</h2>
      <div class="table-wrap">
        <table class="lesson-table compact">
          <thead><tr><th>Sınıf</th><th>Vade</th><th>Örnek hesaplar</th></tr></thead>
          <tbody>
            <tr><td><strong>3 — Kısa Vadeli Yabancı Kaynaklar</strong></td><td>Genellikle 1 yıl / normal faaliyet dönemi içinde</td><td>300 Banka Kredileri, 320 Satıcılar, 321 Borç Senetleri, 360 Ödenecek Vergi ve Fonlar</td></tr>
            <tr><td><strong>4 — Uzun Vadeli Yabancı Kaynaklar</strong></td><td>1 yıldan uzun</td><td>400 Banka Kredileri, 421 Borç Senetleri</td></tr>
          </tbody>
        </table>
      </div>
      <div class="callout"><strong>Sınav tuzağı:</strong> Borcun niteliğinden çok vadesine bakılır. Uzun vadeli bir borcun gelecek 12 ayda ödenecek kısmı kısa vadeye aktarılabilir.</div>
    </section>

    <section class="lesson-section">
      <div class="lesson-kicker">6 · ÖZ KAYNAKLAR</div>
      <h2>5 no'lu hesap sınıfı</h2>
      <div class="formula-card"><span>Net varlık mantığı</span><strong>Öz Kaynak = Varlıklar − Yabancı Kaynaklar</strong></div>
      <div class="table-wrap">
        <table class="lesson-table compact">
          <thead><tr><th>Hesap</th><th>Adı</th><th>Etki</th></tr></thead>
          <tbody>
            <tr><td><strong>500</strong></td><td>Sermaye</td><td>Öz kaynağı artırır</td></tr>
            <tr><td><strong>540</strong></td><td>Yasal Yedekler</td><td>Öz kaynak içinde yedek</td></tr>
            <tr><td><strong>570</strong></td><td>Geçmiş Yıllar Kârları</td><td>Pozitif öz kaynak</td></tr>
            <tr><td><strong>580</strong></td><td>Geçmiş Yıllar Zararları (-)</td><td>Öz kaynağı azaltır</td></tr>
            <tr><td><strong>590</strong></td><td>Dönem Net Kârı</td><td>Öz kaynağı artırır</td></tr>
            <tr><td><strong>591</strong></td><td>Dönem Net Zararı (-)</td><td>Öz kaynağı azaltır</td></tr>
          </tbody>
        </table>
      </div>
      <div class="callout"><strong>Karıştırma:</strong> Sermaye koymak gelir değildir; kâr dağıtımı da faaliyet gideri değildir.</div>
    </section>

    <section class="lesson-section">
      <div class="lesson-kicker">7 · GELİR VE GİDER HESAPLARI</div>
      <h2>Dönemsellik ve tahakkuk mantığı</h2>
      <div class="table-wrap">
        <table class="lesson-table compact">
          <thead><tr><th>İşlem</th><th>Gelir/Gider etkisi</th><th>Neden?</th></tr></thead>
          <tbody>
            <tr><td><strong>Vadeli satış</strong></td><td>Gelir oluşur</td><td>Tahsilat henüz yapılmasa da satış gerçekleşmiştir.</td></tr>
            <tr><td><strong>Eski alacağın tahsili</strong></td><td>Yeni gelir oluşmaz</td><td>Sadece varlık yapısı değişir: banka ↑, alacak ↓.</td></tr>
            <tr><td><strong>Önceden kaydedilmiş borcun ödenmesi</strong></td><td>Yeni gider oluşmaz</td><td>Banka ↓, borç ↓.</td></tr>
            <tr><td><strong>Gelecek döneme ait peşin ödeme</strong></td><td>Tamamı cari dönem gideri değildir</td><td>Dönemsellik gereği ilgili döneme aktarılır.</td></tr>
          </tbody>
        </table>
      </div>
      <div class="memory-strip"><b>Ezber:</b> Tahsilat = her zaman gelir değil. Ödeme = her zaman gider değil.</div>
    </section>

    <section class="lesson-section">
      <div class="lesson-kicker">8 · ENVANTER İŞLEMLERİ</div>
      <h2>Muhasebe dışı ve muhasebe içi envanter</h2>
      <div class="table-wrap">
        <table class="lesson-table">
          <thead><tr><th>Tür</th><th>Ne yapılır?</th><th>Örnek</th></tr></thead>
          <tbody>
            <tr><td><strong>Muhasebe dışı envanter</strong></td><td>Fiili/hukuki tespit, sayım, ölçüm, değerleme</td><td>Stok sayımı, kasa sayımı, alacakların incelenmesi</td></tr>
            <tr><td><strong>Muhasebe içi envanter</strong></td><td>Tespit edilen farkların kayıtlara geçirilmesi</td><td>Amortisman kaydı, karşılık, tahakkuk, dönem ayırıcı kayıt</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-wrap">
        <table class="lesson-table compact">
          <thead><tr><th>Envanter konusu</th><th>Tipik işlem</th></tr></thead>
          <tbody>
            <tr><td>Stoklar</td><td>Sayım ve değerleme</td></tr>
            <tr><td>Duran varlıklar</td><td>Amortisman</td></tr>
            <tr><td>Gelir/gider</td><td>Tahakkuk ve dönem ayırma</td></tr>
            <tr><td>Alacaklar</td><td>Şüpheli alacak/karşılık değerlendirmesi</td></tr>
            <tr><td>Borçlar</td><td>Vade ve sınıflandırma kontrolü</td></tr>
          </tbody>
        </table>
      </div>
      <div class="callout"><strong>Sınav tuzağı:</strong> Mizan borç ve alacak toplamlarının eşit olması, envanterin ve değerlemenin doğru olduğu anlamına gelmez.</div>
    </section>

    <section class="lesson-section recap-section">
      <div class="lesson-kicker">30 SANİYELİK HATIRLAMA</div>
      <h2>Gün 6 hızlı tekrar</h2>
      <div class="recap-grid">
        <div><b>153</b><span>Ticari Mallar.</span></div>
        <div><b>191</b><span>Alış KDV'si.</span></div>
        <div><b>391</b><span>Satış KDV'si.</span></div>
        <div><b>257</b><span>Birikmiş amortisman.</span></div>
        <div><b>3 / 4</b><span>Kısa / uzun vadeli yabancı kaynak.</span></div>
        <div><b>5</b><span>Öz kaynaklar.</span></div>
        <div><b>Gelir ↑</b><span>Alacak.</span></div>
        <div><b>Gider ↑</b><span>Borç.</span></div>
      </div>
    </section>
  `
};
