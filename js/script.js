let loginButton = document.querySelector('.login-button');
let loginPopup = document.querySelector('.login-popup');
let closeBtn = document.querySelector('.close');

loginButton.addEventListener('click', showPopup);

function showPopup(evt) {
    evt.preventDefault();
    loginPopup.classList.toggle("show-popup");
};

function closePopup() {
    loginPopup.classList.toggle("show-popup");
};

closeBtn.addEventListener('click', closePopup);