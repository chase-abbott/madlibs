const inputsDiv = document.getElementById('inputs');
const storyDiv = document.getElementById('story');
const shrek = document.getElementById('shrek');
const warningText = document.getElementById('warning');
const story2Div = document.getElementById('story-2');
export const btnRadio1 = document.getElementById('radio-1');
export const btnRadio2 = document.getElementById('radio-2');
const spansArray2 = story2Div.querySelectorAll('span');
export const btnSubmit = document.getElementById('button-submit');
const spansArray = storyDiv.querySelectorAll('span');
const inputsArray = inputsDiv.querySelectorAll('input');


export const populateOne = () => {
    for (let i = 0; i < spansArray.length; i++) {
        inputsArray[i].placeholder = spansArray[i].textContent;
    }
};

export const populateTwo = () => {
    for (let i = 0; i < spansArray2.length; i++) {
        inputsArray[i].placeholder = spansArray2[i].textContent;
    }
}

export const clickButton = () => {
    let empty = false;
    let story = null;
    let story2 = null;
    let spans = null;
    if (btnRadio1.checked) {
        story = storyDiv;
        spans = spansArray;
        story2 = story2Div;
    } else {
        story = story2Div;
        spans = spansArray2;
        story2 = storyDiv;
    }
    for (let i = 0; i < spans.length; i++) {
        if (!inputsArray[i].value) {
            inputsArray[i].classList.add('empty-input');
            empty = true;
        }

        spans[i].textContent = inputsArray[i].value.toLowerCase();
    }

    if (!empty) {
        
        warningText.classList.add('hidden');
        inputsDiv.classList.toggle('hidden');
        story.classList.remove('hidden');
        story2.classList.add('hidden');
        shrek.classList.toggle('hidden');
        btnSubmit.textContent = (btnSubmit.textContent === 'Submit') ? 'Play Again!' : 'Submit';
    } else {
        warningText.classList.remove('hidden');
    }
};