let modeBtn = document.querySelector("#change-mode");
let currentMode = 'light';
let body = document.querySelector("body");
modeBtn.addEventListener("click", ()=> {
    if(currentMode === 'light'){
        currentMode = 'black';
        // document.body.style.backgroundColor = 'black';
        body.classList.remove("light");
        body.classList.add("dark");
    }else{
        currentMode = 'light';
        // document.body.style.backgroundColor = 'white';
        body.classList.remove("dark");
        body.classList.add("light");
    }
    console.log(currentMode);
})