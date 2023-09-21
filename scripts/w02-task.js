/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Melissa Orton";
let currentYear = 2023;
let profilePicture = "images/profile_photo.jpg"


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
let favoriteFood = ['water', 'chocolate', 'potatoes', 'cheese'];
foodElement.textContent = favoriteFood;
const newItem = "pizza";
favoriteFood.push(newItem);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;






