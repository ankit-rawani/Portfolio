let menuOpen = document.querySelector('.navbar-toggle-open');
let menuClose = document.querySelector('.navbar-toggle-close');

menuOpen.addEventListener("click", ()=> {
    document.querySelector('.menu-modal').style.display = "block";
});

menuClose.addEventListener("click", () => {
    document.querySelector('.menu-modal').style.display = "none";
});