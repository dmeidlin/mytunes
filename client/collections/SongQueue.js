// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
    
  initialize: function(){
    //setting event listeners for add:
    this.on('add', function (song){
      this.enqueue(song);
    }, this);
    //dequeue:
    this.on('dequeue', function (song){
      this.dequeue(song);
    }, this);
    //ended:
    this.on('ended', function (song){
      this.playNext();
    }, this);
  },
  //
  enqueue: function (song) {
    if (this.length === 1) {
      this.playFirst();
    }
  },
  
  playFirst: function () {
    this.at(0).play();
  },
  
  dequeue: function (song) {
    if (song === this.at(0)) {
      this.playNext();
    } else {
      this.remove(song);
    }
  },
  
  playNext: function () {
    this.remove(this.at(0));
    if (this.length > 0) {
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  }
  
});


// var Queue = function () {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   'use strict';
//   this.storage = {};
//   this.storage.front = 1;
//   this.storage.back = 1;
// };

// Queue.prototype.enqueue = function (value) {
//   'use strict';
//   this.storage[this.storage.back++] = value;
// };

// Queue.prototype.dequeue = function () {
//   'use strict';
//   var firstValueIn = this.storage[this.storage.front++];

//   delete this.storage[this.storage.front - 1];
//   return firstValueIn;
// };

// Queue.prototype.size = function () {
//   'use strict';
//   return Object.keys(this.storage).length - 2;
// };

