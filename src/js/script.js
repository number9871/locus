let menu = document.getElementById('menu'),
    overlay = document.getElementById('menu-overlay');

document.getElementById('menu-btn').onclick = () => {
    menu.classList.toggle('menu__nav__mobile_active');
    overlay.classList.toggle('overlay_active');
};
document.getElementById('menu-overlay').onclick = () => {
    menu.classList.toggle('menu__nav__mobile_active');
    overlay.classList.toggle('overlay_active');
};
document.getElementById('menu-close').onclick = () => {
    menu.classList.toggle('menu__nav__mobile_active');
    overlay.classList.toggle('overlay_active');
};