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


payment_history();
