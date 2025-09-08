function scrollElementToTop(elem) {
  elem.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollElementToBottom(elem) {
  elem.scrollTo({ top: elem.scrollHeight, behavior: 'smooth' });
}

// Función corregida para detectar si el menú está abierto
function isMenuOpen() {
  var sidebar = document.getElementById('sidebar');
  return sidebar && sidebar.classList.contains('nav-slide');
}

document.getElementById('scroll-up').onclick = function() {
  if(isMenuOpen()) {
    // Hacer scroll en el contenido del menú lateral
    var menu = document.getElementById('mobile-nav');
    if(menu) scrollElementToTop(menu);
  } else {
    // Hacer scroll en la página principal
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

document.getElementById('scroll-down').onclick = function() {
  if(isMenuOpen()) {
    // Hacer scroll en el contenido del menú lateral
    var menu = document.getElementById('mobile-nav');
    if(menu) scrollElementToBottom(menu);
  } else {
    // Hacer scroll en la página principal
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
};
