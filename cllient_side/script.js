function saveClient () {

   
   const form = document.querySelector("form");
   
   

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
   const response = await fetch('https://backend.c-zwena.co.za/add_customerDetails', {
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
      console.log("client added successful");
      //window.location.href = "dashboard.html  
   }else{
    
    console.log(data);
   }

    } catch (error) {
        console.error('Error submitting form:', error);
    }
  });
   
         
}
saveClient();