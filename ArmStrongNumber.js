// Program to check an Armstrong number of three digits
const number= prompt('Enter a positive integer: ');
let num_length= number.length;
let sum= 0;
let temp= number; // create a temporary variable
while(temp> 0){
    let remainder= temp% 10; // finding the one's digit
    sum+= Math.pow(remainder, num_length);  // sum += remainder ** num_1
    // remove last digit from the number
    temp= parseInt(temp/ 10); //converting float into integer
}

if(sum== number){  // check the condition
    alert(`${number} is an Armstorng number`);
} else {
    alert(`${number} is not an Armstrong number.`);
}