const inputsDiv = document.getElementById('inputs');
const storyDiv = document.getElementById('story');
const shrek = document.getElementById('shrek');
export const btnSubmit = document.getElementById('button-submit');
export const spansArray = storyDiv.querySelectorAll('span');
export const inputsArray = inputsDiv.querySelectorAll('input');

export const clickButton = () => {
    for (let i = 0; i < spansArray.length; i++) {
        spansArray[i].textContent = inputsArray[i].value;
    }
    inputsDiv.classList.toggle('hidden');
    storyDiv.classList.toggle('hidden');
    shrek.classList.toggle('hidden');
    
    if (btnSubmit.textContent === 'Submit') {
        btnSubmit.textContent = 'Play Again!';
    } else {
        btnSubmit.textContent = 'Submit';
    }
};