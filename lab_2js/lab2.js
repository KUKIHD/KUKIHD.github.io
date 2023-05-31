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

function sumTo(x){
  if (x == 1){
    return 1;
  }
  else {
    return x + sumTo(x - 1);
  }
}
