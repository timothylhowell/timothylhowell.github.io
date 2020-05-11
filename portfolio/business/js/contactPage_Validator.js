"use strict"


window.onload = setForm;
//Set event listeners for validation
window.addEventListener("load", function() {
   // Button
   document.getElementById("sendButton").onclick = runSend;
   // Name
   document.getElementById("userName").oninput = validateName;
   // Email
   document.getElementById("userEmail").oninput = validateEmail;
   // Reason
   document.getElementById("contactReason").onchange = validateReason;
   // Number
   document.getElementById("custPhone").oninput = validateNumber;
});

// Run validations
function runSend() {
   validateReason();
   validateName();
   validateEmail();
   validateNumber();
}

// Create Name validation
function validateName() {
   var userName = document.getElementById("userName");
   if (userName.validity.valueMissing) {
      userName.setCustomValidity("Enter your name");
   } else {
      userName.setCustomValidity("");
   }
}

// Create Email validation
function validateEmail() {
   var userEmail = document.getElementById("userEmail");
   if (userEmail.validity.valueMissing) {
      userEmail.setCustomValidity("Enter your email");
   } else if ((/^([A-Za-z]{3,}([0-9]*))(\.*)([A-Za-z]*)\@([A-Za-z]{3,})\.([A-Za-z]{3,})(\.*)([A-Za-z]*)(\.*)([A-Za-z]*)$/.test(userEmail.value) === false)) {
      userEmail.setCustomValidity("Please enter a Valid Email");
   } else {
      userEmail.setCustomValidity("");
   }
}

// Create Phone Number validation
function validateNumber() {
   var custPhone = document.getElementById("custPhone");
   if (custPhone.validity.valueMissing) {
      custPhone.setCustomValidity("Enter your phone number");
   } else if ((/^\d{10}$|^(\(\d{3}\)\s*)?\d{3}[\s-]?\d{4}$/.test(custPhone.value) === false)) {
      custPhone.setCustomValidity("Please enter your number in the format of (xxx) xxx-xxxx");
   } else {
      custPhone.setCustomValidity("");
   }
}

// Create Reason validation
function validateReason() {
   var contactReason = document.getElementById("contactReason");
   if (contactReason.selectedIndex === 0){
      contactReason.setCustomValidity("Select your contact reason");
   } else {
      contactReason.setCustomValidity("");
   }
}

// Provide alert if all fields valid
function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Thank you for contacting us.");
      return false;
   }
}