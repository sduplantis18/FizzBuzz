$(function() {
//prompt() user input of an integer or string
//plug the provided inpuqt into a variable
var UserInput = prompt("enter a number", "0");
//convert the string to an integer
var Value = parseInt(UserInput);
//test to make sure value is stored in variable
console.log(Value);
    
//Create function to list the numbers up to user input
//loop through numbers 0-"Value"
//If not divisible by 3 or 5 then log the number
//If divisibile by 3 then log "fizz"
//If divisible by 5 then log "buzz"
//If divisible by 3 & 5 then log "fizbuzz"
function ListFizzBuzz(Value) {
  for (var i = 0; i < Value; i++) {
   if(i%3 != 0 && i%5 != 0){
   $("body").append('<li>' + i + '</li>');
   };
   if(i%3 == 0) {
   $("body").append('<li>' + "fizz" + '</li>');
   };
   if(i%5 == 0) {
   $("body").append('<li>' + "buzz" + '</li>');
   };
   if(i%3 == 0 && i%5 == 0) {
   $("body").append('<li>' + "fizzbuzz" + '</li>');
   };
   };
   };
   ListFizzBuzz(Value);
});