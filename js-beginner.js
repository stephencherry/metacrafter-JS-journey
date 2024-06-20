/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

//Code example
for(var i=1; i<=5; i++) {
    //console.log(i);
   }
   
   let myVar = 1;
   myVar += 5;
   // console.log(myVar);
   
   var myVars = 1;
   myVar += 5;
   // console.log();
   
   myVar = myVar / 5;
   myVar /= 5;
   // console.log(myVar);
   
   const sandwich = ["peanut butter", "jelly", "bread"];
   
   const SAMPLE_STRING = "Alan said \"Peter is learning Javascript\"";
   const sampleString = 'Olujare said, \"Stephen is just learning how to code in JavaScript\"';
   //console.log(sampleString);
   
   const correctString = "Fin response, Let's go home";
   //console.log(correctString);
   
   //Alan said, "Peter is learning JavaScript".  I come first. I come second. ( Hello, our name is Metacrafters, how are you?)
   
   let queque = "I come first. " + "I come second"
   const ourStr = "I come first. " + "I come second.";
   //console.log(queque);
   
   const ourNam = 'Metacrafters,';
   const greeting = ' how are you?';
   //console.log('Hello, our name is ' + ourName + greetings);
   
   const ourName = "Hello, our name is Metacrafters, ";
   const greetings = "how are you doing with your learning, Olujare?";
   //console.log(ourName + greetings);
   
   //Constructing Strings with variable.
   
   const accadem = 'Metacrafters, ';
   //const checkingUp = 'Hello, our name is ' + accademy + 'how are you doing with your studies Olujare?';
   //console.log(checkingUp);
   
   //Appending Variables to Strings
   const feeling = "Awesome!";
   let accademy = "Metacrafter is ";
   //feeling += accademy;
   
   //Find the Length of a String
   //console.log("Stephen".length)
   
   //Understand String Immutability
   let myStr = "Bob";
   myStr[0] = "J";
   //console.log(myStr) //Bob
   
   //Understanding Boolean Values.
   //Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.
   
   //Use Conditional Logic with If Statements
   /*
   if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces 
   under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.
   When the condition evaluates to true, the program executes the statement inside the curly braces. 
   When the Boolean condition evaluates to false, the statement inside the curly braces will not execute */
   
   // Pseudocode
   // if (condition is true) {
   //  statement is executed
    
   // }
   
   //Comparison with the Equality Operator
   /*
   There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.
   
   The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent 
   or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator 
   to a variable on the left.
   */
   
   //Example
   function equalityTesting(myValue) {
     if (myValue == 10) {
       return "Equal";
     }
     return "Not Equal";
   }
   
   //Comparison with the Strict Equality Operator
   /*
   Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, 
   which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.
   
   If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
   
   Examples
   3 ===  3 => true
   3 === '3' => false
   */
   
   //Comparison with the Inequality Operator
   
   /*
   The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality 
   would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.
   */
   
   1 !=  2    // true
   1 != "1"   // false
   1 != '1'   // false
   1 != true  // false
   0 != false // false
   
   //If Statements and Conditional Logic (Comparisons with the Logical And Operator)
   
   /**
   Sometimes you will need to test more than one thing at a time. 
   The logical and operator (&&) returns true if and only if the operands to the left and right of it are true. */
   
   if (num > 5) {
     if (num < 10) {
       return "Yes";
     }
   }
   return "No";
   
   //Thesame logic can also be written as this
   if (num > 5 && num < 10) {
     return "Yes";
   }
   return "No";
   
   //If Statements and Conditional Logic (Comparisons with the Logical Or Operator)
   /*
   The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.
   The logical or operator is composed of two pipe symbols: (||).
   */
   
   //Example
   if (num > 10) {
     return "No";
   }
   if (num < 5) {
     return "No";
   }
   return "Yes";
   
   //The reverse
   if (num > 10 || num < 5){
     return "NO";
   }
   return "YES";
   
   //If Statements and Conditional Logic (Introducing Else Statements)
   
   /*
   When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? 
   Normally nothing would happen. With an else statement, an alternate block of code can be executed.*/
   
   if(number > 10){
     return "Greater than 10";
   } else {
     return "10 or Less";
   }
   
   //If Statements and Conditional Logic (Introducing Else If Statements)
   //If you have multiple conditions that need to be addressed, you can chain if statements together with the use of else if statements.
   
   //Take a look at this example
   if (num > 15) {
     return "Bigger than 15";
   } else if (num < 5) {
     return "Smaller than 5";
   } else {
     return "Between 5 and 15";
   }
   
   //A tweak from my understanding!
   if(value > 15){
     return "Greater than 15";
   }else if (value < 5){
     return "Less than 5";
   }return "Between 5 and 15";
   
   //If Statements and Conditional Logic (Logical Order in If Else Statements)
   /*At this point, order is important. In if, else if statements. The function is executed from top - bottom so you will have to be careful
   of what statement or condition comes first.*/
   
   //Example
   function foo(x) {
     if (x < 1) {
       return "Less than one";
     } else if (x < 2) {
       return "Less than two";
     } else {
       return "Greater than or equal to two";
     }
   }
   
   //And the second example just switches the order of the statements:
   function bar(x) {
     if (x < 2) {
       return "Less than two";
     } else if (x < 1) {
       return "Less than one";
     } else {
       return "Greater than or equal to two";
     }
   }
   
   foo(0)
   bar(0)
   //The statement looks identical but if we pass values to it we get different results.
   //foo(0) will return the string Less than one, and bar(0) will return the string Less than two.
   
   
   //If Statements and Conditional Logic (Chaining If Else Statements)
   //if/else statements can be chained together for complex logic. Here is the pseudocode of multiple chained if/else if statements:
   
   if (condition1) {
     statement1
   } else if (condition2) {
     statement2
   } else if (condition3) {
     statement3
   } else if (condition4){
     statement4
     //and so on ...
   }else{
     StatementN
   }
   
   //The Switch Statement (Selecting from Many Options with Switch Statements)
   /*
   If you have many options to choose from, use a switch statement. 
   A switch statement tests a value and can have many case statements which define various possible values. 
   Statements are executed from the first matched case value until a break is encountered.
   */
   
   //The Switch Statement Example
   switch (lowercaseLetter) {
     case "a":
       console.log("A");
       break;
     case "b":
       console.log("B");
       break;
   }
   //Case values are tested with strict equality(===).The break tells JS to stop executing statements. If the break is omitted,the next statement will be executed.
   
   
   //The Switch Statement. (Adding a Default Option in Switch Statements)
   /*In a switch statement you may not be able to specify all possible values as case statements. 
   Instead, you can add the default statement which will be executed if no matching case statements are found. 
   Think of it like the final else statement in an if/else chain.*/
   
   //A default statement should be the last case.
   switch (num) {
     case value1:
       statement1;
       break;
     case value2:
       statement2;
       break;
       //and so on....
     default:
       defaultStatement;
       break;
   }
   
   //The Switch Statement (Multiple Identical Options in Switch Statements)
   /* If the break statement is omitted from a switch statement's case, the following case statement(s) are executed 
   until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:*/
   
   let result = "";
   switch (val) {
     case 1:
     case 2:
     case 3:
       result = "1, 2, or 3";
       break;
     case 4:
       result = "4 alone";
   }
   //Cases for 1, 2, and 3 will all produce the same result.
   
   
   //Ternary Operators => (Use the Conditional (Ternary) Operator)
   /* The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
   The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, 
   and c is the code to run when the condition returns false.
   
   The following function uses an if/else statement to check a condition:*/
   
   //Example
   function findGreater(a, b) {
     if(a > b) {
       return "a is greater";
     }
     else {
       return "b is greater or equal";
     }
   }
   
   //This can be re-written using the conditional operator:
   function findGreater(a, b) {
     return a > b ? "a is greater" : "b is greater or equal";
   }
   
   //Ternary Operators (Use Multiple Conditional (Ternary) Operators)
   /*In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.
   The following function uses if, else if, and else statements to check multiple conditions:*/
   
   function findGreaterOrEqual(a, b) {
     if (a === b) {
       return "a and b are equal";
     }
     else if (a > b) {
       return "a is greater";
     }
     else {
       return "b is greater";
     }
   }
   
   //The above function can be re-written using multiple conditional operators:
   function findGreaterOrEqual(a, b) {
     return (a === b) ? "a and b are equal" 
       : (a > b) ? "a is greater" 
       : "b is greater";
   } //This approach is poor formatting.
   
   /*It is considered best practice to format multiple conditional operators such that each condition is on a separate line, 
   as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:*/
   
   function findGreaterOrEqual(a, b) {
     return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
   }