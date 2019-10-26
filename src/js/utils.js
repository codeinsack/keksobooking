'use strict';

var data = require('./data');

function fillMapWithPins(announcements, $pinTemplate, $mapPins) {
  var $fragment = document.createDocumentFragment();
  announcements.forEach(function (announcement) {
    var $pinClone = document.importNode($pinTemplate.content, true);
    var $btn = $pinClone.firstElementChild;
    $btn.style.left = announcement.location.x + 'px';
    $btn.style.top = announcement.location.y + 'px';
    $btn.firstElementChild.src = announcement.author.avatar;
    $btn.firstElementChild.alt = announcement.offer.title;
    $fragment.appendChild($pinClone);
  });
  $mapPins.appendChild($fragment);
}

function generateObjects() {
  var MIN_COORD_X = 300;
  var MAX_COORD_X = 900;
  var MIN_COORD_Y = 200;
  var MAX_COORD_Y = 500;
  var MIN_PRICE = 500;
  var MAX_PRICE = 1300;
  var MIN_ROOMS_COUNT = 1;
  var MAX_ROOMS_COUNT = 4;
  var MIN_GUESTS_COUNT = 1;
  var MAX_GUESTS_COUNT = 7;
  var announcements = [];

  for (var i = 0; i < data.titles.length; i++) {
    var price = getRandomNumber(MIN_PRICE, MAX_PRICE);
    var indexType = getRandomNumber(0, data.types.length - 1);
    var totalRooms = getRandomNumber(MIN_ROOMS_COUNT, MAX_ROOMS_COUNT);
    var totalGuests = getRandomNumber(MIN_GUESTS_COUNT, MAX_GUESTS_COUNT);
    var indexCheckin = getRandomNumber(0, data.times.length - 1);
    var indexCheckout = getRandomNumber(0, data.times.length - 1);
    var featuresCount = getRandomNumber(1, data.features.length);
    var photosCount = getRandomNumber(1, data.features.length);
    var locationX = getRandomNumber(MIN_COORD_X, MAX_COORD_X);
    var locationY = getRandomNumber(MIN_COORD_Y, MAX_COORD_Y);

    var announcement = {
      author: {
        avatar: data.avatars[i],
      },
      offer: {
        title: data.titles[i],
        address: data.addresses[i],
        price: price,
        type: data.types[indexType],
        rooms: totalRooms,
        guests: totalGuests,
        checkin: data.times[indexCheckin],
        checkout: data.times[indexCheckout],
        features: data.features.slice(0, featuresCount),
        description: data.descriptions[i],
        photos: data.photos.slice(0, photosCount),
      },
      location: {
        x: locationX,
        y: locationY,
      }
    };
    announcements.push(announcement);
  }
  return announcements;
}

function getRandomNumber(min, max) {
  var random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

module.exports = {
  generateObjects: generateObjects,
  fillMapWithPins: fillMapWithPins,
};
