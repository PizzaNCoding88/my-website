const mobileNavbar = document.querySelector(".side-menu-11")
const hamburgerMenu = document.querySelector(".open-side-menu__icon")
const closeMobileNavbar = document.querySelector(".side-menu-11__close-button")

hamburgerMenu.addEventListener("click", openMenu);
closeMobileNavbar.addEventListener("click", closeMenu);

function openMenu(){
    mobileNavbar.classList.toggle("hidden-1");
}

function closeMenu(){
    mobileNavbar.classList.toggle("hidden-1");
}