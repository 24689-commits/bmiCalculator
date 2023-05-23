let height = parseFloat(document.getElementById("height").value);
let weight = parseFloat(document.getElementById("weight").value);



let result = document.getElementById("result")
function answerBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
      let bmi = weight / Math.pow(height / 100, 2)
      document.getElementById("result").innerHTML =  bmi.toFixed(1);

    
}

    if (bmi<18.5) {
        document.getElementById("result").innerHTML = bmi.toFixed(1) + ': You are underweight😢'
        
    }else if (bmi>=18.5 && bmi<=24.9 ) {
        document.getElementById("result").innerHTML = bmi.toFixed(1) + ': You are normal😍'
       
    }else if (bmi>=25 && bmi<=29.9) {
        document.getElementById("result").innerHTML = bmi.toFixed(1) + ': You are overweight😬'
        
    }else if (bmi>30) {
        document.getElementById("result").innerHTML = bmi.toFixed(1) + ': You are obese🤐'
        
    }

     



function clearInput() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
}

function validation(){
    if (height === "") {
        document.getElementById("result").innerHTML = "Please enter height.";
      
      }
      if (weight === "") {
        document.getElementById("result").innerHTML = "Please enter weight.";
      
      
    }
}


// Underweight: < 18.5

// Normal weight: 18.5 - 24.9

// Overweight: 25 - 29.9

// Obese: ≥ 30




