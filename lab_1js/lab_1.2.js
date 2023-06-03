'use strict';

let num = +prompt("Количество ворон");
if (num == 1){ 
  alert(`На ветке сидит ${num} ворона`);
}
else if (num >= 2 && num <= 4){
  alert(`На ветке сидит ${num} вороны`);
}
else if (num >= 5){
  alert(`На ветке сидит ${num} ворон`);
}
