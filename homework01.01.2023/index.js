"use script";

const arr = [12, 13, 14, 15, 9, 8, 0];
const arr2 = [1, 1, 4, 15, 9, 8, 0];

// slice (immutable)

// let newArr = arr.slice(0, 4);
// console.log(newArr);
// console.log(arr);

// splise(mutable)

// let newArr = arr.splice(0, 4);
// console.log(newArr);
// console.log(arr);

// reverse (mutable)

// let newArr = arr.reverse();
// console.log(newArr);
// console.log(arr);

// concat (immutable)

// const newArr = arr.concat(arr2);
// console.log(newArr);
// console.log(arr);
// console.log(arr2);

// join (immutable)

// const str = arr.join();
// console.log(str);
// console.log(typeof str);
// console.log(arr.join());
// console.log(arr.join(""));
// console.log(arr.join("+"));

// att

// console.log(arr.length);
// console.log(arr[arr.length]);
// console.log(arr[arr.length - 1 ]);
// console.log(arr.flat(-1));

// forEach 

// for (let i = 0; <arr.length; i++ ) {
//     console.log(arr[i]);
// }

// for (let el of arr) {
//     console.log(el);
// }

// let newFor = arr.forEach((elemnt) =>{
//     console.log(element);
//     return element; 
// });

// console.log(newFor);

// map (array qaytaradi )(matematik aml bajarish return qilish m/n )

// let newMap = arr.map(function(element){
//     console.log(element);
//     return element ** 2; 
// });
// console.log(newMap);

// ===================================================================

// filter (shart qo'shamiz || filterlaydi)

// let newFilter = arr.filter((el) => el > 0);
 
// console.log(newFilter);

// reduce (oddiy qiymat qaytaradi) || (arrayning eng katta qimatini toping(foyda))

// let newReduce = arr.reduce((max, valu, index) => {
//     if (max < valu) {
//         max = valu;
//     }
//     console.log(max);
//     return max;
// }, arr[0]);
 
// console.log(newReduce);

// find (objectlardan tashkil topgan array orqali topish)
//  findIndex (indexini topish)

// //  //////////////////////////////////////////////////////////////////////

// // masala (function bor)

// const arr = [-1, -2, -3, -45, -6, -47];
 
// const funcName = (array) => {
//     let min = array[5];
//     for (let i = 0; i < array.lenght; i++) {
//         if ( min> array[i]) {
//              min = array[i];
//         }
//     }
//     return min;
// };
 
// console.log(funcName(arr));