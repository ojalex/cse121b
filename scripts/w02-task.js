/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Alex Otieno Juma";
let currentYear = new Date().getFullYear();
let profilePicture = "images/oj.jpeg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong> ${fullName} </strong>`;
foodElement.innerHTML = currentYear;
yearElement.innerHTML = currentYear;
imageElement.setAttribute ('src', profilePicture);


/* Step 5 - Array */






