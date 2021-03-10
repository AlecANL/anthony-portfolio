const $iconMmenu = document.getElementById('menu'),
  $menu = document.getElementById('list-menu');

function showMenu() {
  $iconMmenu.classList.toggle('active-menu');
  $menu.classList.toggle('active');
}
$iconMmenu.addEventListener('click', showMenu);
