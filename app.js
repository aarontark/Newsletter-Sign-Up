const emailForm = document.querySelector('.signup-form');
const emailInput = document.querySelector('.input-box');
const submitBtn = document.querySelector('.submit');
const errorMsg = document.querySelector('.error-message');
const dismissBtn = document.querySelector('.dismiss-button');
const emailHighlight = document.querySelector('.email-highlight');
const registerCard = document.querySelector('.signup-form-container');
const confirmationCard = document.querySelector('.confirmation-card');

emailInput.addEventListener('invalid', () => {
    errorMsg.style.opacity = '1';
    if (emailInput.classList.contains('input-box')) {
        emailInput.classList.remove('input-box');
        emailInput.classList.add('input-box-error');
    } else {
        return;
    }
})

emailForm.addEventListener('submit', () => {
    event.preventDefault();
    emailInput.classList.remove('input-box-error');
    emailInput.classList.add('input-box');
    registerCard.style.display = 'none';
    confirmationCard.style.display = 'flex';
    emailHighlight.innerHTML = emailInput.value;
})

dismissBtn.addEventListener('click', () => {
    if (window.innerWidth >= 1120) {
        registerCard.style.display = 'grid';
    } else {
        registerCard.style.display = 'block';
    }
    confirmationCard.style.display = 'none';
    emailInput.value = '';
    errorMsg.style.opacity = '0';
})

console.log(emailInput);



