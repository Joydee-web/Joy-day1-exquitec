displayInput = document.getElementById("display");
secondDisplay = document.getElementById("display-two");

function clearDisplay() {
    displayInput.value = "";
}

function enterDisplay(value) {
    if (displayInput.value === "Error") {
        displayInput.value = "";
        displayInput.value += value;
        let eqn = displayInput.value;
        // if (eqn[eqn.length - 1] === "+") {
        //     console.log("Hello");
        // }
    } else {
        displayInput.value += value;
    }
}

function deleteOne() {
    if (displayInput.value === "Error") {
        displayInput.value = "";
    } else {
        displayInput.value = displayInput.value.slice(0, -1);
    }
}

function plusMinus() {
    let eqn = displayInput.value;
    if (eqn === eqn) {
        displayInput.value = `(-${eqn})`;
    }
}

function leftBracket() {
    if (displayInput.value === "Error") {
        displayInput.value = "";
        displayInput.value += "(";
    } else {
        displayInput.value += "(";
    }
}

function rightBracket() {
    if (displayInput.value === "Error") {
        displayInput.value = "";
        displayInput.value += ")";
    } else {
        displayInput.value += ")";
    }
}

function equalTo() {
    let eqn = displayInput.value;
    if (displayInput.value === "Error") {
        displayInput.value = "0";
    } else {
        try {
            let sln = eval(eqn);
            displayInput.value = sln;
            let roundSln = Math.round(sln);
            secondDisplay.value = `~ ${roundSln}`;
          } catch (error) {
              displayInput.value = "Error";
              secondDisplay.value = "";
          }
    }
}

function equalTwo() {
    let eqn = displayInput.value;
    try {
      let sln = eval(eqn);
      if (eqn.includes("*") || eqn.includes("/") || eqn.includes("-") || eqn.includes("+")) {
        secondDisplay.value = `= ${sln}`;
      } else {
            secondDisplay.value = "";
      }
    } catch (error) {
        secondDisplay.value = "";
    }
}

let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", equalTwo);
}