document.getElementById('rhom-btn').addEventListener('click' , function(){
    const inputFieldAccess = document.getElementById('input-btn-6');
    const newInputAmountString = inputFieldAccess.value;
    const newInput1 = parseFloat(newInputAmountString);
 
 
    const inputField = document.getElementById('input-btn-7');
    const newInputAmountString1 = inputField.value;
    const newInput = parseFloat(newInputAmountString1);
 
 
    inputFieldAccess.value= '';
    inputField.value = '';
    
 
    
    const previousArea = document.getElementById('area-result3');
    const previousAreaString = previousArea.innerText;
    const previousAreaTotal = parseFloat(previousAreaString);
 
 
    const newArea = (0.5 * newInput1 * newInput + (previousAreaTotal));
    const fastPart= ('4. Rhombus ');
    previousArea.innerText = fastPart +newArea;
 
 })
 