const urlParams = new URLSearchParams(window.location.search);
const resetToken = urlParams.get("reset_token");
const URL = "https://tupple.herokuapp.com/api/v1/password/reset";

function resetPassword() {
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm_password").value;
  let xhr = new XMLHttpRequest();
  xhr.open("POST", URL);

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status == 200) {
        window.location.replace("https://tupple.io/resetsuccess");
      } else {
        alert(
          "The reset password link has expired, please request forget password again"
        );
      }
    }
  };

  let payload = {
    new_password: password,
    new_password_confirmation: confirm_password,
    reset_token: resetToken,
  };

  xhr.send(JSON.stringify(payload));
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
