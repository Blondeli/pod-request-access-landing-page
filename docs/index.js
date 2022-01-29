// Create function to display error message
function displayErrorMessage(event) {
  event.preventDefault();
  let email = document.querySelector("#request-form").elements["email"].value;
  console.log(email);

  let errorMessage = document.querySelector("#error-message");

  if (!(email.includes("@"))) {
    errorMessage.innerHTML = "Oops! Please check your email";
  } else if (email.length === 0) {
    errorMessage.innerHTML = "Oops! Please add your email";
  } else {
    errorMessage.innerHTML = "";
  }
}


// Add event listener for request button
let requestBtn = document.querySelector("#request-button");
requestBtn.addEventListener("click", displayErrorMessage);