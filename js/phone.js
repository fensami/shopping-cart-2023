function plusMinusBtn(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const phoneNumber = parseFloat(phoneNumberFieldString);
    let phone;
    if(isIncrease){
        phone = phoneNumber + 1;
    }
    else{
        phone = phoneNumber - 1;
    }
    phoneNumberField.value = phone;
    return phone
}
//update phone price 
function updatePhonePrice(phoneNumber){
    const phoneTotal = document.getElementById('phone-total');
    const total = phoneNumber * 1259;
    phoneTotal.innerText = total;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
     const phoneNumber = plusMinusBtn(true);
    updatePhonePrice(phoneNumber)

    //calculate total subtotal 
    calculate();
   
    
})

//minus btn
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneNumber =plusMinusBtn(false);
    updatePhonePrice(phoneNumber)

   calculate();
    

})