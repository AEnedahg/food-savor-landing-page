const hamburger_menu = document.getElementById('hamburger-menu');
const cancel_icon = document.getElementById('cancel-icon');
const mobile_nav = document.getElementsByClassName('mobile-nav')[0];

hamburger_menu.addEventListener('click', () => {
  mobile_nav.classList.toggle('active');
  hamburger_menu.classList.toggle('bi-list');
  hamburger_menu.classList.toggle('bi-x-lg');
  cancel_icon.style.display = "inline";
});

cancel_icon.addEventListener('click', () => {
  mobile_nav.classList.toggle('active');
  hamburger_menu.classList.toggle('bi-list');
  hamburger_menu.classList.toggle('bi-x-lg');
  cancel_icon.style.display = "none";
});