/*
    Events in JS

    The change in the state of an object is known as an Event.
    Events are fired to notify code of "interesting changes" that may affect code execution.

    Mouse event(click, double click, etc)
    Keyboard event(keypress, keyu, keydown)
    Form events(submit, etc)
    Print event & many more

    Types
    1. Inline handling - HTML Code
    2. JS --------> node.event = () => {}  --- We can handle our events by writing only one function
    3. Event Listeners - We consider event listeners as functions that always listen for events. They always listen when the events will arrive
        and as soon as the event arrive they execute their work and for one event  we create multiple event listeners.
*/
let btn1 = document.querySelector("#btn1")
btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 1;
    a++;
    console.log(a);
} 
let btn2 = document.querySelector("#btn2")
btn2.ondblclick = () => {
    console.log("btn2 was clicked");
    let a = 2;
    a+=2;
    console.log(a);
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("Inside Text");
}
div.onmouseout = () => {
    console.log("Outside Text");
}

/*
    Event Object

    It is a special object that has details about the event.
    All event handler have access to the event Object's properties and methods.

    node.event = (evt) => {
        // handle here    
    }
    
    evt.target, evt.type, e.clientX, e.clientY
*/

let btn3 = document.querySelector("#btn3");
btn3.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type)
    console.log(evt.target)
    console.log(evt.clientX, evt.clientY)   // clientX - horizontally position of event occur, clientY - Vertically position of event occur 
}

/*
    Event Listeners

    node.addEventListerner(event, callback)
    node.removeEventListener(event, callback)
*/
let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", () => {
    console.log("Button Handler-1")
})
btn4.addEventListener("click", () => {
    console.log("Button Handler-1")
})

const handler3 = () => {
    console.log("Button Handler-3")
};
btn4.addEventListener("click", handler3);

btn4.addEventListener("click", () => {
    console.log("Button Handler-4")
})

btn4.removeEventListener("click", handler3);



