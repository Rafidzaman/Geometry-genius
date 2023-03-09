document.getElementById('tri-btn').addEventListener('click' , function(){
   const inputFieldAccess = document.getElementById('input-field-1');
   const newInputAmountString = inputFieldAccess.value;
   const newInput1 = parseFloat(newInputAmountString);


   const inputField = document.getElementById('input-field');
   const newInputAmountString1 = inputField.value;
   const newInput = parseFloat(newInputAmountString1);


   inputFieldAccess.value= '';
   inputField.value = '';
   

   
   const previousArea = document.getElementById('area-result');
   const previousAreaString = previousArea.innerText;
   const previousAreaTotal = parseFloat(previousAreaString);


   const newArea = (0.5 * newInput1 * newInput + (previousAreaTotal));
   const fastPart= ('1. triangle ');

   previousArea.innerText =fastPart + newArea.toFixed(2);


})
