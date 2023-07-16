var number= 151;
var reverse = "0";
var reminder = "";
var palindrome = number;

while(number != 0) {
    reminder = number % 10;
    reverse = reverse * 10 + reminder;
    number = parseInt(number / 10);
}

if(palindrome == reverse) 
{
    console.log("it is palindrone number ", reverse);
}
else {
    console.log("it is not palindrome number ", reverse);
}
