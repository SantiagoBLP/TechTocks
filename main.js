const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}
