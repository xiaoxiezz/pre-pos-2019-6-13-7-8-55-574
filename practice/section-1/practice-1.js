'use strict';

function collectSameElements(collectionA, collectionB) {
  // return '实现练习要求，并改写该行代码。';
  let result=[];
  for(let i=0;i<collectionA.length;i++){
    for(let j=0;j<collectionB.length;j++){
      if(collectionA[i]==collectionB[j]){
        result.push(collectionA[i]);
      }
    }
  }
  return result;
}

