"use strict";
const containsValue = function (arr, value) {
  return arr.indexOf(value);
};
const numbers = [10, 5, 15, 12, 20];
const value = 20;
console.log(containsValue(numbers, value));
