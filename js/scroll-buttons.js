document.getElementById('scroll-up').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
document.getElementById('scroll-down').onclick = function() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};
