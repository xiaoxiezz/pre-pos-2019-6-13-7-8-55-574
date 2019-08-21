'use strict';
// const collectionA = [
//   { key: 'a' }, { key: 'e' }, { key: 'h' }, { key: 't' }, { key: 'f' }, { key: 'c' }, { key: 'g' }, { key: 'b' }, { key: 'd' }
// ];
// const collectionB = { value: ['a', 'd', 'e', 'f'] };
function collectSameElements(collectionA, objectB) {
  let result = [];
  let collectionBValue = objectB.value;
  // console.log(collectionBValue.length);
  for (let i = 0; i < collectionA.length; i++) {
    for (let j = 0; j < collectionBValue.length; j++) {
      if (collectionA[i].key == collectionBValue[j]){
        result.push(collectionBValue[j]);
      }
    }
  }
  // console.log(result);
  return result;
  }
// collectSameElements(collectionA, collectionB);
