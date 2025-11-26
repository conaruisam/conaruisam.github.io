function getEdad(dateString) {
    let hoy = new Date()
    let fechaNacimiento = new Date(dateString)
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--
    }
    return edad
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
})


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
    // Use jQuery animate for consistent smooth scrolling
    $('html, body').stop().animate({ scrollTop: targetY }, 600);
    // close mobile menu if open
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