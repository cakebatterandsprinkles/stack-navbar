const menuPanel = document.querySelector('.panels__main');
const panels = document.querySelectorAll('.panel');
const subMenus = document.querySelectorAll('.panel__subMenu');
const backdrop = document.querySelector('#backdrop');

function toggleHidden() {
  panels.forEach(panel => panel.classList.toggle('hidden'));
};

function handleMenuClick() {
  toggleHidden();
  toggleBackdrop();
}

menuPanel.addEventListener('click', handleMenuClick);

function toggleBackdrop() {
  backdrop.classList.toggle('visible');
  console.log('toggleBackdrop');
}

function hideMenu() {
  panels.forEach(panel => panel.classList.add('hidden'));
  console.log('hideMenu');
}

function handleBackdropClick() {
  hideMenu();
  toggleBackdrop();
}

backdrop.addEventListener('click', handleBackdropClick);

function addOpen(e) {
  this.classList.add('active');
  const subMenus = this.querySelectorAll('.panel__subMenu.notActive');
  subMenus.forEach(subMenu => subMenu.classList.add('active'));
  subMenus.forEach(subMenu => subMenu.classList.remove('notActive'));
};

function removeOpen(e) {
  this.classList.remove('active');
  const subMenus = this.querySelectorAll('.panel__subMenu.active');
  subMenus.forEach(subMenu => subMenu.classList.remove('active'));
  subMenus.forEach(subMenu => subMenu.classList.add('notActive'));
};

panels.forEach(panel => panel.addEventListener('mouseover', addOpen));
panels.forEach(panel => panel.addEventListener('mouseout', removeOpen));