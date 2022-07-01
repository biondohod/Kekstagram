import { addPreviewListener} from './big-photo.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photosFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');

const renderPreview = (photosData) => {
  const picturesCollection = document.querySelectorAll('.picture');
  if (picturesCollection !== undefined) {
    picturesCollection.forEach((picture) => {
      picture.remove();
    });
  }
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
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

export {renderPreview};


