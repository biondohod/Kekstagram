import { closeImgOverlay } from './image-overlay.js';
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const error = errorMessage.cloneNode(true);
const errorButton = error.querySelector('.error__button');
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const ALERT_SHOW_TIME = 5000;
const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.textContent = message;
  alert.style.position = 'absolute';
  alert.style.zIndex = 100;
  alert.style.top = 0;
  alert.style.left = 0;
  alert.style.right = 0;
  alert.style.padding = '20px';
  alert.style.textAlign = 'center';
  alert.style.color = 'white';
  alert.style.textAlign = 'center';
  alert.style.background = 'red';
  document.body.append(alert);
  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};


function closeErrorMessage() {
  error.remove();
  errorButton.removeEventListener('click', closeErrorMessage);
  error.removeEventListener('click', blurCloseErrorMessage);
  document.removeEventListener('keydown', escCloseErrorMessage);
}

function escCloseErrorMessage(evt){
  if (evt.key === 'Escape') {
    closeErrorMessage();
  }
}

function blurCloseErrorMessage(evt) {
  if (!evt.target.classList.contains('error__inner') && !evt.target.classList.contains('error__title')) {
    closeErrorMessage();
  }
}

const showErrorMessage = () => {
  document.body.append(error);
  errorButton.addEventListener('click', closeErrorMessage);
  error.addEventListener('click', blurCloseErrorMessage);
  document.addEventListener('keydown', escCloseErrorMessage);
};

const successMessage = document.querySelector('#success').content.querySelector('.success');
const success = successMessage.cloneNode(true);
const successButton = success.querySelector('.success__button');

function closeSuccessMessage() {
  closeImgOverlay();
  success.remove();
  successButton.removeEventListener('click', closeSuccessMessage);
  success.removeEventListener('click', blurCloseSuccessMessage);
  document.removeEventListener('keydown', escCloseSuccessMessage);
}

function escCloseSuccessMessage(evt){
  if (evt.key === 'Escape') {
    closeSuccessMessage();
  }
}

function blurCloseSuccessMessage(evt) {
  if (!evt.target.classList.contains('success__inner') && !evt.target.classList.contains('success__title')) {
    closeSuccessMessage();
  }
}

const showSuccessMessage = () => {
  document.body.append(success);
  successButton.addEventListener('click', closeSuccessMessage);
  success.addEventListener('click', blurCloseSuccessMessage);
  document.addEventListener('keydown', escCloseSuccessMessage);
};

export {getRandomPositiveInteger, showAlert, showErrorMessage, showSuccessMessage};

