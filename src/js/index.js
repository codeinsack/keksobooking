'use strict';

var utils = require('./utils');

var $map = document.querySelector('.map');
var $mapPins = document.querySelector('.map__pins');
var $pinTemplate = document.querySelector('#pin');
var $cardTemplate = document.querySelector('#card');

$map.classList.remove('map--faded');

var announcements = utils.generateObjects();
utils.fillMapWithPins(announcements, $pinTemplate, $mapPins);


var cardTemplateClone = document.importNode($cardTemplate.content, true);
// Title
cardTemplateClone.querySelector('.popup__title').textContent = announcements[0].offer.title;
// Address
cardTemplateClone.querySelector('.popup__text--address').textContent = announcements[0].offer.address;
// Price
var price = cardTemplateClone.querySelector('.popup__text--price').innerText;
var updatedPrice = price.replace(/\d+/, announcements[0].offer.price);
cardTemplateClone.querySelector('.popup__text--price').innerText = updatedPrice;
// Type
var type = announcements[0].offer.type;
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
var roomsCount = announcements[0].offer.rooms;
var guestsCount = announcements[0].offer.guests;
var roomsText = roomsCount === 1 ? ' комната' : ' комнаты ';
var guestsText = guestsCount === 1 ? ' гостя' : ' гостей';
var capacityText = roomsCount + roomsText + ' для ' + guestsCount + guestsText;
cardTemplateClone.querySelector('.popup__text--capacity').innerText = capacityText;
// Checkin and checkout
var timeText = cardTemplateClone.querySelector('.popup__text--time').innerText;
var times = timeText.split(',');
var updatedCheckinText = times[0].replace(/\d\d:\d\d/, announcements[0].offer.checkin);
var updatedCheckoutText = times[1].replace(/\d\d:\d\d/, announcements[0].offer.checkout);
var updatedTimeText = updatedCheckinText + ',' + updatedCheckoutText;
cardTemplateClone.querySelector('.popup__text--time').innerText = updatedTimeText;
// Features
var $featuresList = cardTemplateClone.querySelector('.popup__features');
var $features = $featuresList.querySelectorAll('li');
$features.forEach(function (item) {
  var $feature = item.classList[1];
  var feature = /\w+$/.exec($feature)[0];
  if (announcements[0].offer.features.indexOf(feature) === -1) {
    item.remove();
  }
});
// Description
cardTemplateClone.querySelector('.popup__description').innerText = announcements[0].offer.description;
// Photos
var $photos = cardTemplateClone.querySelector('.popup__photos');
$photos.innerHTML = '';
announcements[0].offer.photos.forEach(function (photoUrl) {
  var $photo = document.createElement('img');
  $photo.classList.add('popup__photo');
  $photo.src = photoUrl;
  $photo.width = 45;
  $photo.height = 40;
  $photo.alt = 'Фотография жилья';
  $photos.appendChild($photo);
});
// Avatar
cardTemplateClone.querySelector('.popup__avatar').src = announcements[0].author.avatar;

document.querySelector('.map__filters-container').before(cardTemplateClone);
