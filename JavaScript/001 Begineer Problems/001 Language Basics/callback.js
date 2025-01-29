/*
    synchronous programming means the code runs in a praticular sequence of instruction given in the program.
    Each instruction wait for the previous instruction to complete its execution.
*/

console.log("One")
console.log("Two")
console.log("Three")

/*
    Due to syncronous programming somethimes important instruction get blocked due to some previous instruction,
    Which cause a delay in the UI. Aysynchromous code execution allows to execute next instructiions immediately
    and doesn't block the flow.

    For example - API

    code 1
    code 2
    API code
    code 4
    code 5
*/

console.log("Hello1");
setTimeout(() => {
    console.log(10 + 60);
}, 3000);
console.log("Hello2")

/*
    Callback : A callback is a function passed as an argument to another function
*/

function calculator(a, b, fnToCall){
    fnToCall(a, b);
}
function sum(a, b){
    console.log(a + b);
}
calculator(5,16, sum);

calculator(1, 2, (a, b) => {
    console.log(a + b);
})

/*
    Callback Hell: Nested callbacks stacked below one another forming a pyramid structure. Also called (Pyramid of Doom)

    This styles of programming becomes diffucult to understand and manage.
*/

function getData(dataId){
    setTimeout(() => {
        console.log("data", dataId)
    }, 4000);
}

getData(123);
getData(456);
getData(789);