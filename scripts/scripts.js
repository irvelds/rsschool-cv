/* Menu Button Scripts */
const menuButton = document.querySelector('.menu-btn');
const menu= document.querySelector('.menu');
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.menu-item');

menuButton.addEventListener('click', toggleMenu);

[...menuItems].forEach((item) => {
  item.addEventListener('click', toggleMenu);
})

function toggleMenu () {
  menuButton.classList.toggle("open");
  menu.classList.toggle('active');
  body.classList.toggle('hidden');
}