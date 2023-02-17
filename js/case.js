function plusMinusBtncase(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const caseNumber = parseFloat(caseNumberFieldString);

    let casetotal;
    if(isIncrease){
        casetotal = caseNumber + 1;
    }
    else{
        casetotal = caseNumber - 1;
    }
    caseNumberField.value = casetotal;
    return casetotal;
}
//update case total price 
function updateCaseTotalPrice(totalCase){
    const casetotalField = document.getElementById('case-total');
    const casePrice = totalCase * 59;
    casetotalField.innerText = casePrice;

}
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const totalCase =plusMinusBtncase(true);
    updateCaseTotalPrice(totalCase);

    calculate();
    

    //update subtotal
    // const subtotal =document.getElementById('sub-total');
    // const subtotalString = subtotal.innerText;
    // const subtotalStringValue = parseFloat(subtotalString);
    
    // const totalSubTotal = casePrice + subtotalStringValue;
    // subtotal.innerText = totalSubTotal;

    
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const totalCase =plusMinusBtncase(false)

    updateCaseTotalPrice(totalCase);

    calculate();

    //update subtotal
    // const subtotal =document.getElementById('sub-total');
    // const subtotalString = subtotal.innerText;
    // const subtotalStringValue = parseFloat(subtotalString);
    
    // const totalSubTotal = casePrice + subtotalStringValue;
    // subtotal.innerText = totalSubTotal;

})