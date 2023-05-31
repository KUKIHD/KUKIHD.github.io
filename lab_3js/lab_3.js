"use strict";

function getDecimal(num) {
  return Math.abs(num) % 1;
}

function ucFirst(str) {
  if (!str) {
    return str;
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}

function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  } else {
    return str;
  }
}
function camelize(str) {
  let words = str.split('-');
  
  for (let i = 1; i < words.length; i++) {
    words[i] = ucFirst(words[i]);
  }
  
  return words.join('');
}

function fib(n){
  let x = 0n;
  let y = 1n;
  if (n == 0){
    return x;
  }
  else if (n == 1){
    return y
  }
  else{
    for (let j = 2; j <= n; j++) {
            let c = x + y;
            x = y;
            y = c;
        }

        return y;
  }
}

function arrReverseSorted(arr) {
  let sortedArr = arr.slice().sort((a, b) => b - a);
  
  return sortedArr;
}
function unique(arr) {
  let set = new Set(arr);
  
  return Array.from(set);
}
