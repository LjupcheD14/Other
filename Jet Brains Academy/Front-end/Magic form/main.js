// window.onload = function save_data(){
//     document.getElementById('first-name').value = localStorage.getItem('first-name');
//     document.getElementById('last-name').value = localStorage.getItem('last-name');
//     document.getElementById('email').value = localStorage.getItem('email');
//     document.getElementById('phone').value = localStorage.getItem('phone');
//     document.getElementById('company').value = localStorage.getItem('company');
//     document.getElementById('address').value = localStorage.getItem('address');
// }
//
// window.onbeforeunload = function (){
//     let name = document.getElementById('first-name').value;
//     let lname = document.getElementById('last-name').value;
//     let email = document.getElementById('email').value;
//     let phone = document.getElementById('phone').value;
//     let company = document.getElementById('company').value;
//     let address = document.getElementById('address').value;
//
//     localStorage.setItem('first-item', name);
//     localStorage.setItem('last-name', lname);
//     localStorage.setItem('email', email);
//     localStorage.setItem('phone', phone);
//     localStorage.setItem('company', company);
//     localStorage.setItem('address', address);
// }

// let form = document.querySelector("form");
//
// window.oninput = e => {
//     localStorage.setItem(e.target.name.toString(), e.target.value);
// };
//
// window.onload = ev => {
//     Object.keys(localStorage).forEach(key => {
//         form.elements.namedItem(key).value = localStorage.getItem(key);
//     });
// };

// let submit = document.getElementById("submit-button");
//
// window.localStorage.clear(submit);
//
//
// let history = document.getElementsByClassName("submit-history-card");
//
// window.onload = ee => {
//     Object.keys(localStorage).forEach(key => {
//         history.elements.namedItem(key).value = localStorage.getItem(key);
//     });
// };

//
// function save(item) {
//     localStorage.setItem(item.name, item.value);
// }
//
// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('submit-button').addEventListener('click', saveAll);
//     let inputFields = document.getElementsByTagName('input');
//     for (let i = 0; i < inputFields.length; i++) {
//         inputFields[i].value = localStorage.getItem(inputFields[i].name);
//     }
// })
// function saveAll() {
//     let inputFields = document.getElementsByTagName('input');
//     let submissionId = Math.ceil(localStorage.length / 6);
//     for (let i = 0; i < inputFields.length; i++) {
//         localStorage.setItem(inputFields[i].name, '');
//         localStorage.setItem('SUB' + submissionId + '_' + inputFields[i].name, inputFields[i].value);
//         inputFields[i].value = '';
//     }
// }


let firstNameElement = document.getElementById("first-name");
let lastNameElement = document.getElementById("last-name");
let emailElement = document.getElementById("email");
let phoneElement = document.getElementById("phone");
let companyElement = document.getElementById("company");
let addressElement = document.getElementById("address");

let buttonElement = document.getElementById("submit-button")

fillForm();
window.addEventListener("storage", fillForm);

firstNameElement.addEventListener("input",saveFirstName);
lastNameElement.addEventListener("input",saveLastName);
emailElement.addEventListener("input",saveEmail);
phoneElement.addEventListener("input",savePhone);
companyElement.addEventListener("input",saveCompany);
addressElement.addEventListener("input",saveAddress);

buttonElement.addEventListener("click", clickSubmitButton);


function saveFirstName() {
    localStorage.setItem("first-name",firstNameElement.value);
}
function saveLastName() {
    localStorage.setItem("last-name",lastNameElement.value);
}
function saveEmail() {
    localStorage.setItem("email",emailElement.value);
}
function savePhone() {
    localStorage.setItem("phone",phoneElement.value);
}
function saveCompany() {
    localStorage.setItem("company",companyElement.value);
}
function saveAddress() {
    localStorage.setItem("address",addressElement.value);
}

function fillForm()
{
    firstNameElement.value = localStorage.getItem("first-name");
    lastNameElement.value = localStorage.getItem("last-name");
    emailElement.value = localStorage.getItem("email");
    phoneElement.value = localStorage.getItem("phone");
    companyElement.value = localStorage.getItem("company");
    addressElement.value = localStorage.getItem("address");
}

function clickSubmitButton(){
    addToSubmittedValuesArray();
    emptySubmittedInfo();

}

function addToSubmittedValuesArray() {
    let submittedValuesArray = JSON.parse(localStorage.getItem("submittedValues") || "[]");
    submittedValuesArray.push(createValuesObject());
    localStorage.setItem("submittedValues", JSON.stringify(submittedValuesArray));
    console.log(JSON.stringify(submittedValuesArray));
}


function emptySubmittedInfo() {
    localStorage.setItem("first-name","");
    localStorage.setItem("last-name","");
    localStorage.setItem("email","");
    localStorage.setItem("phone","");
    localStorage.setItem("company","");
    localStorage.setItem("address","");
}


function createValuesObject() {
    return  {
        "firstName":firstNameElement.value,
        "lastName":lastNameElement.value,
        "email":emailElement.value,
        "phone":phoneElement.value,
        "company":companyElement.value,
        "address":addressElement.value
    }
}
