document.getElementById('withdraw-btn').addEventListener('click', function () {
    const inputElementValues = inputValue('withdraw-field');
    const outputElementValues = outputValue('withdraw-total');
    const totalValues = inputElementValues + outputElementValues;
    replaceTextValue('withdraw-total', totalValues)

    const balenceTotal = outputValue('balence-total');
    const totalBalenceValue = balenceTotal - totalValues;
    replaceTextValue('balence-total', totalBalenceValue)
})