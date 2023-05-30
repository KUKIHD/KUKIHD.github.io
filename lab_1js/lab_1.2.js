'use strict';

let num = +prompt("Количество ворон"), massage = '';

if (num === 1){ 
  massage = `На ветке сидит ${num} ворона`;
}
if (num >= 2 && num <= 4){
  massage = `На ветке сидит ${num} вороны`;
}
if (num >= 5){
  massage = `На ветке сидит ${num} ворон`;
}
else {
  massage = `На ветке сидит не понятно что сидит :)`;
}
alert(massage);
