const bigPicture = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const buttonClose = bigPicture.querySelector('.big-picture__cancel');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsCountView = bigPicture.querySelector('.comments-count--view');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentInput = bigPicture.querySelector('.social__footer-text');
const commentInputSubmit = bigPicture.querySelector('.social__footer-btn');

const createCommentsList = (commentsList) => {
  socialComments.innerHTML = '';
  let count = 1;
  commentsList.forEach((commentItem) => {
    const newComment = socialComment.cloneNode(true);

    const newCommentImg = newComment.querySelector('.social__picture');
    newCommentImg.src = commentItem.avatar;
    newCommentImg.alt = commentItem.name;

    const newCommentMessage = newComment.querySelector('.social__text');
    newCommentMessage.textContent = commentItem.message;
    if (count > 5) {
      newComment.classList.add('hidden');
    }
    socialComments.append(newComment);
    count++;
  });

};

const loadMoreComments = () => {
  const hiddenComments = socialComments.querySelectorAll('.hidden');
  if (hiddenComments.length >=5) {
    for (let i = 0; i < 5; i++) {
      hiddenComments[i].classList.remove('hidden');
      commentsCountView.textContent++;
    }
  } else {
    hiddenComments.forEach((comment) => {
      comment.classList.remove('hidden');
      commentsCountView.textContent++;
    });
    commentsLoader.classList.add('hidden');
  }
};

const writeComment = () => {
  commentInput.value = commentInput.value.trim();
  commentInput.setCustomValidity('');
  if (commentInput.value !== '') {
    const newComment = socialComment.cloneNode(true);

    const newCommentImg = newComment.querySelector('.social__picture');
    newCommentImg.src = 'img/avatar-6.svg';
    newCommentImg.alt = 'Ваш комментарий';

    const newCommentMessage = newComment.querySelector('.social__text');
    newCommentMessage.textContent = commentInput.value;
    socialComments.append(newComment);
    commentsCount.textContent++;
    commentsCountView.textContent++;
    commentInput.value = '';
  }
};

const renderBigPhoto = (photo, description, comments) => {
  bigPicture.id = photo.id;
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
  commentsCountView.textContent = 5;
  if (comments.length < commentsCountView.textContent) {
    commentsCountView.textContent = comments.length;
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const onBigPhotoEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    // eslint-disable-next-line no-unused-expressions
    evt.PreventDefault;
    closeBigPhoto();
  }
};
const isInputEnterKeydown = (evt) => {
  if (evt.key === 'Enter') {
    writeComment();
  }
};

function openBigPhoto(photo, description, comments) {
  renderBigPhoto(photo, description, comments);
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onBigPhotoEscKeydown);
  buttonClose.addEventListener('click', closeBigPhoto);
  commentsLoader.addEventListener('click', loadMoreComments);
  commentInput.addEventListener('keydown', isInputEnterKeydown);
  commentInputSubmit.addEventListener('click', writeComment);
}

function closeBigPhoto() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonClose.removeEventListener('click', closeBigPhoto);
  document.removeEventListener('keydown', onBigPhotoEscKeydown);
  commentsLoader.removeEventListener('click', loadMoreComments);
  commentInput.removeEventListener('keydown', isInputEnterKeydown);
  commentInputSubmit.removeEventListener('click', writeComment);
}

const addPreviewListener = (photo, description, comments) => {
  photo.addEventListener('click', () => {
    openBigPhoto(photo, description, comments);
  });
};

export{addPreviewListener};
