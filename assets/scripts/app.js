const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return usrInput.value;
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calaculateResult(calculationType) {
  const enteredNumber = parseInt(getUserNumberInput());
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DEVIDE") ||
    //enteredNumber === 0
    !enteredNumber
  ) {
    return;
  }

  /*  if (
    calculationType === "ADD" ||
    calculationType === "SUBTRACT" ||
    calculationType === "MULTIPLY" ||
    calculationType === "DEVIDE"
  ) { */
  const initialResult = currentResult;
  let mathoperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathoperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathoperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathoperator = "*";
  } else if (calculationType === "DEVIDE") {
    currentResult /= enteredNumber;
    mathoperator = "/";
  }

  createAndWriteOutput(mathoperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calaculateResult("ADD");
}

function subtract() {
  calaculateResult("SUBTRACT");
}

function multiply() {
  calaculateResult("MULTIPLY");
}

function divide() {
  calaculateResult("DEVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
