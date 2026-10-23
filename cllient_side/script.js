const queryString = window.location.search;

// 2. Parse the parameters
const urlParams = new URLSearchParams(queryString);

// 3. Fetch specific values using .get()
const userId = urlParams.get('user_id');
const amount = urlParams.get('amount');

function saveClient () {
   console.log("This is inside the function")
   console.log(amount);
   const form = document.querySelector("form");
   
   

       // 2. Set/Update a parameter
      
     
   

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