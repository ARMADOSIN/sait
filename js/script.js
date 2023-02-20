let loginButton = document.querySelector('.login-button');
let loginPopup = document.querySelector('.login-popup');

loginButton.addEventListener('click', showPopup);

function showPopup(evt) {
    evt.preventDefault();
    loginPopup.classList.toggle("show-popup");
};