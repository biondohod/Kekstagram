const bigPicture = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const buttonClose = bigPicture.querySelector('.big-picture__cancel');

const createCommentsList = function(commentsList) {
  socialComments.innerHTML = '';
  commentsList.forEach((commentItem) => {
    const newComment = socialComment.cloneNode(true);

    const newCommentImg = newComment.querySelector('.social__picture');
    newCommentImg.src = commentItem.avatar;
    newCommentImg.alt = commentItem.name;

    const newCommentMessage = newComment.querySelector('.social__text');
    newCommentMessage.textContent = commentItem.message;
    socialComments.append(newComment);
  });

};

const renderBigPhoto = (photo, description, comments) => {
  const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
  bigPictureImg.src = photo.querySelector('.picture__img').src;
  bigPictureImg.alt = description;

  const bigPictureDescription = bigPicture.querySelector('.social__caption');
  bigPictureDescription.textContent = description;

  const bigPictureLikes = bigPicture.querySelector('.likes-count');
  bigPictureLikes.textContent = photo.querySelector('.picture__likes').textContent;

  const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
  bigPictureCommentsCount.textContent = photo.querySelector('.picture__comments').textContent;

  createCommentsList(comments);
};

const onBigPhotoEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    // eslint-disable-next-line no-unused-expressions
    evt.PreventDefault;
    closeBigPhoto();
  }
};

function openBigPhoto(photo, description, comments) {
  renderBigPhoto(photo, description, comments);
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onBigPhotoEscKeydown);
  buttonClose.addEventListener('click', closeBigPhoto);

}

function closeBigPhoto() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonClose.removeEventListener('click', closeBigPhoto);
  document.removeEventListener('keydown', onBigPhotoEscKeydown);
}

const addPreviewListener = (photo, description, comments) => {
  photo.addEventListener('click', () => {
    openBigPhoto(photo, description, comments);
  });
};

export{addPreviewListener};
