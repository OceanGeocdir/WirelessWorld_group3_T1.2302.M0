
// --------------------------------------------------------- JS for btn Subscribe --------------------------------------------------
function checkSubmit() {
  var email = document.getElementById("email").value; // Get the value of the input field with the id "email"

  if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com/.test(email)) {
    // Check if the email value does not match the specified regular expression pattern
    alert("Please enter a valid email"); // Display an alert message indicating that a valid email should be entered
  } else {
    alert("You have successfully subscribed to our newsletter."); // Display an alert message indicating successful subscription
  }
}

        
      ;


