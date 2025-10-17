
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

const PHOTOS_COUNT = 25;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES =['Саша','Маша','Даша','Соня','Паша','Ваня','Оля','Лиза'];
const DESCRIPTIONS =[
  'Новый друг',
  'Прекрасный день',
  'Яркий момент',
  'Крутой день'
];

const getRandomArrayElement =(elements) =>
  elements[getRandomInteger(0,elements.length-1)];

const generateMessage = () =>{
  const count = getRandomInteger(1,2);
  const selectMessage = [];
  for (let i=0; i< count; i++){
    selectMessage.push(getRandomArrayElement(MESSAGES));
  }

  return selectMessage.join(' ');
};

let commentIdCounter =1;
const generateUnqueCommentId = () => commentIdCounter++;

const generateComments = (count) => {
  const comments =[];
  for (let i=0;i<count; i++){
    comments.push({
      id: generateUnqueCommentId(),
      avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
      message: generateMessage(),
      name:getRandomArrayElement(NAMES)

    });
  }
  return comments;
};

const photos = [];
for (let i=1; i<= PHOTOS_COUNT; i++){
  photos.push({
    id:i,
    url: `photos\${i}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15,200),
    comments: generateComments(getRandomInteger(0,30))
  });
}
