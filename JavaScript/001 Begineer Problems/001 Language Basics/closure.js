/*
    A closure is a function that has access to the variables
    from its outer scope, even after the outer function has 
    finished executing.
*/

function main(){
    const name = "Garu";
    function myName(){
        console.log(name);
    }
    myName();
}
main();


function makeFunc(){
    const name = "Garu";
    function displayName(){
        console.log(name);
    }
    return displayName;
}
const myFunc = makeFunc();
myFunc();
myFunc();

function makeAdder(num){
    function add(a){
        console.log(num + a);
    }
    return add;
}
const result = makeAdder(10);
result(5);
result(50);


let myName = document.getElementById('my-name');
let btn = document.getElementById('my-btn');

function Sizer(size){
  function increaseSize(){
    myName.style.fontSize = `${size}px`;
  }
  
  return increaseSize;
}

const size10 = Sizer(10);
const size20 = Sizer(20);
const size30 = Sizer(30);
const size40 = Sizer(40);
const size50 = Sizer(50);
const size90 = Sizer(90);
btn.addEventListener('click', size90);


function counter() {
    let count = 1;
    return {
        increase() {
            console.log(count++);
        },
        decrease() {
            console.log(count--);
        }
    };
}

const cnt = counter();
cnt.increase();
cnt.increase();
cnt.decrease();


// global scope
const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result1 = sum4(4);
console.log(result1); // 20
