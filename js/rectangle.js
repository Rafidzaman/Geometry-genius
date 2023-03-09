document.getElementById('rec-btn').addEventListener('click' , function(){
    const inputFieldAccess = document.getElementById('input-field-2');
    const newInputAmountString = inputFieldAccess.value;
    const newInput1 = parseFloat(newInputAmountString);
 
 
    const inputField = document.getElementById('input-field-3');
    const newInputAmountString1 = inputField.value;
    const newInput = parseFloat(newInputAmountString1);
 
 
    inputFieldAccess.value= '';
    inputField.value = '';
    
 
    
    const previousArea = document.getElementById('area-result');
    const previousAreaString = previousArea.innerText;
    const previousAreaTotal = parseFloat(previousAreaString);
 
 
    const newArea = (newInput1 * newInput + (previousAreaTotal));
    previousArea.innerText = newArea;
    

    
 })
 