function clearScreen() {
    document.getElementById("mainscreen").innerText = "0";
}

function appendNumber(number) {
    var screen = document.getElementById("mainscreen");
    if (screen.innerText === "0") {
        screen.innerText = number;
    } else {
        screen.innerText += number;
    }
}

function appendOperator(operator) {
    var screen = document.getElementById("mainscreen");
    screen.innerText += " " + operator + " ";
}

function appendDot() {
    var screen = document.getElementById("mainscreen");
    screen.innerText += ".";
}

function toggleSign() {
    var screen = document.getElementById("mainscreen");
    if (screen.innerText.startsWith("-")) {
        screen.innerText = screen.innerText.substring(1);
    } else {
        screen.innerText = "-" + screen.innerText;
    }
}

function calculateResult() {
    var screen = document.getElementById("mainscreen");
    try {
        screen.innerText = eval(screen.innerText.replace(/x/g, "*"));
    } catch (e) {
        screen.innerText = "Error";
    }
}


function toggleTheme(){
    // Get the checkbox
  var checkBox = document.getElementById("btn");
  // Get the output text
  var calc = document.getElementById("calc");
  var equal = document.getElementById("equal");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    calc.style.backgroundColor = "whitesmoke";
     
    equal.style.backgroundColor = "#fbb019"
  } else {

    calc.style.backgroundColor = "#121317";
    equal.style.backgroundColor = "whitesmoke"
    
  }
}

