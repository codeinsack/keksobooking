'use strict';

var utils = window.utils;

var $map = document.querySelector('.map');
var $mapPins = document.querySelector('.map__pins');
var $pinTemplate = document.querySelector('#pin');
var $cardTemplate = document.querySelector('#card');

var announcements = utils.generateObjects();
utils.fillMapWithPins(announcements, $pinTemplate, $mapPins);
var $card = utils.createCard($cardTemplate, announcements[0]);

document.querySelector('.map__filters-container').before($card);

var $pinMain = document.querySelector('.map__pin--main');
$pinMain.addEventListener('mousedown', function () {
  $map.classList.remove('map--faded');
});
$pinMain.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    $map.classList.remove('map--faded');
  }
});
