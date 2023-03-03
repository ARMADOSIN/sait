let loginButton = document.querySelector('.login-button');
let loginPopup = document.querySelector('.login-popup');
let closeBtn = document.querySelector('.close-popup');

loginButton.addEventListener('click', showPopup);
closeBtn.addEventListener('click', closePopup);

function showPopup(evt) {
    evt.preventDefault();

    loginPopup.classList.toggle("show-popup");
};


function closePopup(evt) {
    loginPopup.classList.remove("show-popup");
};

loginPopup.addEventListener('click', (e) => {
    if (e.target.classList.contains("show-popop")) {
        closePopup();
    }
});