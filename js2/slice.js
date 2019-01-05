 //used document.write() for testing in browser | for post processor replace with document.write();
 document.write('<form><input type="button" value="Enter Tool Number" onclick="num()"></form>');

 function num() {
   var toolnumber = prompt("Enter number <= 4 digits"); //toolnumber == tool.number
   /* represents UI tool.number.  example if your type in tool UI 1234, it will print out T1
                        T2
                        T3
                        T4 */
						//var num1 = "T" + toolFormat.format(toolnumber).slice(a,b);
   var num1 = "T" + toolnumber.slice(0, 1);
   var num2 = "T" + toolnumber.slice(1, 2);
   var num3 = "T" + toolnumber.slice(2, 3);
   var num4 = "T" + toolnumber.slice(3, 4);
   if (toolnumber.length == 1) {
     document.write(num1 + "<br>");
   } else if (toolnumber.length == 2) {
     document.write(num1 + "<br>");
     document.write(num2 + "<br>");
   } else if (toolnumber.length == 3) {
     document.write(num1 + "<br>");
     document.write(num2 + "<br>");
     document.write(num3 + "<br>");
   } else if (toolnumber.length == 4) {
     document.write(num1 + "<br>");
     document.write(num2 + "<br>");
     document.write(num3 + "<br>");
     document.write(num4 + "<br>");
   }
     document.write('<form class ="toolNum"><input type=button value="Refresh" onClick="history.go()"></form>')
 }
