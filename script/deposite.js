document.getElementById('deposite-btn').addEventListener('click', function () {
    const inputElementValues = inputValue('deposite-field');
    const outputElementValues = outputValue('deposite-total');
    const totalValues = inputElementValues + outputElementValues;
    replaceTextValue('deposite-total', totalValues)

    const balenceTotal = outputValue('balence-total');
    const totalBalenceValue = balenceTotal + totalValues;
    replaceTextValue('balence-total', totalBalenceValue)
})