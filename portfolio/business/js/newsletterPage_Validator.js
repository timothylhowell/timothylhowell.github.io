"use strict"


window.onload = setForm;
//Set event listeners for validation
window.addEventListener("load", function() {
   // Button
   document.getElementById("sendButton").onclick = runSend;
   // First Name
   document.getElementById("nameFirst").oninput = validateFirstName;
   // Last Name
   document.getElementById("nameLast").oninput = validateLastName;
   // Email
   document.getElementById("mailNews").oninput = validateEmail;

});

// Run validations
function runSend() {
   validateFirstName();
   validateLastName();
   validateEmail();
}

// Create First Name validation
function validateFirstName() {
   var nameFirst = document.getElementById("nameFirst");
   if (nameFirst.validity.valueMissing) {
    nameFirst.setCustomValidity("Enter your first name");
   } else {
    nameFirst.setCustomValidity("");
   }
}

// Create Last Name validation
function validateLastName() {
    var nameLast = document.getElementById("nameLast");
    if (nameLast.validity.valueMissing) {
        nameLast.setCustomValidity("Enter your last name");
    } else {
        nameLast.setCustomValidity("");
    }
 }

// Create Email validation
function validateEmail() {
   var mailNews = document.getElementById("mailNews");
   if (mailNews.validity.valueMissing) {
    mailNews.setCustomValidity("Enter your email");
   } else if ((/^([A-Za-z]{3,}([0-9]*))(\.*)([A-Za-z]*)\@([A-Za-z]{3,})\.([A-Za-z]{3,})(\.*)([A-Za-z]*)(\.*)([A-Za-z]*)$/.test(mailNews.value) === false)) {
    mailNews.setCustomValidity("Please enter a Valid Email");
   } else {
    mailNews.setCustomValidity("");
   }
}


// Provide alert if all fields valid
function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Thank you for signing up for our newsletter. We will send it to your email: " + document.getElementById("mailNews").value);
      return false;
   }
}