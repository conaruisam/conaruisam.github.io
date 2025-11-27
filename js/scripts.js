function getEdad(dateString) {
  let hoy = new Date();
  let fechaNacimiento = new Date(dateString);
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
  ) {
    edad--;
  }
  return edad;
}

 
$(function(){
  $('.contenedor-imagen').on('click', function(){
    $('#modal').modal;
    var ruta_imagen = ($(this).find('img').attr('src'));
    $('#imagen-modal').attr('src', ruta_imagen);
  });

  $('#modal').on('click', function(){
    $('#modal').modal('hide');
  });
});


$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

// Smooth scroll for in-page anchors (compensate fixed navbar height)
$(document).on('click', '#main-nav a[href^="#"], .nav-link[href^="#"], a.navbar-brand[href^="#"]', function(e) {
  var href = $(this).attr('href');
  if (!href || href === '#') return;
  var $target = $(href);
  if ($target.length) {
    e.preventDefault();
    var navHeight = $('#main-nav').outerHeight() || 0;
    var targetY = $target.offset().top - navHeight - 8; // small extra offset
    $('html, body').stop().animate({ scrollTop: targetY }, 600);
    $('.navbar-collapse').collapse('hide');
  }
});

// Highlight nav links on scroll using IntersectionObserver
(function(){
  var navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
  var sections = [];
  navLinks.forEach(function(link){
    var id = link.getAttribute('href');
    try{
      var el = document.querySelector(id);
      if(el) sections.push(el);
    }catch(e){ }
  });

  if ('IntersectionObserver' in window && sections.length) {
    var obsOptions = { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0 };
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        var id = entry.target.id;
        var link = document.querySelector('.navbar-nav .nav-link[href="#'+id+'"]');
        if(entry.isIntersecting) {
          document.querySelectorAll('.navbar-nav .nav-link').forEach(function(n){ n.classList.remove('active'); });
          if(link) link.classList.add('active');
        }
      });
    }, obsOptions);
    sections.forEach(function(s){ observer.observe(s); });
  } else {
    // Fallback: add click-active behaviour
    document.querySelectorAll('.navbar-nav .nav-link').forEach(function(l){
      l.addEventListener('click', function(){ document.querySelectorAll('.navbar-nav .nav-link').forEach(function(n){ n.classList.remove('active'); }); l.classList.add('active'); });
    });
  }
})();

// ----------------------------
// Translations: load JSON files and cache them in `fetchedTranslations`.
// No large embedded object is kept in this script to avoid duplication.
// ----------------------------
var fetchedTranslations = {};

function getTranslation(lang, key) {
  if (!fetchedTranslations || !fetchedTranslations[lang]) return null;
  var v = fetchedTranslations[lang][key];
  return v === undefined ? null : v;
}

var typedInstance = null;

function initTyped() {
  try {
    if (typedInstance && typeof typedInstance.destroy === 'function') {
      typedInstance.destroy();
    }
  } catch (e) {
    // ignore
  }
  // Only initialize if element exists
  if (document.querySelector('#typed')) {
    typedInstance = new Typed('#typed', {
      stringsElement: '#typed-strings',
      backSpeed: 50,
      typeSpeed: 120,
      loop: true
    });
  }
}

