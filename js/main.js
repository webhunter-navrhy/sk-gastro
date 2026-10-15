// Menu na mobile, výpočet „túto stredu“ (šišky v párny, langoše v nepárny ISO týždeň) a formulár.
(function () {
  var b = document.querySelector('.burger'), m = document.getElementById('menu');
  if (b && m) {
    b.addEventListener('click', function () {
      var o = m.classList.toggle('otvorene');
      b.setAttribute('aria-expanded', o ? 'true' : 'false');
    });
    m.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { m.classList.remove('otvorene'); b.setAttribute('aria-expanded', 'false'); }
    });
  }

  // najbližšia streda (dnes, ak je streda) a jej ISO číslo týždňa
  var t = document.querySelector('.streda-teraz');
  if (t) {
    var d = new Date(); d.setHours(12, 0, 0, 0);
    d.setDate(d.getDate() + ((3 - d.getDay() + 7) % 7));
    var x = new Date(d); x.setDate(x.getDate() + 4 - (x.getDay() || 7));
    var tyzden = Math.ceil(((x - new Date(x.getFullYear(), 0, 1)) / 864e5 + 1) / 7);
    var parita = tyzden % 2;
    var bunka = document.querySelector('.streda-tyzdne [data-parita="' + parita + '"]');
    if (bunka) bunka.classList.add('dnes');
    var co = parita === 0 ? 'šišky s džemom' : 'langoše s cesnakom';
    var den = d.getDate() + '. ' + (d.getMonth() + 1) + '.';
    t.textContent = (new Date().getDay() === 3 ? 'Dnes (' + den + ')' : 'Túto stredu (' + den + ')') + ' robíme ' + co + '.';
    t.hidden = false;
  }

  document.querySelectorAll('form.formular').forEach(function (f) {
    var stav = f.querySelector('.formular-stav');
    f.addEventListener('submit', function (e) {
      var endpoint = f.getAttribute('data-endpoint');
      var demo = f.getAttribute('data-demo') === '1';
      e.preventDefault();
      if (f.querySelector('.past input').value) return;
      if (demo || !endpoint) {
        stav.textContent = 'Ukážka formulára: v návrhu sa nič neodosiela. Po spustení webu príde správa na e-mail SK GASTRO.';
        return;
      }
      stav.textContent = 'Odosielam…';
      fetch(endpoint, { method: 'POST', body: new FormData(f), headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error(r.status); f.reset(); stav.textContent = 'Ďakujeme, ozveme sa vám.'; })
        .catch(function () { stav.textContent = 'Odoslanie sa nepodarilo. Zavolajte nám alebo napíšte e-mail.'; });
    });
  });
})();
