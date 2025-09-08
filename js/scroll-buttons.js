document.getElementById('scroll-up').onclick = function() {
  if(isMenuOpen()) {
    var menu = document.getElementById('sidebar'); // <-- CAMBIADO
    if(menu) scrollElementToTop(menu);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

document.getElementById('scroll-down').onclick = function() {
  if(isMenuOpen()) {
    var menu = document.getElementById('sidebar'); // <-- CAMBIADO
    if(menu) scrollElementToBottom(menu);
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
};
