const bigPicture = document.querySelector('.big-picture');
const pictures = document.querySelectorAll('.picture');
const likesCount = bigPicture.querySelector('.likes-count');

const likePhoto = () => {
  const id = bigPicture.id;
  const picture = pictures[id-1];
  if (likesCount.classList.contains('likes-count--liked')) {
    likesCount.textContent--;
    picture.querySelector('.picture__likes').textContent--;
    picture.classList.remove('picture--liked');
  } else {
    likesCount.textContent++;
    picture.querySelector('.picture__likes').textContent++;
    picture.classList.add('picture--liked');
  }
  likesCount.classList.toggle('likes-count--liked');
};
likesCount.addEventListener('click', likePhoto);
