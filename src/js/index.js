'use strict';

var data = require('./data');

var generatedObjects = generateObjects();
console.log('generatedObjects', generatedObjects);

function generateObjects() {
  var announcements = [];

  for (var i = 0; i < data.titles.length; i++) {
    var addressX = getRandomNumber(100, 1100);
    var addressY = getRandomNumber(130, 630);
    var price = getRandomNumber(500, 1300);
    var indexType = getRandomNumber(0, 3);
    var totalRooms = getRandomNumber(1, 4);
    var totalGuests = getRandomNumber(1, 7);
    var indexCheckin = getRandomNumber(0, 2);
    var indexCheckout = getRandomNumber(0, 2);
    var indexFeatures = getRandomNumber(0, 5);
    var indexPhotos = getRandomNumber(0, 2);
    var x = getRandomNumber(100, 1100);
    var y = getRandomNumber(130, 630);

    var announcement = {
      author: {
        avatar: data.avatars[i],
      },
      offer: {
        title: data.titles[i],
        address: addressX + ', ' + addressY,
        price: price,
        type: data.types[indexType],
        rooms: totalRooms,
        guests: totalGuests,
        checkin: data.times[indexCheckin],
        checkout: data.times[indexCheckout],
        features: data.features[indexFeatures],
        description: data.descriptions[i],
        photos: data.photos[indexPhotos],
      },
      location: {
        x: x,
        y: y,
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
