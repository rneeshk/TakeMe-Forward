/*
    String is a sequence of character used to represent text. 
    Strings are immutable e.g., cannot be change, return the new string with new value

    Template Literal - Use backtick (``) instead of quotes to define string.
    With Template literal, it is possible to use both single as well as double quotes inside a string.

    let sentence = `The name "is" Rajneesh Kumar`;

    We can insert variable directly in template literals. This is called String Interpolation.

    let text = `This is ${product}`;

    Escape Sequence Characters
    \' -------> Single Quote (')
    \" -------> Double Quote (")
    \\ -------> backslash
    \b -------> backspace
    \f -------> Form Feed
    \n -------> New Line
    \t -------> Horizontal Tubular
    \v -------> Vertical Tabulator
*/

let str = "Hello";
let str2 = 'Hello';
let str3 = `Hello`;
console.log(str, str2, str3);
console.log(str.length, str2.length, str3.length);

console.log(str[0], str[1], str[2]);
console.log(str[str.length - 1]);

console.log("Escape Sequence Characters");
let fruit = 'Bana\'na';
console.log(fruit, fruit.length)
let text = "We are the so-calle\vd from the north.";
console.log(text);

/*
    String Properties and Method

    String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
    split(), trim(), toUpperCase(), toLowerCase(), etc.
*/

// Length - Return the lenght of the string
function getLength(str) {
    console.log("Original String:", str);
    console.log("Length:", str.length);
}
getLength("Hello World");
  
  // indexOf
  function findIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
  }
  findIndexOf("Hello World", "World");
  
  // lastIndexOf
  function findLastIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.lastIndexOf(target));
  }
  findLastIndexOf("Hello World World", "World");
  
  // slice
  function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
  }
  getSlice("Hello World", 0, 5);
  
  // substring
  function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
  }
  getSubstring("Hello World", 0, 5);
  
  // replace
  function replaceString(str, target, replacement) {
    console.log("Original String:", str);
    console.log("After replace:", str.replace(target, replacement));
  }
  replaceString("Hello World", "World", "JavaScript");
  
  // split
  function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
  }
  splitString("Hello World", " ");
  
  // trim
  function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
  }
  trimString(" Hello World ");
  
  // toUpperCase
  function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");
  
  // toLowerCase
  function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");

  // concat()
  function addTwoStrings(str1, str2){
    let newString = str1.concat(str2);
    console.log("Original Str1:", str1);
    console.log("Original Str2:", str2);
    console.log("After Merging:", str1.concat(str2));
  }
  addTwoStrings("Hello", "World")