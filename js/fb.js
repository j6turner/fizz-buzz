$(document).ready(function() {
  var max = parseInt(prompt("Enter a whole number."));
  var x;
  for (x=1; x<=max; x+=1) {
    if ((x%3===0)&&(x%5===0)) {
      $(".list").append("<ul>&#10029; FizzBuzz &#10031;</ul>");
    } else if (x%3===0) {
      $(".list").append("<ul>&#10029; Fizz</ul>");
    } else if (x%5===0) {
      $(".list").append("<ul>Buzz &#10031;</ul>");
    } else {
      $(".list").append("<ul></ul>" + x);
    };
  };
});
