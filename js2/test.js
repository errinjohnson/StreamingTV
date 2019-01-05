/*
/////////////////////////////////////////CASE Method //////////////////////

*/

/*var color = prompt("Enter Color");

switch (color) {

case "red":
    console.log("You entered red");
    break;
case "white":
    console.log("You entered white");
    break;
case "blue":
    console.log("You entered blue");
    break;
default:
    console.log("You entered... " + color );
    break;

}*/


/*

    For loops are loops commonly run with arrays – collections of values.  An array in JavaScript is declared with square brackets ([]), and each element in the declaration is separated by a comma (,).  Array members have an index, or position, in the array, and indexes start at 0.  While some programming languages support names as indexes, JavaScript only supports numbered indexes.
    For the first example, we are going to look at a for loop that goes through the numbers 0 to 10 and stores evens and odds in their respective arrays.

*/
  /*

  ////////////////////////for in loops////////////////////
  var	    Required. A variable that iterates over the properties of an object
  object	Required. The specified object that will be iterated
  for (variablename in object){
   statement or block to execute
}

  */

var passwords = [
    {
        userName: "errinjohnson",
        password:"pass1234"
    },
    {
        userName: "sporttrac2015",
        password: "pass4312"
    },
    {   userName: "sporttrac2016",
        password: "pass8976"
    }
]

for (userName in passwords) {
   console.log(userName);
}

/*var  evens = [];
var odds = [];

for(var i = 0; i <= 10; i++){
    if(i % 2 == 0){
      evens[evens.length] = i;
    }else {
        odds[odds.length] = i;
    }
}

console.log(evens);
console.log(odds);*/

/////////////////////////////////////////////////

/*
/////////////////////////map() method///////////////////////
An Array containing the results of calling the provided function for each element in the original array.
   currentValue	Required. The value of the current element
   index	        Optional. The array index of the current element
   arr	            Optional. The array object the current element belongs to
*/

/*var carTypes = [

    {make: "Ford", model: "EcoSport"},
    {make: "Chevy", model: "Bolt EV"},
    {make: "thing1", model: "thing2"},
    {make: "thing3", model: "thing4"}

];

function getCar(item, index){
   var car = [item.make, item.model].join(" ");
   return car;
}

function myFunction2(){
    console.log(carTypes.map(getCar));
}
myFunction2();*/
/*var persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];


function getFullName(item, index) {
    var fullname = [item.firstname,item.lastname].join(" ");
    return fullname;
}

function myFunction() {
   console.log(persons.map(getFullName));

}
myFunction();*/

////////////////////////////// delimter _underscore
/*function main() {
    var s = "a_nice_day";
    console.log(s);
    var res = s.split("_");
    console.log(res);
    var countWord = res.length;
    console.log(countWord);
}
main();*/
