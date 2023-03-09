function myFunction1() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("input-field-2").value;
    let y=document.getElementById("input-field-3").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10 || isNaN(y) || y < 1 || y > 100000 ) {
      text = "Input not valid";
    } 
    else {
      text = "Input OK";
    }
    document.getElementById("demo1").innerHTML = text;
  }
f