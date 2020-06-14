let counter;
let cost = 0;

function startCounter() {
  stopCounter();
  counter = setInterval(updateCost, 1000);
}

function stopCounter() {
  clearInterval(counter);
}

function updateCost() {
  const costEl = document.getElementById('cost');
  const costPerSecond = getCostPerSecond();
  cost = cost + costPerSecond;
  costEl.innerText = cost.toFixed(2);
}

function getCostPerSecond() {
  const hoursWorkedPerYear = 40 * 52;
  const salaries = document.getElementsByClassName('salary');
  return [...salaries].reduce((total, {value}) => {
    const salaryPerSecond = +value / hoursWorkedPerYear / 60 / 60;
    return total + salaryPerSecond;
  }, 0);
}
