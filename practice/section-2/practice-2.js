'use strict';
const collection = [
  'a', 'a', 'a',
  'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
  't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
  'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
  'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
  'g', 'g', 'g', 'g', 'g', 'g', 'g',
  'b', 'b', 'b', 'b', 'b', 'b',
  'd-5'
];

function countSameElements(collection) {
  var obj = {};
  var key, result = [];
  for (var i = 0; i < collection.length; i++) {
    key = collection[i];
    // console.log(typeof(key));
    if (key.length > 1) {
      obj[key[0]] = Number(key.replace(/[^0-9]/ig, ""))
    }
    else if (obj[key]) {
      obj[key]++;
    }
    else {
      obj[key] = 1;
    }
  }
  for (var i in obj) {
    result.push({ key: i, count: obj[i] });
  }
  return result;
}
countSameElements(collection);