var a=0, b=1;

console.log(a);
console.log(b);
for(var i=0; i<=10; i++) {
    var c = a+b;
    console.log(c);
    a = b;   // 0 => 1
    b = c;   // 1 => 1
}


// var value = 5;
// var a=0, b=1;

// console.log(a); // 0
// console.log(b); // 1


// var c = a+b;

// while(c <= value) {

//     console.log(c);

//     a = b;
//     b = c;
//     c = a+b;
   
// }