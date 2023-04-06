const mainCard = document.querySelector('.first-message');
const secondCard = document.querySelector('.second-message');

const submitForm = (event) => {
  event.preventDefault();
  secondCard.classList.remove('hidden');
  mainCard.classList.add('hidden');
};

const form = document.getElementById('form');
form.addEventListener('submit', submitForm);
