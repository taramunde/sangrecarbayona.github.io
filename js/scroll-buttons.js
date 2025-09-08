function scrollElementToTop(elem) {
  elem.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollElementToBottom(elem) {
  elem.scrollTo({ top: elem.scrollHeight, behavior: 'smooth' });
}

// Cambia el selector aquí según tu menú lateral
function getMenuElement() {
  return document.getElementById('side-menu');
  // O: return document.querySelector('.mobile-menu');
}

function isMenuOpen(menuElem) {
  return menuElem && menuElem.classList.contains('open');
}

document.getElementById('scroll-up').onclick = function() {
  const menuElem = getMenuElement();
  if(isMenuOpen(menuElem)) {
    scrollElementToTop(menuElem);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

document.getElementById('scroll-down').onclick = function() {
  const menuElem = getMenuElement();
  if(isMenuOpen(menuElem)) {
    scrollElementToBottom(menuElem);
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
};
