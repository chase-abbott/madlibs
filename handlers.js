const inputsDiv = document.getElementById('inputs');
const storyDiv = document.getElementById('story');
const shrek = document.getElementById('shrek');
const warningText = document.getElementById('warning');
export const btnSubmit = document.getElementById('button-submit');
export const spansArray = storyDiv.querySelectorAll('span');
export const inputsArray = inputsDiv.querySelectorAll('input');

export const clickButton = () => {
    let empty = false;
    for (let i = 0; i < spansArray.length; i++) {
        if (!inputsArray[i].value) {
            inputsArray[i].classList.add('empty-input');
            empty = true;
        }

        spansArray[i].textContent = inputsArray[i].value.toLowerCase();
    }

    if (!empty) {
        warningText.classList.add('hidden');

        inputsDiv.classList.toggle('hidden');
        storyDiv.classList.toggle('hidden');
        shrek.classList.toggle('hidden');
    
        btnSubmit.textContent = (btnSubmit.textContent === 'Submit') ? 'Play Again!' : 'Submit';
    } else {
        warningText.classList.remove('hidden');
    }
};