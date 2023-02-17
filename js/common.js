
//calculate phone total sub total 
function setTextGetElementById(elemnet){
    const phoneTotal = document.getElementById(elemnet);
    const phoneTotalString = phoneTotal.innerText;
    const currentphoneTotal =parseInt(phoneTotalString);
    return currentphoneTotal;
}
function setTextGetElementvalueById(elemnetId, value){
    const subtoalElement = document.getElementById(elemnetId);
    subtoalElement.innerText = value;
}

//calculate

function calculate(){
    const totalPhone = setTextGetElementById('phone-total');
    const totalCase = setTextGetElementById('case-total');
    const totalCasePhone = totalPhone + totalCase;
    setTextGetElementvalueById('sub-total', totalCasePhone)
    // const subtotalField = document.getElementById('sub-total');
    // subtotalField.innerText = totalCasePhone;

    //calculate tax
    const taxAmountString =(totalCasePhone * 0.1).toFixed(2);

    const taxAmount = parseFloat(taxAmountString);
    setTextGetElementvalueById('tax-amount', taxAmount);

    const finalAmount = taxAmount + totalCasePhone;
    setTextGetElementvalueById('final-total', finalAmount);
}
