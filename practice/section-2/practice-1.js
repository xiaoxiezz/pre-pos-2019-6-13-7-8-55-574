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
  'd', 'd', 'd', 'd', 'd'
];

function countSameElements(collection) {
  var res = [];
  var map = new Map();
   for (var i=0;i<collection.length;i++){
     if (map.get(collection[i])==null){
       map.set(collection[i],1);
     }else{
       map.set(collection[i],map.get(collection[i])+1);
     }
   }
   console.log(map);
   map.forEach(function(key,value){
     res.push({key:value,count:key})
   });
    console.log(res);
   return res;
}
countSameElements(collection);
