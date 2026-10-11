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

function BusinessesForm() {

   console.log("js");
   const form = document.querySelector("form");

   form.addEventListener('submit', async (event) => {
    // 1. Prevent the default browser form submission
   event.preventDefault();

    // 2. Gather form data automatically
    const formData = new FormData(form );

    try {
        // 3. Send the POST request
      //    if(!response.ok){
   const response = await fetch('https://backend.c-zwena.co.za/sign_up', {
            method: 'POST',
            body: formData // Sent natively as multipart/form-data
        });

        // 4. Handle response
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

   const data = await response.json();
   // console.log('Success:', data);
   if(data.status == "OK"){
      console.log("do something homie")
      window.location.href = "dashboard.html"
   }

    } catch (error) {
        console.error('Error submitting form:', error);
    }
  });
   
         
}

BusinessesForm();

