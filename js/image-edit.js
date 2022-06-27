const image = document.querySelector('.img-upload__preview').querySelector('img');
const scaleInput = document.querySelector('.scale__control--value');
const sliderElement = document.querySelector('.effect-level__slider');
const effects = document.querySelectorAll('.effects__radio');
const effectValue = document.querySelector('.effect-level__value');
document.querySelector('.img-upload__overlay').classList.remove('hidden');
const scaleSettings = {
  minVal: 25,
  maxVal: 100,
  defaultVal: 100,
  step: 25
};

const getDefault = () => {
  scaleInput.value = `${scaleSettings.defaultVal}%`;
  const scaleInputValue = parseInt(scaleInput.value, 10);
  const scale = scaleInputValue / 100;
  image.style.transform = `scale( ${scale} )`;
};

const getBigger = () => {
  let scaleInputValue = parseInt(scaleInput.value, 10);
  if (scaleInputValue < scaleSettings.maxVal) {
    scaleInputValue += scaleSettings.step;
    scaleInput.value = `${scaleInputValue}%`;
    const scale = scaleInputValue / 100;
    image.style.transform = `scale( ${scale} )`;
  }
};

const getSmaller = () => {
  let scaleInputValue = parseInt(scaleInput.value, 10);
  if (scaleInputValue > scaleSettings.minVal) {
    scaleInputValue -= scaleSettings.step;
    scaleInput.value = `${scaleInputValue}%`;
    const scale = scaleInputValue / 100;
    image.style.transform = `scale( ${scale} )`;
  }
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value;
      }
      return value.toFixed(1);
    },
    from: function(value) {
      return parseFloat(value);
    }
  }
});

effects.forEach((effect) => {
  effect.addEventListener('change', (evt) => {
    console.log(evt.target.value);
  });
});

// sliderElement.noUiSlider.on('update', () => {
//   effectValue.value = sliderElement.noUiSlider.get();
// });

function filterNone() {
  sliderElement.classList.add('hidden');
  image.classList.remove(image.classList[0]);
}

function filterChrome() {
  sliderElement.noUiSlider.updateOptions ({
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  });
  image.classList.add('effects__preview--chrome');
  image.style.filter = `grayscale(${sliderElement.noUiSlider.get()})`;
  effectValue.value = sliderElement.noUiSlider.get();
}

function filterSepia() {
  sliderElement.noUiSlider.updateOptions ({
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  });
  image.classList.add('effects__preview--sepia');
  image.style.filter = `sepia(${sliderElement.noUiSlider.get()})`;
  effectValue.value = sliderElement.noUiSlider.get();
}

function filterMarvin() {
  sliderElement.noUiSlider.updateOptions ({
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    start: 100,
  });
  image.classList.add('effects__preview--marvin');
  image.style.filter = `invert(${sliderElement.noUiSlider.get()}%)`;
  effectValue.value = `${sliderElement.noUiSlider.get()}%`;
}

function filterPhobos() {
  sliderElement.noUiSlider.updateOptions ({
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    start: 3,
  });
  image.classList.add('effects__preview--phobos');
  image.style.filter = `blur(${sliderElement.noUiSlider.get()}px)`;
  effectValue.value = `${sliderElement.noUiSlider.get()}px`;
}

function filterHeat() {
  sliderElement.noUiSlider.updateOptions ({
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    start: 3,
  });
  image.classList.add('effects__preview--heat');
  image.style.filter = `brightness(${sliderElement.noUiSlider.get()}px)`;
  effectValue.value = `${sliderElement.noUiSlider.get()}px`;
}
// filterMarvin();
// filterChrome();
// image.classList.remove(image.classList[0]);
export{getBigger, getSmaller, getDefault};
