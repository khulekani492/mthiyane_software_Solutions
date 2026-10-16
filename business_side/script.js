    console.log("dashboard live");
    const nameEl =   document.getElementById("bsName");
    if (nameEl) {
    const businessName = sessionStorage.getItem("businessName");
    if (businessName) {
      nameEl.textContent = businessName;
    }
  }
  console.log("customer number id")
  const n_customer = document.getElementById("n_customers");
  
  const new_value = sessionStorage.getItem("total_count");

  console.log(new_value + " cache customer count" );

  n_customer.textContent = new_value ;
  n_customer.style.fontSize = "50px";
  n_customer.style.color = "orangered";

  
  const navlinks = document.querySelector(".nav_links");
  const navBar = document.querySelector(".hamburger");
  let menuOpen = false;

  navBar.addEventListener("click", () => {
     if(menuOpen == false){
        console.log("script.js is working");
        navlinks.style.display = "none";
        navlinks.style.display = "flex";
        navlinks.style.position = "fixed";
        navlinks.style.backgroundColor = "white";
        navlinks.style.color =" black";
        
        menuOpen = true;
     } else if(menuOpen == true){
        console.log("Incetives");
        navlinks.style.display = "none";
        menuOpen = false;
     }
  
     
});







