document.getElementById('parallelogram-btn').addEventListener('click' , function(){
    const inputFieldAccess = document.getElementById('input-field-4');
    const newInputAmountString = inputFieldAccess.value;
    const newInput1 = parseFloat(newInputAmountString);
 
 
    const inputField = document.getElementById('input-field-5');
    const newInputAmountString1 = inputField.value;
    const newInput = parseFloat(newInputAmountString1);
 
 
    inputFieldAccess.value= '';
    inputField.value = '';
    
 
    
    const previousArea = document.getElementById('area-result2');
    const previousAreaString = previousArea.innerText;
    const previousAreaTotal = parseFloat(previousAreaString);
 
 
    const newArea = (newInput1 * newInput + (previousAreaTotal));
    const fastPart= ('1. Parallelogram ');
    previousArea.innerText = fastPart + newArea.toFixed(2);
    

    
 })
 