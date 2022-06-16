const getRandomInt = function (min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const maxPossibleStringLength = function (string, maxLenght) {
  let length = String(string).length;
  return length <= maxLenght ? 'true' : 'false';
}

