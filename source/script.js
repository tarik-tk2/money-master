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

function parseValue(id) {
  const inputValue = id.value;
  if (!isNaN(inputValue)) {
    return parseFloat(inputValue);
  } else {
    console.log("Invalid Input");
  }
}
function calculateExpense() {
    const incomeValue=parseValue(income)
  const foodValue = parseValue(foodInput);
  const rentValue = parseValue(rentInput);
    const clothsValue = parseValue(clothsInput);
    if (isNaN(incomeValue)||incomeValue==" ") {
            return 'Invalid value '
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
    if (percentage == !" ") {
        const calculatePercentage = (percentage / 100) * balance;
        return calculatePercentage;
    } else { 
        console.log("Percent invalid input");
    }
 
}
document.getElementById("calculate-id").addEventListener("click", () => {
  const expense = calculateExpense();
  totalExpense.innerText = expense;
  const incomeInput = parseValue(income);
  const remain = remainBalance(incomeInput, expense);
    if (isNaN(incomeInput) || isNaN(remain)||remain===" "||incomeInput===" ") {
        console.log("Invalid input")
    } else {
      balanceRemain.innerText = remain;
      income.value = " ";
      foodInput.value = " ";
      rentInput.value = " ";
      clothsInput.value = " ";
    }

});

percentageButton.addEventListener("click", () => {
  const remainBalance = balanceRemain.innerText;
  const percentageValue = parseValue(percentageInput);
  const percentage = percentageCalculate(
    parseInt(remainBalance),percentageValue
    );
   
  saveAmount.innerText = percentage;
  remainingAmount.innerText = remainBalance - percentage;
});
