'use strict';

function collectSameElements(collectionA, collectionB) {
  let result = [];
  // collectionB=collectionB[0];
  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < collectionB.length; j++) {
      for (let k = 0; k < collectionB[j].length; k++) {
        if (collectionA[i] == collectionB[j][k]) {
          console.log(collectionB[j][k]);
          result.push(collectionA[i]);
        }
      }
    }
  }
  return result;
}
