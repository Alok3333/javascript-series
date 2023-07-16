let num = 20;

var prime = true;

// looping through 2 to num-1
for(let i = 2; i<num; i++) {
    if(num%i == 0){
        prime = false;
    }
}

if(prime == true){
    console.log(`${num} is prime`);
}else {
    console.log(`${num} is not prime`);
}


















// for (let i = 0; i <= 100; i++) {
//     let flag = 0;

//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     // // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }
