'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = new Array();
  collectionB=collectionB[0];
  for(var i = 0; i<collectionA.length ; i++)
  {
    for(var j = 0; j<collectionB.length ; j++)
    {
      if (collectionA[i] == collectionB[j])
      {
        result.push(collectionA[i]);
        break;
      }
    }
  }
return result;
}
