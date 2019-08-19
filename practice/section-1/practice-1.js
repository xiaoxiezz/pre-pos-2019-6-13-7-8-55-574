'use strict';

function collectSameElements(collectionA, collectionB) {
  // return '实现练习要求，并改写该行代码。';
  // var collectionA=[];
  // var collectionB=[];
  var result=[];
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<collectionB.length;j++){
      if(collectionA[i]==collectionB[j]){
        result.push(collectionA[i]);
      }
    }
  }
return result;
}

