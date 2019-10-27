'use strict';

(function () {
  var TITLES = [
    'Уютно и не дорого',
    'Первоклассное место',
    'Здесь чисто и аккуратно',
    'Арт-пространство',
    'Вы останитесь довольны',
    'Без тараканов',
    'Новый ремонт',
    'Тихие соседи',
  ];
  var ADDRESSES = [
    '102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3',
    '102-0082 Tōkyō-to, Shinagava-ku, Ichibanchō, 24−1',
    '102-0082 Tōkyō-to, Hamarikyu-ku, Ichibanchō, 33',
    '102-0082 Tōkyō-to, Shibuya-ku, Ichibanchō, 14−2',
    '102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−1',
    '102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 12',
    '102-0082 Tōkyō-to, Shinagava-ku, Ichibanchō, 14−3',
    '102-0082 Tōkyō-to, Hamarikyu-ku, Ichibanchō, 14−3',
  ];
  var TYPES = [
    'palace',
    'flat',
    'house',
    'bungalo',
  ];
  var TIMES = ['12:00', '13:00', '14:00'];
  var FEATURES = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ];
  var DESCRIPTIONS = [
    'Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.',
    'Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.',
    'Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.',
    'Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.',
    'Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.',
    'Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.',
    'Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.',
    'Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.',
  ];
  var PHOTOS = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
  ];

  window.data = {
    titles: TITLES,
    addresses: ADDRESSES,
    types: TYPES,
    times: TIMES,
    features: FEATURES,
    descriptions: DESCRIPTIONS,
    photos: PHOTOS,
  };
})();
