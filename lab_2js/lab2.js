"use strict";

function pow(x,n){
  if (n == 0){
    return 1;
  }
  else if (n < 0){
    return 1 / pow(x,-n);
  }
  else {
    return x * pow(x,n - 1);
  }
}

function sumTo(n){
  if (n == 1){
    return 1;
  }
  else {
    return n + sumTo(n - 1);
  }
}

function factorial(n){
  if (n == 0){
    return 1n;
  }
  else{
    return BigInt(n) * factorial(n - 1);
  }
}
