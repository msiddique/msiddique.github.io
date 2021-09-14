const urlParams = new URLSearchParams(window.location.search);
const resetToken = urlParams.get("token");
const URL = "http://localhost:3000/api/v1/password/reset";

function resetPassword() {
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm_password").value;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", URL);

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  };

  var data = {
    Id: 78912,
    Customer: "Jason Sweet",
    Quantity: 1,
    Price: 18.0,
  };

  xhr.send(data);
}

function onConfirmationChange() {
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm_password").value;
  let password_message = document.getElementById("password_message");
  let confirmation_message = document.getElementById("confirmation_message");

  // Validate password length
  if (password.length < 6 || password.length > 16) {
    password_message.style.color = "red";
    password_message.innerHTML =
      "Password must be between 6 and 16 characters.";
  } else {
    password_message.style.color = "green";
    password_message.innerHTML = "";
  }

  // Validate Password matches
  if (password == confirm_password) {
    confirmation_message.style.color = "green";
    confirmation_message.innerHTML = "";
  } else {
    confirmation_message.style.color = "red";
    confirmation_message.innerHTML = "Password does not match";
  }

  // Enable or Disable Submit button
  let submitButton = document.getElementById("submitButton");
  if (
    password == confirm_password &&
    password.length >= 6 &&
    password.length <= 16
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
