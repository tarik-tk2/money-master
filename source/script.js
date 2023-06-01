const income = document.getElementById("income-id");
const foodInput = document.getElementById("food-id");
const rentInput = document.getElementById("rent-id");
const clothsInput = document.getElementById("cloths-id");
const totalExpense = document.getElementById("total-expense");
const balanceRemain = document.getElementById("remain-total");
const percentageInput = document.getElementById("percentage-id");
const percentageButton = document.getElementById("percentage-button");
const saveAmount = document.getElementById("save-amount");
const remainingAmount = document.getElementById("remaining-amount");
let error = document.getElementById("errorId");


function parseValue(id) {
  const inputValue = id.value;
  if (!isNaN(inputValue)) {
    return parseFloat(inputValue);
  } else {
      error.textContent = "input is not a number";
     
  }
}
function calculateExpense() {
  const incomeValue = parseValue(income);
  const foodValue = parseValue(foodInput);
  const rentValue = parseValue(rentInput);
  const clothsValue = parseValue(clothsInput);
  if (isNaN(incomeValue) || incomeValue == " ") {
    error.textContent= "invalid income  value";
  } else {
    const totalExpense = foodValue + rentValue + clothsValue;
    return totalExpense;
  }
}
function remainBalance(balance, expense) {
  const remain = balance - expense;
  return remain;
}
function percentageCalculate(balance, percentage) {

    const calculatePercentage = (percentage / 100) * balance;
    return calculatePercentage;
  
}
document.getElementById("calculate-id").addEventListener("click", () => {
    error.textContent=''
    const expense = calculateExpense();
      totalExpense.innerText = expense;
  const incomeInput = parseValue(income);
  const remain = remainBalance(incomeInput, expense);
  if (
    isNaN(incomeInput) ||
    isNaN(remain) ||
    remain === " " ||
    incomeInput === " "
  ) {
    error.textContent="Invalid input";
  } else {
      

    balanceRemain.innerText = remain;
    income.value = " ";
    foodInput.value = " ";
    rentInput.value = " ";
    clothsInput.value = " ";
  }
});

percentageButton.addEventListener("click", () => {
  let percentageValue = parseValue(percentageInput);
  const remainBalance = parseFloat(balanceRemain.innerText);
    if (percentageValue === " "|| isNaN(percentageValue)) {
        error.textContent = "input is not valid ";
    } else { 

        
        if (calculateExpense() === "Invalid value") {
            error.textContent = "please calculate first";
        } else {
          const percentage = percentageCalculate(
            parseInt(remainBalance),
            percentageValue
          );
          saveAmount.innerHTML = percentage;
          remainingAmount.innerHTML = remainBalance - percentage;
          percentageInput.value = " ";
        }
        }

  
});
