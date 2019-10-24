'use strict';

var utils = require('./utils');

var announcements = utils.generateObjects();

var $mapPins = document.querySelector('.map__pins');
var $pinTemplate = document.querySelector('#pin');
var $fragment = document.createDocumentFragment();

announcements.forEach(function (announcement) {
  var $pin = document.importNode($pinTemplate.content, true);
  var $btn = $pin.firstElementChild;
  $btn.style.left = announcement.location.x + 'px';
  $btn.style.top = announcement.location.y + 'px';
  $btn.firstElementChild.src = announcement.author.avatar;
  $fragment.appendChild($pin);
});

$mapPins.appendChild($fragment);
