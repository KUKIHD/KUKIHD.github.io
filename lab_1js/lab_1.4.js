'use strict';

let num = prompt("Введите любое число");
let otvet = [];
next:
for ( let a = 2; a <= num; a++){
  for ( let b = 2; b < a; b++){
    if (a % b == 0) continue next;
  }
  otvet = (`${otvet + a}  `);
}
alert(otvet);
