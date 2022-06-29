import { getDefault, getBigger, getSmaller, filterNone } from './image-edit.js';
const buttonBigger = document.querySelector('.scale__control--bigger');
const buttonSmaller = document.querySelector('.scale__control--smaller');

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadInput = document.querySelector('#upload-file');
const buttonClose = document.querySelector('#upload-cancel');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

imgUploadInput.addEventListener('change', () => {
  openImgOverlay();
});

const onImgOverlayEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    // eslint-disable-next-line no-unused-expressions
    evt.PreventDefault;
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
  buttonClose.removeEventListener('click', closeImgOverlay);
  document.removeEventListener('keydown', onImgOverlayEscKeydown);
  buttonBigger.removeEventListener('click', getBigger);
  buttonSmaller.removeEventListener('click', getSmaller);
}

export {onImgOverlayEscKeydown, closeImgOverlay};


