export const spansArray = document.getElementById("story").getElementsByTagName("span");
export const inputsArray = document.getElementById("inputs").getElementsByTagName("input");

export const clickButton = () => {
    for (let i = 0; i < spansArray.length; i++) {
        spansArray[i].textContent = inputsArray[i].value;
    }
}