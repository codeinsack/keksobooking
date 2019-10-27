'use strict';

var utils = window.utils;

var $map = document.querySelector('.map');
var $mapPins = document.querySelector('.map__pins');
var $pinTemplate = document.querySelector('#pin');
var $cardTemplate = document.querySelector('#card');

$map.classList.remove('map--faded');

var announcements = utils.generateObjects();
utils.fillMapWithPins(announcements, $pinTemplate, $mapPins);
var $card = utils.createCard($cardTemplate, announcements[0]);

document.querySelector('.map__filters-container').before($card);
