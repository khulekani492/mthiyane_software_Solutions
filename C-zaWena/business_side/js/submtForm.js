document.getElementById('visibleForm').addEventListener('submit', function(event) {
  // 1. Stop the visible form from performing its default submission
  event.preventDefault(); 
  
  // 2. Extract the string value typed by the user
  const userData = document.getElementById('userAmount').value; 
  
  // 3. Inject that value directly into the hidden field
  document.getElementById('sandbox').value = userData; 
  
  // 4. Trigger the submission of the hidden form
  document.getElementById('cashile').submit(); 
});