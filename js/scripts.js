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
$(document).on('click', 'a.nav-link[href^="#"], a.navbar-brand[href^="#"]', function(element) {
  var href = $(this).attr('href');
  if (!href || href === '#') return;
  var $target = $(href);
  if ($target.length) {
    element.preventDefault();
    var navHeight = $('#main-nav').outerHeight() || 0;
    var targetY = $target.offset().top - navHeight - 8; // small extra offset
    $('html, body').animate({ scrollTop: targetY }, 500);
    // close mobile menu if open
    $('.navbar-collapse').collapse('hide');
  }
});