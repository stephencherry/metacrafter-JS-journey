/**
 * This JS Proof Learning from MetaCrafter course, I am learning the fundamentals of programming concepts in JavaScript. 
 * Starting with the basic data structures like numbers and strings. Then I'll proceed to learn how to work with arrays, objects,
 * functions, variables, operators, loops, if/else statements, and more...
 */

// 1. INTRODUCTION TO ARRAYS | (STORE MULTIPLE VALUES IN ONE VARIABLE USING JAVASCRIPT ARRAYS)
const myNames = ["Stephen","Ayomide", "semiloore"];
const sandwich = ["peanut butter", "jelly", "bread"];

//Introduction to Arrays | (Nest one Array within Another Array). A multi-dimensional array.
const favoriteColors = [["White", "Black", 7], ["White Sneakers", "Purple Shirt", 500]];
const teams = [["Bulls", 23], ["White Sox", 45]];


// 2. INTRODUCTION TO ARRAYS (ACCESS ARRAY DATA WITH INDEXES)
/** We can access the data inside arrays using indexes. Array indexes are written in the same bracket notation that strings use, 
 except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, 
so the first element in an array has an index of 0 while the second has an index of 1 and so on...*/

//Example

const array = [50, 60, 70];
//console.log(array[0]);

const data = array[1];
//console.log(data);
//The console.log(array[0]) = 50, and data has the value of 60.


// 3. INTRODUCTION TO ARRAYS | (MODIFY ARRAY DATA WITH INDEXES)
// Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

//Example
const ourArray = [50, 40, 30];
ourArray[0] = 15;
//ourArray now has the value [15, 40, 30].

/**
 * Note: There shouldn't be any spaces between the array name and the square brackets, like array [0].
 * Although JavaScript is able to process this correctly, this may confuse other programmers reading your code base.*/
 
// 4. INTRODUCTION TO ARRAYS ACCESS | (MULTI-DIMENSIONAL ARRAYS WITH INDEXES)
/**
 * One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, 
 * the first set of brackets refers to the entries in the outermost (the first level) array, and each additional pair of brackets 
 * refers to the next level of entries inside.
 */

const multiArrayOnSingleLine = [ [1, 2, 3], [4, 5, 6],  [7, 8, 9], [ [10, 11, 12], 13, 14 ] ];
  
  const subArray = arr[3];
  const nestedSubArray = arr[3][0];
  const elements = arr[3][0][1];
  console.log(subArray);

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];

/*In this example, subarray has the value [[10, 11, 12], 13, 14], nestedSubarray has the value [10, 11, 12], and 
element has the value of 11. Note: There shouldn't be any spaces between the array name and the square brackets, like array [0][0] 
and even this array [0] [0] is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code*/

// 5. MANIPULATING ARRAYS | (MANIPULATE ARRAYS WITH PUSH METHOD)
/** An easy way to append data to the end of an array is via the push() function.
.push() takes one or more parameters and "pushes" them onto the end of the array */

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

/**arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].
 * An easy way to append data to the end of an array is via the push() function.*/

//.push() takes one or more parameters and "pushes" them onto the end of the array.

//const arr1  

//arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].

// 6. MANIPULATING ARRAYS | (MANIPULATE ARRAYS WITH POP METHOD)

/*Another way to change the data in an array is with the .pop() function.
.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. 
In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.*/

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
//The first console.log will display the value 6, and the second will display the value [1, 4]. 

// 7. MANIPULATING ARRAYS | (MANIPULATE ARRAYS WITH SHIFT METHOD)
/*pop() always removes the last element of an array. What if you want to remove the first?
That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.*/

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
//removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].

// 8. MANIPULATING ARRAYS | (MANIPULATE ARRAYS WITH UNSHIFT METHOD)
/** Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. 
 * add elements in front of the array. (.umshift()) works exactly like .push(), but instead of adding the element at the end of the array, 
 * unshift() adds the element at the beginning of the array.*/

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

//After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].

// 9. JAVASCRIPT OBJECTS | (BUILD IN JAVASCRIPT OBJECTS)
/* You may have heard the term object before. Objects are similar to arrays, except that instead of using indexes to access and modify 
 * their data, you access the data in objects through what are called properties. Objects are useful for storing data in a structured
 *  way, and can represent real world objects, like a cat.*/

const cat = {
  "name" : "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

// In this example, all the properties are stored as strings, such as name, legs, and tails. However, you can also use numbers as properties.
// You can even omit the quotes for single-word string properties, as follows:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
}; //However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.


// 10. JAVASCRIPT OBJECTS | (ACCESSING OBJECTS PROPERTIES WITH DOT NOTATION)
/** There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
 * Dot notation is what you use when you know the name of the property you're trying to access ahead of time.*/

// Here is a sample of using dot notation (.) to read an object's property:
const myObject = {
  property1: "value1",
  property2: "value2"
};

const property1value1 = myNewObject.property1;
const propertyvalue2 = myNewObject.property2;
//property1value1 would have a value of the string value1, and propertyvalue2 would have a value of the string value2.

// 11. JAVASCRIPT OBJECTS | (ACCESSING OBJECTS PROPERTIES WITH BRACKET NOTATION)
/**The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying 
 * to access has a space in its name, you will need to use bracket notation. However, you can still use bracket notation 
 * on object properties without spaces. Here is a sample of using bracket notation to read an object's property:*/

const myNewObject = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "Stephen Olujare":"cherryman",
  "NoSpace": "USS Enterprise"
};

myNewObject["Space Name"];
myNewObject['More Space'];
myNewObject["NoSpace"];
myNewObject["Stephen Olujare"];
myNewObject["Space Name"] 

/**The output would be the string Kirk, myNewObject['More Space'] would be the string Spock, and myNewObject["NoSpace"] would be the string
 * USS Enterprise. Note that property names with spaces in them must be in quotes (single or double).*/

// 12. JAVASCRIPT OBJECTS | (UPDATING OBJECT PROPERTIRES).
/** After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. 
 * You can use either dot or bracket notation to update. For example, let's look at ourDog:*/

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

/**Since he's a particularly happy dog, let's change his name to the string Happy Camper. Here's how we update his object's name property:
 * ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting Camper, 
 * we'll get his new name, Happy Camper.*/

// 13. JAVASCRIPT OBJECTS | (ADD NEW PROPERTIES TO A JAVASCRIPT OBJECTS)
/**You can add new properties to existing JavaScript objects the same way you would modify them.
 * Here's how we would add a bark property to ourDog:*/

ourDog["bark"] = "bow-wow"; //Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.bark =  "bow-wow";

// 14. JAVASCRIPT OBJECTS | (DELETE PROPERTIES FROM A JAVASCRIPT OBJECTS)
// We can also delete properties from objects like this:
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};  //delete ourDog.bark; After the last line shown above, ourDog looks like:

//Like this => ourDog.bark;
  /** 
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
  */