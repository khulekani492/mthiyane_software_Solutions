function saveClient () {

   
   const form = document.querySelector("form");
   const business_nameCache = sessionStorage.getItem("businessName");
   const business_Id =  document.getElementById("businessId");
   console.log("session memory : " + business_nameCache + " business name in form : " + business_Id.value);
   
   
   business_Id.value = business_nameCache;
   

   console.log("business ID after update : " + business_Id.value );
   

   console.log("How does it feel to be you");
  //  busiess_name.value = businessNameCache;   
   

   form.addEventListener('submit', async (event) => {
    // 1. Prevent the default browser form submission
   event.preventDefault();

    // 2. Gather form data automatically
    const formData = new FormData(form );

    try {
        // 3. Send the POST request
      //    if(!response.ok){
   const response = await fetch('https://backend.c-zwena.co.za/add_client', {
            method: 'POST',
            
            body: formData // Sent natively as multipart/form-data
        });

        // 4. Handle response
        if (!response.ok) {
            
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

   const data = await response.json();
   console.log('Success:', data);
   if(data.status == "OK"){   
      console.log(data.numberOfCUstomer)
      sessionStorage.setItem("total_count",data.numberOfCUstomer);
      //window.location.href = "dashboard.html";
      const url = new URL('https://c-zawena.khulekaniszondo6.workers.dev/cllient_side/form');

       // 2. Set/Update a parameter
       url.searchParams.set('user_id', data.userId);
       url.searchParams.set('amount', data.amount); // Appends if it doesn't exist

       const unique_link = document.getElementById("customer_link");

       unique_link.value = url.toString();
       
       
       


      

  
  
   }else{
    console.log("No User found");
    console.log(data);
   }

    } catch (error) {
        console.error('Error submitting form:', error);
    }
  });
   
         
}
 function copyInputValue() {
            // Get the input element by its ID
            const inputElement = document.getElementById("customer_link");
            
            // Get the value from the input field
            const textToCopy = inputElement.value;

            // Use the Clipboard API to copy the text
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    alert("Copied to clipboard: " + textToCopy);
                })
                .catch(err => {
                    console.error("Failed to copy text: ", err);
                });
        }

saveClient();
copyInputValue();