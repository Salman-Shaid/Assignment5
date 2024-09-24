function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFiledValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showPageById(id){
    
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('tans-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function modalSection(id){
    
    document.getElementById('modal-1').classList.add('hidden');
    document.getElementById('modal-2').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