function applyTranslations(lang) {
  // set html lang
  try { document.documentElement.lang = lang; } catch(e){}

  // apply simple key-based replacements (support legacy `data-translation` too)
  document.querySelectorAll('[data-i18n],[data-translation]').forEach(function(el){
    var key = el.getAttribute('data-i18n') || el.getAttribute('data-translation');
    if(!key) return;
    // special handling for typed.strings
    if(key === 'typed.strings') return;
    var value = getTranslation(lang, key);
    if(value !== null && value !== undefined) {
      el.innerHTML = value;
    } else if (lang === 'es') {
      // restore original content for Spanish (use data-original if available)
      if(!el.getAttribute('data-original')) {
        el.setAttribute('data-original', el.innerHTML);
      }
      el.innerHTML = el.getAttribute('data-original');
    }
  });

  // Translate skill list entries (preserve HTML structure)
  var skillMap = {
    '#cobol': 'skill.label.cobol',
    '#java': 'skill.label.java',
    '#cplusplus': 'skill.label.cplusplus',
    '#sql': 'skill.label.sql',
    '#dweb': 'skill.label.dweb'
  };
  Object.keys(skillMap).forEach(function(href){
    try{
      var anchor = document.querySelector('.list-group a[href="' + href + '"]');
      if(anchor){
        var span = anchor.querySelector('span');
        var val = getTranslation(lang, skillMap[href]);
        if(span && val !== undefined && val !== null) span.textContent = val;
      }
    }catch(e){ /* ignore */ }
  });

  // Additional container-based paragraph translations (do not modify HTML structure)
  var containerMap = {
    '#sql .mb-4': ['sql.teaching','sql.professional','sql.final'],
    '#cplusplus .mb-4': ['cplusplus.summary','cplusplus.learning','cplusplus.tech_intro'],
    '#dweb .mb-4': ['dweb.frontend_p1','dweb.frontend_p2','dweb.backend_p1','dweb.backend_p2']
  };
  Object.keys(containerMap).forEach(function(sel){
    try{
      var keys = containerMap[sel];
      var container = document.querySelector(sel);
      if(!container) return;
      var paras = Array.from(container.querySelectorAll('p')).filter(function(p){ return !p.getAttribute('data-i18n') && !p.getAttribute('data-translation'); });
      for(var i=0;i<keys.length && i<paras.length;i++){
        var k = keys[i];
        var v = getTranslation(lang, k);
        if(v !== undefined && v !== null){
          // save original if needed
          if(!paras[i].getAttribute('data-original')) paras[i].setAttribute('data-original', paras[i].innerHTML);
          paras[i].innerHTML = v;
        } else if(lang === 'es'){
          if(paras[i].getAttribute('data-original')) paras[i].innerHTML = paras[i].getAttribute('data-original');
        }
      }
    }catch(e){ /* ignore */ }
  });

    // Translate SQL tools list items (preserve originals)
    try{
      var sqlLis = document.querySelectorAll('#sql .mb-4 ul li');
      var sqlKeys = ['sql.tool.0','sql.tool.1','sql.tool.2','sql.tool.3'];
      sqlLis.forEach(function(li, idx){
        var k = sqlKeys[idx];
        var v = getTranslation(lang, k);
        if(v !== undefined && v !== null){
          if(!li.getAttribute('data-original')) li.setAttribute('data-original', li.innerHTML);
          li.innerHTML = v;
        } else if(lang === 'es'){
          if(li.getAttribute('data-original')) li.innerHTML = li.getAttribute('data-original');
        }
      });
    }catch(e){ /* ignore */ }

  // Java: replace the large summary paragraph that contains the module list
  try{
    var javaP = document.querySelector('#java p.mt-2');
    if(javaP){
      var key = 'java.summary_full';
      var val = getTranslation(lang, key);
      if(val !== undefined && val !== null){
        if(!javaP.getAttribute('data-original')) javaP.setAttribute('data-original', javaP.innerHTML);
        javaP.innerHTML = val;
      } else if(lang === 'es'){
        if(javaP.getAttribute('data-original')) javaP.innerHTML = javaP.getAttribute('data-original');
      }
    }
    // additional java paragraphs
      var javaExtraKeys = ['java.additional','java.project_line'];
    var javaContainer = document.querySelector('#java');
    if(javaContainer){
      var extraParas = Array.from(javaContainer.querySelectorAll('p')).filter(function(p){ return !p.getAttribute('data-i18n') && !p.getAttribute('data-translation') && p.className.indexOf('mt-2') === -1; });
      for(var j=0;j<javaExtraKeys.length && j<extraParas.length;j++){
        var kk = javaExtraKeys[j];
        var vv = getTranslation(lang, kk);
        if(vv !== undefined && vv !== null){
          if(!extraParas[j].getAttribute('data-original')) extraParas[j].setAttribute('data-original', extraParas[j].innerHTML);
          extraParas[j].innerHTML = vv;
        } else if(lang === 'es'){
          if(extraParas[j].getAttribute('data-original')) extraParas[j].innerHTML = extraParas[j].getAttribute('data-original');
        }
      }
    }
  }catch(e){ /* ignore */ }

  // Typed strings
  var tsKey = 'typed.strings';
  var arr = getTranslation(lang, tsKey);
  if (arr && Array.isArray(arr)) {
    var container = document.getElementById('typed-strings');
    if(container) {
      // save original if not saved
      if(!container.getAttribute('data-original')) container.setAttribute('data-original', container.innerHTML);
      // build innerHTML from array
      container.innerHTML = arr.map(function(s){ return '<p>'+s+'</p>'; }).join('\n');
    }
    initTyped();
  } else if (lang === 'es') {
    // restore Spanish original
    var container = document.getElementById('typed-strings');
    if(container && container.getAttribute('data-original')) {
      container.innerHTML = container.getAttribute('data-original');
    }
    initTyped();
  }

  // Update the lang button label
  var btn = document.getElementById('lang-toggle');
  if(btn) {
    btn.textContent = (lang === 'es') ? 'EN' : 'ES';
    btn.title = (lang === 'es') ? 'Switch to English' : 'Cambiar a Español';
  }

  // persist
  try { localStorage.setItem('site_lang', lang); } catch(e){}
}

// Load translations JSON and apply (fallback to embedded translations object)
function loadAndApply(lang) {
  var url = 'translations/' + lang + '.json';
  // try to fetch remote JSON; if successful, cache it in fetchedTranslations
  fetch(url, {cache: 'no-cache'}).then(function(resp){
    if(!resp.ok) throw new Error('no-translation');
    return resp.json();
  }).then(function(json){
    // replace or merge: shallow replace so author-managed JSON is authoritative
    fetchedTranslations[lang] = json;
    applyTranslations(lang);
  }).catch(function(){
    // fallback: use in-script translations if available
    applyTranslations(lang);
  });
}

// Setup toggle
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('lang-toggle');
  // determine default lang
  var stored = null;
  try { stored = localStorage.getItem('site_lang'); } catch(e){}
  var defaultLang = stored || (navigator.language && navigator.language.toLowerCase().indexOf('en') === 0 ? 'en' : 'es');
  // load translations (remote JSON preferred) then apply
  loadAndApply(defaultLang);

  if(btn) {
    btn.addEventListener('click', function(){
      var current = document.documentElement.lang || defaultLang;
      var next = (current === 'es') ? 'en' : 'es';
      loadAndApply(next);
    });
  }

});

// Ensure Typed is initialized if scripts loaded after DOMContentLoaded
if(document.readyState === 'complete' || document.readyState === 'interactive') {
  // small timeout to allow other scripts to be ready
  setTimeout(function(){ if(!typedInstance) initTyped(); }, 200);
}