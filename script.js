const navlinks = document.querySelector(".nav_links");
const navBar = document.querySelector(".hamburger");

navBar.addEventListener("click", () => {
    navlinks.classList.toggle("active");
});