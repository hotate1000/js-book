'use strict';

const thumbs = document.querySelectorAll('.photos');
// console.log(thumbs)
thumbs.forEach(function(item, index) {
item.onclick = function() {
    console.log(this.dataset.photos);
    document.getElementById('bigphoto').src = this.dataset.photos;
  }
});