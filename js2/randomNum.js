console.log("START CODE");

function randomNumbers() {
  function name() {
    var fName = "Errin";

    if (fName == false) {
      var noName = "Visitor";
      return document.getElementById("test1").innerHTML = "Hello " + noName + " !";
    } else {
      return document.getElementById("test1").innerHTML = "Hello " + fName + " !";
    }
  }
  name();

  function input() {

    var minNumber = 100;
    var maxNumber = 89;

    if (maxNumber && minNumber !== NaN) {
      //bug 2nd random number input, does not pick up else statement and return it, if not a number.
      var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
      var message = 'You just generated the random number ' + randomNumber + " .";
      document.getElementById("test2").innerHTML = message;
      return maxNumber && minNumber;
    } else {
      document.write("Oppsie! " + " Please enter a number");
    }
  }
  input();

}

randomNumbers();

console.log("END CODE");
