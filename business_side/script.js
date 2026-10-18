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



document.getElementById("searchClient").addEventListener('submit',async function(event){
     event.preventDefault();
    
     const myform = document.getElementById("searchClient");
     console.log(myform);
     const sentForm = new FormData(myform);

     const response = await fetch('https://backend.c-zwena.co.za/customer_records',
      {
        method:'Post',
        body: sentForm
      });

   
      if (!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
            }

      const data = await response.json();
      
      console.log('Success:', data);
     
      
  
      

     const customer_name = document.getElementById("customerName");
     const customer_surname = document.getElementById("customerSurname");
     const customer_number = document.getElementById("customerNumber");
     const customer_id_no = document.getElementById("customerID");
     const customer_amount = document.getElementById("customerAmount");
     
     if(data.status == "OK"){
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
        window.location.href = "paymentHistory.html"
  
      }
            
    
      });


  function payment_history(){   
     const customer_name = document.getElementById("memo_c_name");
     const customer_surname = document.getElementById("memo_c_surname");
     const customer_number = document.getElementById("memo_c_number");
     const customer_id = document.getElementById("memo_id_no");
     const customer_amount = document.getElementById("memo_c_amount");
     
     customer_name.textContent = sessionStorage.getItem("cacheName") ;
     customer_surname.textContent = sessionStorage.getItem("cacheSurname");
     customer_number.textContent = sessionStorage.getItem("cacheNumber");
     customer_id.textContent = sessionStorage.getItem("cacheId");
     customer_amount.textContent = sessionStorage.getItem("cacheAmount"); 
  }



payment_history()