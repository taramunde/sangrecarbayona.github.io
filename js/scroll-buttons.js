function scrollElementToTop(elem) {
  elem.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollElementToBottom(elem) {
  elem.scrollTo({ top: elem.scrollHeight, behavior: 'smooth' });
}

// Comprueba si el menú lateral está abierto (ajusta el selector de clase si es necesario)
function isMenuOpen() {
  var sidebar = document.getElementById('sidebar');
  return sidebar && sidebar.classList.contains('nav-slide');  // Cambia 'open' por 'nav-slide'
}

document.getElementById('scroll-up').onclick = function() {
  if(isMenuOpen()) {
    var menu = document.getElementById('mobile-nav');
    if(menu) scrollElementToTop(menu);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

document.getElementById('scroll-down').onclick = function() {
  if(isMenuOpen()) {
    var menu = document.getElementById('mobile-nav');
    if(menu) scrollElementToBottom(menu);
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
};
