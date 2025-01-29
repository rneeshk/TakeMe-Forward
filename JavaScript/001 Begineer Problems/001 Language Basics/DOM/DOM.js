// alert temporarily pause the execution, page wait until the prompt or alert window close
// alert("Hello Billu");
// prompt("Hello Billu");
// 1. inspect element of html, play with css

/*
    Window Object
    The Window Object represents an open window in a browser. It is browser's object (not javascript's) and is automatically created by browser.
    It is a global object with lots of properties and method

    Go to browser console and write "window"
*/

// console.log(window);
// console.log("Hello");
// window.console.log("Hello 2");

// window.alert("Hello");

/*
    What is DOM (Document Object Model)
    When a web page is loaded, then browser create a DOM of the page.

    Whatever we write in a html, we can also access it using javascript. Automatically
    our our code (HTML element) convert into object in javascript, and that special object is
    called Document. And this document is available inside the window object

    window->document, all

    print window.document

    To check the Properties of document
    console.dir(window.document) -> to print document properties and method

    DOM is a tree like structure, and every box are node(object)

    DOM True
    |--text node
    |--comments node
    |--elements node
*/

// console.dir(window.document)
// console.dir(document)
// console.dir(document.body)
// console.log(document.body)
// console.dir(document.head)
// childNode : Inside one node, how many child node e.g., body

// document.body.style.background = "green";

/*
    Dynamically Changes/Manipulation - Without change html code, according to user interaction we change something.
*/
// document.body.childNodes[3].innerText = "abcd";

/*
    DOM Manipulation

    1. Selecting with id

    document.getElementById("myId")

    2. Selecting with class

    document.getElementByClass("myClass")

    3. Selecting wit Tag
    document.getElementByTagName("p")

    4. Query Selector
    document.querySelector("myId/myClass/tag") --------> return first element
    document.querySelectorAll("myId/myClass/tag") -----------> return a NodeList

    getting first paragraph
    document.querySelector("p")

    getting all paragraph
    document.querySelectorAll("p")
*/

// let heading  = document.getElementById("heading")

/*
    Properties

    tagName :  return tag for element nodes
    innerText: return the text content of the element and all its children
    innerHTML: return the plain text or HTML contents in the elements
    textContent: return textual content even for hidden elements
*/

// parent/child/descends/siblings

// let paragraph = document.querySelector("p");
// console.dir(paragraph);

// let div = document.querySelector("div");
// console.dir(div)
// console.log(div)
// // console.log(div.innerText)
// console.log(div.innerHTML)

// div.innerText = "Gucchu";

// let oldheading = document.querySelector("h1");
// oldheading.innerText = "New Heading";

// let hidden = document.querySelector("h2");
// console.log(hidden)
// console.log(hidden.innerText)
// console.log(hidden.textContent);



/*
    Practice Question
    
    Ques 1: Create a H2 ehading element with text - "Hello World". Append "from Delhi" to this text using JavaScript.
    Ques 2: Create 3 divs with common class name -"box". Access them and add some unique text to each of them
*/

let heading2 = document.querySelector("h2");
heading2.innerText  = heading2.innerText + " from Delhi";


let divs = document.querySelectorAll(".box")
divs[0].innerText = "Delhi";
divs[1].innerText = "Bangalore"
divs[2].innerText = "Chandigarh";

/*
  getAttribute(attr) // to get the attribute value
  setAttribute(attr, value) // to set the attribute val  
  Style - node.style
*/

let div = document.querySelectorAll("div");
console.log(div);

// let attr = div.getAttribute("class");
// let attr2 = div.getAttribute("name");

// let changeAttr = div.setAttribute("name", "Box1")
// console.log(attr, attr2)
// console.log(changeAttr)

div[0].style.backgroundColor = "green";
div[1].style.fontSize = "50px";

/*
    Insert Elements

    node.append(el) // add at the end of node (inside)
    node.prepend(el) // adds at the starts of node (inside)
    node.before(el) // adds before the node (outside)
    node.after(el) // adds after the node (outside)
    node.remove() // to delete the element
*/

// add button in box div
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
// div[0].append(newBtn)
// div[0].prepend(newBtn)
div[0].before(newBtn)
div[0].after(newBtn)

let newHeading = document.createElement("h3");
newHeading.innerText = "I am a new heading";
document.querySelector("body").prepend(newHeading)


// div[2].remove();

/*
    Questions
    1. Create a new button element. Give it a text "click me", background color of red and text color of white
    Insert the button ass the first element inside the body tag

    2. Create a <p> tag in html, give it a class and some styling
    Now create a new class in CSS and try to append this class to the <p> element.
    Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.
*/

let para = document.querySelector("p");
para.classList.add("newClass");