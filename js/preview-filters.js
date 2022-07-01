import { photosData } from './api.js';
import { renderPreview } from './add-preview.js';
import { getRandomUniqueNumbers, debounce } from './util.js';
const defaultFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');
const RENDER_DELAY = 500;

const renderDefault = debounce(
  renderPreview,
  RENDER_DELAY
);
const applyDefaultFilter = (photoData) => {
  randomFilter.classList.remove('img-filters__button--active');
  discussedFilter.classList.remove('img-filters__button--active');
  defaultFilter.classList.add('img-filters__button--active');
  renderDefault(photoData);
};

const renderRandow = debounce(
  renderPreview,
  RENDER_DELAY
);
const applyRandomFilter = (photoData) => {
  defaultFilter.classList.remove('img-filters__button--active');
  discussedFilter.classList.remove('img-filters__button--active');
  randomFilter.classList.add('img-filters__button--active');
  const randomPhotos = [];
  let i = 0;
  const randomIndex = getRandomUniqueNumbers(0, photoData.length-1, 10);
  randomIndex.forEach((index) => {
    randomPhotos[i] = photoData[index];
    i++;
  });
  renderRandow(randomPhotos);
};

const renderDisscussed = debounce(
  renderPreview,
  RENDER_DELAY
);
const applyDiscussedFilter = (photoData) => {
  defaultFilter.classList.remove('img-filters__button--active');
  randomFilter.classList.remove('img-filters__button--active');
  discussedFilter.classList.add('img-filters__button--active');
  const discussedPhotos = photoData.slice();
  discussedPhotos.sort((photoA,photoB) => {
    const commentsA = photoA.comments.length;
    const commentsB = photoB.comments.length;
    return commentsB - commentsA;
  });
  renderDisscussed(discussedPhotos);
};


defaultFilter.addEventListener('click', () => applyDefaultFilter(photosData));
randomFilter.addEventListener('click', () => applyRandomFilter(photosData));
discussedFilter.addEventListener('click', () => applyDiscussedFilter(photosData));

