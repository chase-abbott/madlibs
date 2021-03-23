// import functions and grab DOM elements
import { clickButton, btnSubmit, btnRadio1, btnRadio2, populateOne, populateTwo } from './handlers.js';



// initialize state



btnRadio1.onclick = populateOne;
btnRadio2.onclick = populateTwo;


btnSubmit.addEventListener('click', clickButton);

document.onload = populateOne();
