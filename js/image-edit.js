const image = document.querySelector('.img-upload__preview').querySelector('img');
const scaleInput = document.querySelector('.scale__control--value');
const sliderElement = document.querySelector('.effect-level__slider');
const effects = document.querySelectorAll('.effects__radio');
const effectValue = document.querySelector('.effect-level__value');
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
sliderElement.classList.add('hidden');
effects.forEach((effect) => {
  effect.addEventListener('change', (evt) => {
    if (evt.target.value === 'none') {
      filterNone();
    } else if (evt.target.value === 'chrome') {
      filterChrome();
    } else if (evt.target.value === 'sepia') {
      filterSepia();
    } else if (evt.target.value === 'marvin') {
      filterMarvin();
    } else if (evt.target.value === 'phobos') {
      filterPhobos();
    } else if (evt.target.value === 'heat') {
      filterHeat();
    }
  });
});

function filterNone() {
  sliderElement.classList.add('hidden');
  image.style.filter = '';
  image.classList.remove(image.classList[0]);
}

function filterChrome() {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions ({
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  });
  image.classList.remove(image.classList[0]);
  image.classList.add('effects__preview--chrome');
  sliderElement.noUiSlider.on('update', () => {
    image.style.filter = `grayscale(${sliderElement.noUiSlider.get()})`;
    effectValue.value = sliderElement.noUiSlider.get();
  });
}

function filterSepia() {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions ({
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  });
  image.classList.remove(image.classList[0]);
  image.classList.add('effects__preview--sepia');
  sliderElement.noUiSlider.on('update', () => {
    image.style.filter = `sepia(${sliderElement.noUiSlider.get()})`;
    effectValue.value = sliderElement.noUiSlider.get();
  });
}

function filterMarvin() {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions ({
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    start: 100,
  });
  image.classList.remove(image.classList[0]);
  image.classList.add('effects__preview--marvin');
  sliderElement.noUiSlider.on('update', () => {
    image.style.filter = `invert(${sliderElement.noUiSlider.get()}%)`;
    effectValue.value = sliderElement.noUiSlider.get();
  });
}

function filterPhobos() {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions ({
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    start: 3,
  });
  image.classList.remove(image.classList[0]);
  image.classList.add('effects__preview--phobos');
  sliderElement.noUiSlider.on('update', () => {
    image.style.filter = `blur(${sliderElement.noUiSlider.get()}px)`;
    effectValue.value = sliderElement.noUiSlider.get();
  });
}

function filterHeat() {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions ({
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    start: 3,
  });
  image.classList.remove(image.classList[0]);
  image.classList.add('effects__preview--heat');
  sliderElement.noUiSlider.on('update', () => {
    image.style.filter = `brightness(${sliderElement.noUiSlider.get()})`;
    effectValue.value = sliderElement.noUiSlider.get();
  });
}

export{getBigger, getSmaller, getDefault, filterNone};
