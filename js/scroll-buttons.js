function scrollElementToTop(elem) {
  elem.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollElementToBottom(elem) {
  elem.scrollTo({ top: elem.scrollHeight, behavior: 'smooth' });
}

function isMenuOpen() {
  var menu = document.getElementById('side-menu');
  return menu && menu.classList.contains('open');
}

document.getElementById('scroll-up').onclick = function() {
  if(isMenuOpen()) {
    var menu = document.getElementById('side-menu');
    if(menu) scrollElementToTop(menu);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

document.getElementById('scroll-down').onclick = function() {
  if(isMenuOpen()) {
    var menu = document.getElementById('side-menu');
    if(menu) scrollElementToBottom(menu);
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
};
