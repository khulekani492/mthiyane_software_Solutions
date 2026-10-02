const navlinks = document.querySelector(".nav_links");
const navBar = document.querySelector(".hamburger");
let menuOpen = false;

navBar.addEventListener("click", () => {
     if(menuOpen == false){
        console.log("script.js is working");
        navlinks.style.display = "none";
        navlinks.style.display = "flex";
        
        menuOpen = true;
     } else if(menuOpen == true){
        console.log("Incetives");
        navlinks.style.display = "none";
        
        menuOpen = false;
     }
   
});
