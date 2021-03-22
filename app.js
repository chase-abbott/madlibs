// import functions and grab DOM elements
import {spansArray, inputsArray, clickButton} from "./handlers.js";

const btnSubmit = document.getElementById("button-submit");

// initialize state

const init = () => {
    for (let i = 0; i < spansArray.length; i++) {
        inputsArray[i].placeholder = spansArray[i].textContent;
    }
}

// set event listeners to update state and DOM
btnSubmit.addEventListener("click", clickButton);

document.onload = init();