'use strict';
// const collectionA = [
//   {key: 'a', count: 2},
//   {key: 'e', count: 2},
//   {key: 'h', count: 2},
//   {key: 't', count: 2},
//   {key: 'f', count: 2},
//   {key: 'c', count: 2},
//   {key: 'g', count: 2},
//   {key: 'b', count: 2},
//   {key: 'd', count: 2}
// ];

// const objectB = {value: ['a', 'd', 'e', 'f']};

function createUpdatedCollection(collectionA, objectB) {
  let result=collectionA;
  // console.log(collectionA[0].count);
  // console.log(objectB.value[0]);
  for(var i=0;i<objectB.value.length;i++){
    for(var j=0;j<collectionA.length;j++){
      if(objectB.value[i]==result[j].key){
        result[j].count-=1;
        
      }
    }
  }
  //  console.log(collectionA);
  return result;
}
// createUpdatedCollection(collectionA, objectB);
