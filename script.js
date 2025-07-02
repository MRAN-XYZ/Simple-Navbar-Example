function toggleMenu() {
    const menu = document.getElementById("navMenu");
    const iconHamburger = document.getElementById("iconHamburger");
    const iconClose = document.getElementById("iconClose");
    
    menu.classList.toggle("active");
    iconHamburger.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
}