let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        handleButtonClick(e.target.innerHTML);
    })
});

document.addEventListener('keypress', (e) => {
    const keyPressed = e.key;
    handleKeyPress(keyPressed);
});

function handleButtonClick(buttonValue) {
    if (buttonValue === '=') {
        string = eval(string);
        input.value = string;
    } else if (buttonValue === "AC") {
        string = "";
        input.value = string;
    } else if (buttonValue === "DEL") {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        string += buttonValue;
        input.value = string;
    }
}

function handleKeyPress(keyPressed) {
    if (keyPressed === '=') {
        string = eval(string);
        input.value = string;
    } else if (keyPressed === "Enter") {
        string = eval(string);
        input.value = string;
    } else if (keyPressed === "Escape") {
        string = "";
        input.value = string;
    } else if (keyPressed === "Backspace") {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (keyPressed.length === 1) {
        string += keyPressed;
        input.value = string;
    }
}
