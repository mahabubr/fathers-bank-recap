function inputValue(value) {
    const inputElement = document.getElementById(value);
    const inputElementString = inputElement.value;
    const inputElementFloat = parseFloat(inputElementString);
    // console.log(inputElementFloat)
    return inputElementFloat
}

function outputValue(value) {
    const outputElement = document.getElementById(value);
    const outputElementString = outputElement.innerText;
    const outputElementFloat = parseFloat(outputElementString);
    // console.log(outputElementFloat)
    return outputElementFloat;
}

function replaceTextValue(idInfo, value) {
    const replaceText = document.getElementById(idInfo);
    replaceText.innerText = value;
}