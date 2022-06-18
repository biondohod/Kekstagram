const PHOTOS_COUNT = 25;

const getRandomPositiveInteger = function (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = function (string, length) {
  return string.length <= length;
};

const generateComments = function (commentsText, names) {
  const commentsCount = getRandomPositiveInteger(1, commentsText.length);
  const comments = [];
  for (let i = 0; i < commentsCount; i++) {
    comments[i] = {
      id: i + 1,
      avatar: 'img/' + String(getRandomPositiveInteger(1,6)) + '.jpg',
      message: commentsText[getRandomPositiveInteger(0, commentsText.length - 1)],
      name: names[getRandomPositiveInteger(0, names.length -1)]
    };
  }
  return comments;
};

const generateDescriptions = function (descriptionsText) {
  const descriptions = [];
  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    {
      descriptions[i - 1] = {
        id: i,
        url: 'photos/' + String(i) + '.jpg',
        description: descriptionsText[getRandomPositiveInteger(0, descriptionsText.length - 1)],
        likes: getRandomPositiveInteger(15, 200),
        comments: generateComments(photosCommentsText, usersNames)
      };
    }
    // console.log(photosDescriptions[i - 1]);
  }
  return descriptions;
};


const usersNames = ['Артем', 'Алиса', 'Ярослав', 'Андрей', 'Вадим', 'Ясуо', 'Юля', 'Соня', 'Виталик', 'Мухаммед', 'Ауе басота', 'Ass Destroyer', 'Хулиган228', 'Катя'];

const photosDescriptionsText = [
  'Мне бог не дал братьев по крови, но я нашел их в очереди в аптеке за прокладками',
  'Лишь потеряв все мы обретаем свободу',
  'Как ни старайся - яйца идеально не побреешь',
  'Ветер всегда на моей стороне',
  'Самое неожиданное место для пирсинга у девочек это хуй',
  'Я просто ищу дорогу домой',
  'Бывает в жизни так тоскливо, что даже сало не лезет в глотку',
  'Самая классная фраза из уст парней - "тут сало по скидке, тебе купить?"'
];

const photosCommentsText = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]
const photosDescriptions = generateDescriptions(photosDescriptionsText);
console.log(photosDescriptions);

