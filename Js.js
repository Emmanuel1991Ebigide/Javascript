const A = [1, 2, 3, 4, 5, 6, 7, 8];
const B = [1, 3, 5, 6, 7, 8, 9];
const symmetricDifference = (arr1, arr2) => {
   const res = [];
   for(let i = 0; i < arr1.length; i++){
      if(arr2.indexOf(arr1[i]) !== -1){
         continue;
      };
      res.push(arr1[i]);
   }
   for(let i = 0; i < arr2.length; i++){
      if(arr1.indexOf(arr2[i]) !== -1){
         continue;
      };
      res.push(arr2[i]);
   };
   return res;
};
console.log(symmetricDifference(A, B));