$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();

    var userNumber = parseInt($("#userNumber").val());
    var numbers = [];
    for (var index = userNumber; index >= 2; index --) {
      numbers.push(index);
    }

    for (var prime = 2; prime < userNumber; prime ++) {
      numbers.forEach(function(number) {
        if (number !== prime) {
          if (number % prime === 0) {
            numbers.splice(numbers.indexOf(number), 1);
          }
        }
      })
    }
    $(".hide").show();
    $(".primeLessThan").text(userNumber);
    for (index = 1; index < numbers.length; index ++) {
      $("#show").append("<li>" + numbers[index] + "</li>");
    }
  })
})
