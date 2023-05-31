'use strict';

let num1 = prompt("Количество ворон"), massage = '';
num = Number(num1);
if (num == 1){ 
  massage = `На ветке сидит ${num} ворона`;
}
else if (num >= 2 && num <= 4){
  massage = `На ветке сидит ${num} вороны`;
}
else if (num >= 5){
  massage = `На ветке сидит ${num} ворон`;
}
alert(massage);
