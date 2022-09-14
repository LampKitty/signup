
// DOM elements
const submit = document.querySelector("#submit");
const pwd = document.querySelector("#pwd");
const pwdcheck = document.querySelector("#pwd-confirm");
const signup = document.querySelector(".signup");
let error = document.createElement("div");
error.textContent = "Passwords do not match!";
error.setAttribute('style', 
'height: 40px; \
width: 40%; \
margin-top: 20px; \
color: #fff; \
text-align: center; \
line-height: 40px; \
font-family: \'Roboto\', sans-serif; \
border: 1px solid #F806CC;');




submit.addEventListener('click', function() {
    if (pwd.value != pwdcheck.value) {
        signup.appendChild(error);
        pwd.style.border = '1px solid red';
        pwdcheck.style.border = '1px solid red';
    }
})