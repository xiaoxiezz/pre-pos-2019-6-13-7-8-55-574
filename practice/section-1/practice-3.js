'use strict';

function collectSameElements(collectionA, objectB) {
  let result=[];
  let collectionB=objectB.value;
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<collectionB.length;j++){
      if(collectionA[i]==collectionB[j]){
        result.push(collectionA[i]);
      }
    }
  }
return result;
}
