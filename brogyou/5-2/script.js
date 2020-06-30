'use strict';

const lang = document.querySelector('html').lang;

if(lang === 'zyuudou') {
  document.querySelector('option[value="index-zyuudou.html"]').selected = true;
}else if(lang === 'da-tu') {
  document.querySelector('option[value="index-da-tu.html"]').selected = true;
}else if(lang === 'borudaring') {
  document.querySelector('option[value="index-borudaring.html"]').selected = true;
}

document.getElementById('form').select.onchange = function() {
  location.href = document.getElementById('form').select.value;
}


