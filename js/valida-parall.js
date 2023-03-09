function parallelogram_validation() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("input-field-4").value;
    let y=document.getElementById("input-field-5").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 1000000 || isNaN(y) || y < 1 || y > 100000) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo2").innerHTML = text;
  }
  