const btnMobile = document.querySelector("#btn-mobile");
const navMenu = document.querySelector("#nav-menu");

btnMobile.addEventListener("click", () => {
    navMenu.classList.toggle("active");
})