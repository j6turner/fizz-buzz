$(document).ready(function() {
  var max = parseInt(prompt("Enter a whole number."));
  var x;
  for (x=1; x<=max; x+=1) {
    if ((x%3===0)&&(x%5===0)) {
      $(".list").append("FizzBuzz");
    } else if (x%3===0) {
      $(".list").append("Fizz");
    } else if (x%5===0) {
      $(".list").append("Buzz");
    } else {
      $(".list").append("" + x);
    };
  };
});
