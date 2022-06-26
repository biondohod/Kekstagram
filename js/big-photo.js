const bigPicture = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const buttonClose = bigPicture.querySelector('.big-picture__cancel');

const createCommentsList = function(commentsList) {
  socialComments.innerHTML = '';
  commentsList.forEach(function(commentItem) {
    let newComment = socialComment.cloneNode(true);

    let newCommentImg = newComment.querySelector('.social__picture');
    newCommentImg.src = commentItem.avatar;
    newCommentImg.alt = commentItem.name;

    let newCommentMessage = newComment.querySelector('.social__text');
    newCommentMessage.textContent = commentItem.message;
    console.log(newComment);
    socialComments.append(newComment);
  });

};

const renderBigPhoto = (photo, description, comments) => {
  let bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img')
  bigPictureImg.src = photo.querySelector('.picture__img').src;
  bigPictureImg.alt = description;

  let bigPictureDescription = bigPicture.querySelector('.social__caption');
  bigPictureDescription.textContent = description;

  let bigPictureLikes = bigPicture.querySelector('.likes-count');
  bigPictureLikes.textContent = photo.querySelector('.picture__likes').textContent;

  let bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
  bigPictureCommentsCount.textContent = photo.querySelector('.picture__comments').textContent;

  createCommentsList(comments);
};

function openBigPhoto(photo, description, comments) {
  renderBigPhoto(photo, description, comments);
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onBigPhotoEscKeydown);
  buttonClose.addEventListener('click', closeBigPhoto);

};

const onBigPhotoEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.PreventDefault;
    closeBigPhoto();
  }
};

function closeBigPhoto() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonClose.removeEventListener('click', closeBigPhoto);
  document.removeEventListener('keydown', onBigPhotoEscKeydown);
}

const addPreviewListener = function(photo, description, comments) {
  photo.addEventListener('click', () => {
    openBigPhoto(photo, description, comments);
  })};



export{addPreviewListener};
