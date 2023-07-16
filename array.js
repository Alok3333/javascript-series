// const actor = [
//     {
//         name: 'salman Khan',
//         payment: 200
//     },
//     {
//         name: 'Hrithik roshan',
//         payment: 250
//     },
//     {
//         name: 'Ayushman khurana',
//         payment: 180
//     },
//     {
//         name: 'Shushant Singh rajput',
//         payment: 150
//     }
// ]

// for(let i = 0; i < actor.length; i++){
//     actor[i].payment = actor[i].payment - 10;
// }

// console.log(actor);


var num = [1,2,3,4,5,6,7,8];

var result = num.filter( value => value%2 === 0 )
                .map( value => value*2 )
                .reduce((a,b) => a+b);
   
console.log(result);

// sort() reverse()

const arr = ['kumkum','jiya','Alok','hussen','zebra'];

let srt = arr.sort();
let data = srt.reverse();
let b = data.keys();

console.log(b);


















// split method working on object
// const studentName = {
//     name: 'Alok Prajapati',
//     class: '12th',
//     location: 'Basti UP',
//     socialSite: 'FB,Instagram,Twitter,Linkdin'
// }

// console.log(studentName.split());

