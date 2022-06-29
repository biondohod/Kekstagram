import { onImgOverlayEscKeydown } from './image-overlay.js';
import { sendData } from './api.js';
const imgForm = document.querySelector('#upload-select-image');
const textHashtags = imgForm.querySelector('.text__hashtags');
const buttonSubmit = imgForm.querySelector('#upload-submit');
const textDescription = imgForm.querySelector('.text__description');
const regExp = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const isValidHashtags = (str) => regExp.test(str);

let hashtags = textHashtags.value.split(' ');

const createErrorMessage = (str) => {
  if (str !== null) {
    const errorMessage = document.querySelector('.text__hashtags__error-text');
    errorMessage.textContent = str;
  }};

const isHasDuplicates = (array) => (new Set(array)).size !== array.length;

const deleteErrorMessage = () => {
  document.querySelector('.text__hashtags__error-text').textContent = '';
};


const hashtagCheck = () => {
  let isFine = true;
  hashtags = textHashtags.value.split(' ');
  if (hashtags.length > 5) {
    createErrorMessage('Можно добавить не более 5 хэштегов');
    isFine = false;
    return isFine;
  } else {
    deleteErrorMessage();
  }
  hashtags.forEach( (hashtag) => {
    if (!isValidHashtags(hashtag)) {
      createErrorMessage('Хэштег должен начинаться с # и может содержать в себе только кириллицу и латинские буквы, а так же цифры от 0 до 9. Длина хэштега не может превышать 20 символов');
      isFine = false;
      return isFine;
    } else {
      deleteErrorMessage();
    }
    if (isHasDuplicates(hashtags)) {
      createErrorMessage('Нельзя использовать один хэштег дважды');
      isFine = false;
      return isFine;
    }
    isFine = true;
    return isFine;
  });
  return isFine;
};

const textHashtagsBlur = () => {
  if (hashtags[0] !== '' ) {
    textHashtags.value = textHashtags.value.trim();
    if(!hashtagCheck())
    {
      buttonSubmit.disabled = true;
    } else {
      buttonSubmit.disabled = false;
    }
  } else if (textHashtags.value === ' ') {
    textHashtags.value = '';
    deleteErrorMessage();
    buttonSubmit.disabled = false;
  }
};

textHashtags.addEventListener('input', () => {
  hashtags = textHashtags.value.split(' ');
  textHashtags.value = textHashtags.value.replace(/\s+/g, ' ');
  if (hashtags[0] !== '' ) {
    if(!hashtagCheck())
    {
      textHashtags.style.outline = '2px solid #DC143C';
      buttonSubmit.disabled = true;
    } else {
      textHashtags.style.outline = 'none';
      buttonSubmit.disabled = false;
    }
  } else if (textHashtags.value !=='') {
    textHashtags.style.outline = 'none';
    textHashtags.value = textHashtags.value.trim();
  } else {
    textHashtags.style.outline = 'none';
    deleteErrorMessage();
    buttonSubmit.disabled = false;
  }
});

textHashtags.addEventListener('focus', () => {
  document.removeEventListener('keydown', onImgOverlayEscKeydown);
});

textHashtags.addEventListener('blur', () => {
  document.addEventListener('keydown', onImgOverlayEscKeydown);
  textHashtagsBlur();
});

textDescription.addEventListener('focus', () => {
  document.removeEventListener('keydown', onImgOverlayEscKeydown);
});

textDescription.addEventListener('blur', () => {
  document.addEventListener('keydown', onImgOverlayEscKeydown);
});

const sendUsersData = (onSuccsess, onFail) => {
  imgForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    sendData(
      onSuccsess,
      onFail,
      formData
    );
  });
};

export {sendUsersData};
