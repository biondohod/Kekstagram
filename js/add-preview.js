import {generatePhotoData} from './generate-photo-data.js';
import { addPreviewListener} from './big-photo.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photosFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');
const photosData = generatePhotoData();
photosData.forEach(({id, url, description, likes, comments}) => {
  const newPhoto = pictureTemplate.cloneNode(true);
  newPhoto.id = id;
  newPhoto.querySelector('.picture__likes').textContent = likes;
  newPhoto.querySelector('.picture__comments').textContent = comments.length;
  newPhoto.querySelector('.picture__img').src = url;
  addPreviewListener(newPhoto, description, comments);
  photosFragment.append(newPhoto);
});

pictures.append(photosFragment);
const picturesList = document.querySelectorAll('.picture');
export {picturesList};


