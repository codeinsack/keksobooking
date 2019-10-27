'use strict';

var data = window.data;

(function () {
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
          avatar: 'img/avatars/user0' + (i + 1) + '.png',
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

  function createCard($cardTemplate, announcement) {
    var cardTemplateClone = document.importNode($cardTemplate.content, true);
    // Title
    cardTemplateClone.querySelector('.popup__title').textContent = announcement.offer.title;
    // Address
    cardTemplateClone.querySelector('.popup__text--address').textContent = announcement.offer.address;
    // Price
    var price = cardTemplateClone.querySelector('.popup__text--price').innerText;
    var updatedPrice = price.replace(/\d+/, announcement.offer.price);
    cardTemplateClone.querySelector('.popup__text--price').innerText = updatedPrice;
    // Type
    var type = announcement.offer.type;
    var modifiedType = '';
    switch (type) {
      case 'flat':
        modifiedType = 'Квартира';
        break;
      case 'bungalo':
        modifiedType = 'Бунгало';
        break;
      case 'house':
        modifiedType = 'Дом';
        break;
      case 'palace':
        modifiedType = 'Дворец';
        break;
    }
    cardTemplateClone.querySelector('.popup__type').innerText = modifiedType;
    // Guests and rooms
    var roomsCount = announcement.offer.rooms;
    var guestsCount = announcement.offer.guests;
    var roomsText = roomsCount === 1 ? ' комната' : ' комнаты ';
    var guestsText = guestsCount === 1 ? ' гостя' : ' гостей';
    var capacityText = roomsCount + roomsText + ' для ' + guestsCount + guestsText;
    cardTemplateClone.querySelector('.popup__text--capacity').innerText = capacityText;
    // Checkin and checkout
    var timeText = cardTemplateClone.querySelector('.popup__text--time').innerText;
    var times = timeText.split(',');
    var updatedCheckinText = times[0].replace(/\d\d:\d\d/, announcement.offer.checkin);
    var updatedCheckoutText = times[1].replace(/\d\d:\d\d/, announcement.offer.checkout);
    var updatedTimeText = updatedCheckinText + ',' + updatedCheckoutText;
    cardTemplateClone.querySelector('.popup__text--time').innerText = updatedTimeText;
    // Features
    var $featuresList = cardTemplateClone.querySelector('.popup__features');
    var $features = $featuresList.querySelectorAll('li');
    $features.forEach(function (item) {
      var $feature = item.classList[1];
      var feature = /\w+$/.exec($feature)[0];
      if (announcement.offer.features.indexOf(feature) === -1) {
        item.remove();
      }
    });
    // Description
    cardTemplateClone.querySelector('.popup__description').innerText = announcement.offer.description;
    // Photos
    var $photos = cardTemplateClone.querySelector('.popup__photos');
    $photos.innerHTML = '';
    announcement.offer.photos.forEach(function (photoUrl) {
      var $photo = document.createElement('img');
      $photo.classList.add('popup__photo');
      $photo.src = photoUrl;
      $photo.width = 45;
      $photo.height = 40;
      $photo.alt = 'Фотография жилья';
      $photos.appendChild($photo);
    });
    // Avatar
    cardTemplateClone.querySelector('.popup__avatar').src = announcement.author.avatar;

    return cardTemplateClone;
  }

  function getRandomNumber(min, max) {
    var random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
  }

  window.utils = {
    generateObjects: generateObjects,
    fillMapWithPins: fillMapWithPins,
    createCard: createCard,
  };
})();
