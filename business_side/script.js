  console.log("dashboard live");
  const nameEl =   document.getElementById("bsName");
  
  if (nameEl) {
    const businessName = sessionStorage.getItem("businessName");
  if (businessName) {
      nameEl.textContent = businessName;
      
    }
  }
  console.log("customer number id")
  const n_pending = document.getElementById("pending_customers");
  const n_customer = document.getElementById("n_customers");
  
  const pending_forms = sessionStorage.getItem("total_pending");
  const completed_forms = sessionStorage.getItem("total_customers");

  console.log(new_value + " cache customer count" );

  n_pending.textContent = pending_forms ;
  n_pending.style.fontSize = "50px";
  n_pending.style.color = "orangered";

  n_customer.textContent = completed_forms;
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





document.getElementById("searchClient").addEventListener('submit',async function(event){
     event.preventDefault();
    
     const myform = document.getElementById("searchClient");
     console.log(myform);
     const sentForm = new FormData(myform);
     const customer_notFound = document.getElementById("no_customer");
     

     const response = await fetch('https://backend.c-zwena.co.za/customer_records',
      {
        method:'Post',
        body: sentForm
      });

   
      if (!response.ok){
        customer_notFound.style.display = "block";
        throw new Error(`HTTP error: ${response.status}`);
            }

      const data = await response.json();
   
      console.log('Success:', data);
     
      
  
      

     const customer_name = document.getElementById("customerName");
     const customer_surname = document.getElementById("customerSurname");
     const customer_number = document.getElementById("customerNumber");
     const customer_id_no = document.getElementById("customerID");
     const customer_amount = document.getElementById("customerAmount");
     const customer_details = document.getElementById("details_");

     if(data.status == "OK"){
         customer_notFound.style.display = "none";
        customer_details.style.display = "block";
       customer_name.textContent =  data.customer_name;
        sessionStorage.setItem("cacheName",data.customer_name);
        customer_surname.textContent = data.customer_surname;
        sessionStorage.setItem("cacheSurname",data.customer_surname);
        customer_number.textContent = data.customer_number;
        sessionStorage.setItem("cacheNumber", data.customer_number)
        customer_amount.textContent = data.amount;
        sessionStorage.setItem("cacheAmount" ,data.amount);
        customer_id_no.textContent =  data.id_NO;
        sessionStorage.setItem("cacheId",data.id_NO);
        
  
      }else{
    console.log("No User found");
    console.log(data);
   }
            
    
      });


