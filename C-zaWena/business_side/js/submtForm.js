
document.getElementById("visibleForm").addEventListener('submit',async function(event){
     event.preventDefault();
    
     const myform = document.getElementById("visibleForm");
     const sentForm = new FormData(myform);

     const response = await fetch('https://project.c-zwena.co.za/confirm_client',
      {
        method:'Post',
        body: sentForm
      });

   
      if (!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
            }

      const data = await response.json();
      const status = data.Status;
      console.log('Success:', status);
      if(status == "OK"){
        console.log('Smile')
        attempt_payment();
      }
      
    
      });




function attempt_payment(){
 
  console.log("Siyafika Kodwa")
  // 2. Extract the string value typed by the user
  const userData = document.getElementById('userAmount').value; 
  
  // 3. Inject that value directly into the hidden field
  document.getElementById('sandbox').value = userData; 
  
  // 4. Trigger the submission of the hidden form
  document.getElementById('cashile').submit(); 
};




