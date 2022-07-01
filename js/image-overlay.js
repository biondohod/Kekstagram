import { getDefault, getBigger, getSmaller, filterNone } from './image-edit.js';
const buttonBigger = document.querySelector('.scale__control--bigger');
const buttonSmaller = document.querySelector('.scale__control--smaller');

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadInput = document.querySelector('#upload-file');
const buttonClose = document.querySelector('#upload-cancel');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const buttonSubmit = document.querySelector('#upload-submit');

imgUploadInput.addEventListener('change', () => {
  const image = imgUploadInput.files[0];
  const preview = document.querySelector('.img-upload__preview').querySelector('img');
  preview.src = URL.createObjectURL(image);
  openImgOverlay();
});

const onImgOverlayEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeImgOverlay();
  }
};

function openImgOverlay() {
  document.body.classList.add('modal-open');
  imgUploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onImgOverlayEscKeydown);
  buttonClose.addEventListener('click', closeImgOverlay);
  getDefault();
  filterNone();
  buttonBigger.addEventListener('click', getBigger);
  buttonSmaller.addEventListener('click', getSmaller);
}

function closeImgOverlay() {
  imgUploadInput.value = '';
  textHashtags.value = '';
  textDescription.value = '';
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonSubmit.textContent = 'Опубликовать';
  buttonSubmit.disabled = false;
  buttonClose.removeEventListener('click', closeImgOverlay);
  document.removeEventListener('keydown', onImgOverlayEscKeydown);
  buttonBigger.removeEventListener('click', getBigger);
  buttonSmaller.removeEventListener('click', getSmaller);
}

export {onImgOverlayEscKeydown, closeImgOverlay};


