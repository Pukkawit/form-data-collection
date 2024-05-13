"use strict";

const displayMode = document.querySelector("#display-mode");
const bodyElement = document.querySelector("body");
const fieldset = document.querySelector("fieldset");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const male = document.getElementById("male");
const female = document.getElementById("female");
const pass = document.getElementById("pass");
const conPass = document.getElementById("con-pass");
const hidePass = document.querySelector(".close");
const revealPass = document.querySelector(".open");
const hidePass2 = document.querySelector(".con-close");
const revealPass2 = document.querySelector(".con-open");
const termsCondition = document.querySelector("#t_c-ref");
const terms = document.querySelector("#term-conditions");
const form = document.querySelector("form");
const errorMsg = document.querySelector(".error-mgs");
const footer = document.querySelector("footer");

function hideShowPaswrd() {
  if (pass.type === "password") {
    pass.type = "text";
    hidePass.style.display = "none";
    revealPass.style.display = "flex";
  } else {
    pass.type = "password";
    hidePass.style.display = "flex";
    revealPass.style.display = "none";
  }
}
function hideShowPaswrd2() {
  if (conPass.type === "password") {
    conPass.type = "text";
    hidePass2.style.display = "none";
    revealPass2.style.display = "flex";
  } else {
    conPass.type = "password";
    revealPass2.style.display = "none";
    hidePass2.style.display = "flex";
  }
}

displayMode.addEventListener("click", () => {
  if (!bodyElement.classList.contains("dark")) {
    bodyElement.setAttribute("class", "dark");
    fieldset.setAttribute("class", "light-dark");
    fieldset.style.cssText = `
    box-shadow: 3px 3px 4px rgba(255, 255, 255, 0.25);
    `;
    displayMode.textContent = "Light Mode";
    terms.checked = true;
    female.checked = true;
    male.checked = false;
    footer.style.cssText = `
    background-image: unset;
    background-color: #9ba4b8;
    color: #000000;
    `;
    termsCondition.style.cssText = `
    color: #c4cee0;
    font-style: italic;
    font-size: 0.7rem;
    `;
  } else {
    bodyElement.classList.remove("dark");
    fieldset.classList.remove("light-dark");
    displayMode.textContent = "Dark Mode";
    terms.checked = false;
    male.checked = true;
    female.checked = false;
    footer.style.cssText = `
    background-image: linear-gradient(#183d5e, #23394c)
    `;
    termsCondition.style.cssText = `
    color: normal;
    font-style: normal;
    font-size: unset;
    `;
    fieldset.style.cssText = `
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5);
    `;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!email.value) {
    let errorEmail = document.createElement("p");
    errorEmail.style.cssText = `
    color: #AF0101;
    margin: 0;
    `;
    errorEmail.textContent = "Email is highly required!";
    fieldset.prepend(errorEmail);
    email.style.color = "red";
  } else if (!pass.value || !conPass.value) {
    errorMsg.style.display = "block";
    errorMsg.style.textAlign = "center";
    errorMsg.textContent =
      "To type your password dey hard you? You no know say na for your own good. Go back there immediately!";
  } else if (pass.value !== conPass.value) {
    errorMsg.style.display = "block";
    errorMsg.style.textAlign = "center";
    errorMsg.textContent =
      "Go and check that your both password match. Make good use of your eyes. I don't like stress!";
  } else if (terms.checked === false) {
    errorMsg.style.display = "block";
    errorMsg.style.textAlign = "center";
    errorMsg.textContent =
      "Go back and tick that terms and condition or you leave this place.";
  } else {
    //Receive Data to Send to DB
    errorMsg.style.display = "none";
    let toDB = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: pass.value,
      gender: male.checked ? male.value : female.value,
      termsCondition: terms.checked,
    };
    console.log(toDB);
  }
});

firstName.setAttribute("title", "This is your First Name");
firstName.disabled = true;
firstName.value = "Witty";
lastName.value = "Umosung";
lastName.disabled = true;

console.log(firstName.value);
