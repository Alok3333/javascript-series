//********************* 1-square star pattern

// let n = 5;                // row or column count
// let string = "";          // defining empty string

// for(let i = 0; i < n; i++){           // external loop
//     for(let j = 0; j < n; j++){       // internal loop
//         string += "*"
//     }
//     string += "\n";       //new line after each row
// }

// console.log(string);      //printing


//********************* 2-Hollow square pattern

// let n = 5;
// let str = "";

// for(let i = 0; i < n; i++){
//     for(let j = 0; j < n; j++){
//         if(i === 0 || i === n-1){
//             str += "*";
//         }
//         else{
//             if(j === 0 || j === n-1){
//                 str += "*";
//             }
//             else{
//                 str += " ";
//             }
//         }
//     }

//     str += "\n";
// }
// console.log("Hollow square\n");
// console.log(str);


//********************* 3-right triangle pattern

// let n = 5;
// let str = "";

// for(let i = 1; i <= n; i++){
//     for(let j = 0; j < n-i; j++){
//         str += " ";
//     }
//     for(let k = 0; k < i; k++){
//         str += "*";
//     }
//     str += "\n";
// }

// console.log(str);

//********************* 4-left triangle pattern

// let n = 5;
// let str = "";

// for(let i = 0; i <= n; i++){
//     for(let j = 0; j < i; j++){
//         str += "*";
//     }
//     str += "\n";
// }

// console.log(str);

// ********************* 5-left ulta square pattern


// let n = 5;
// let str = "";

// for(let i = 0; i <= n; i++){
//     for(let j = 0; j < n-i; j++){
//         str += "*";
//     }
//     str += "\n";
// }

// console.log(str);

// ********************* 6-Hollow triangle star pattern

// let n=5;
// let str="";

// for(let i=0; i<=n; i++){
//     for(let j=0; j<i; j++){
//         if(i === n){
//             str += "*";
//         }
//         else if(j === 0 || j === i-1){
//             str += "*";
//         }
//         else {
//             str += " ";
//         }
//     }
//     str += "\n";
// }

// console.log(str);


// ********************* 7-pyramid triangle star pattern

// let n=5;
// let string = "";

// for(let i=0; i<=n; i++){
//     for(let j=0; j<n-i; j++){
//         string += " ";
//     }
//     for(let k=0; k<2*i-1; k++){
//         string += "*";
//     }
//     string += "\n";
// }

// console.log(string);

let name ='Alok kumar he is a developer';

let checkLegnth = name.length-1;

console.log("1] split() method return the value (from string to Array) :-",name.split());

let arr = ["Alok", 20, "male", true];

// for(let element of arr){
//     console.log(element);
// }

// arr.forEach(function(element, index, array) {
//     console.log(index,  element);
// })

// for (var index = 0; index < 5; index++) {
    
//     console.log(index);
// }

// console.log('----', index)

// "use strict"

