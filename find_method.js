let tshirtPrice = [149, 179, 199, 249, 300, 450, 499, 550];


// find() methods
// let result = tshirtPrice.find((element, index, array) => {
//     return element < 200;
// });

// filter() methods
let result = tshirtPrice.filter((element) => (element > 200));

console.log(result);

// var employ = ['Alok', 'Dinesh', 'Arun', 'Anup', 'Abhinav', 'Aditya', 'Deepak', 'Dinesh kartik'];

// let searchName = employ.filter((element, index) => {
//     if(element == 'A'){
//         return element;
//     }
//     else{
//         return '302 data not found';
//     }
// })

// console.log(searchName);

