'use strict';

function Announcement(author, offer, location) {
  this.author = author;
  this.offer = offer;
  this.location = location;

  Object.defineProperty(this, 'o', {
    get: function () {
      return 'hello';
    },
    set: function (name) {
      return name;
    }
  });
}

Announcement.prototype.getObject = function () {
  return {
    author: this.author,
  };
};
