$(function() {
//FizzBuzz features:
//loop through numbers 0-100f
//If not divisible by 3 or 5 then log the number
//If divisibile by 3 then log "fizz"
//If divisible by 5 then log "buzz"
//If divisible by 3 & 5 then log "fizbuzz"

  for (var i = 1; i < 101; i++) {
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
});