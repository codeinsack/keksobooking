'use strict';

var utils = require('./utils');

var $mapPins = document.querySelector('.map__pins');
var $pinTemplate = document.querySelector('#pin');

var announcements = utils.generateObjects();
utils.fillMapWithPins(announcements, $pinTemplate, $mapPins);
