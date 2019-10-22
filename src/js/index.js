'use strict';

var data = require('./data');

console.log('data', data);
console.log('data', data);

var announcements = {
  author: {
    avatar: '',
  },
  offer: {
    title: '',
    address: '',
    price: 0,
    type: '',
    rooms: 0,
    guests: 0,
    checkin: '',
    checkout: '',
    features: [],
    description: '',
    photos: [],
  },
  location: {
    /* случайное число, координата x метки на карте. Значение ограничено размерами блока,
      в котором перетаскивается метка. */
    x: 0,
    /* случайное число, координата y метки на карте от 130 до 630. */
    y: 0,
  }
};
