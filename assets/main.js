document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});

const languageSwitch = document.querySelector('.language-switch');
if (languageSwitch && window.location.hash) {
  languageSwitch.hash = window.location.hash;
}
window.addEventListener('hashchange', () => {
  if (languageSwitch) languageSwitch.hash = window.location.hash;
});
