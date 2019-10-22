'use strict';

window.utils = (function () {
  function randomInteger(min, max) {
    var random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
  }

  return {
    randomInteger: randomInteger,
  };
})();
