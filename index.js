let counter;
let cost = 0;

function startCounter() {
  stopCounter();
  counter = setInterval(updateCost, 1000);
}

function stopCounter() {
  clearInterval(counter);
}

function counterEl() {
  return document.querySelector('.counter');
}

function resetCounter() {
  stopCounter();
  counterEl().innerText = '$0';
  cost = 0;
}

function updateCost() {
  const costPerSecond = getCostPerSecond();
  cost = cost + costPerSecond;
  counterEl().innerText = '$' + (+cost.toFixed(2)).toLocaleString();
}

function getCostPerSecond() {
  const hoursWorkedPerYear = 40 * 52;
  const salaries = document.querySelectorAll('.salary input');

  return [...salaries].reduce((total, {value}) => {
    const salaryPerSecond = +value / hoursWorkedPerYear / 60 / 60;
    return total + salaryPerSecond;
  }, 0);
}

function toggleSalariesVisibility() {
  const salaries = document.getElementsByClassName('salaries')[0];
  const salariesButton = document.getElementsByClassName('salaries-button')[0];

  if (salaries.classList.contains('salaries--closed')) {
    salaries.classList.remove('salaries--closed');
    salariesButton.innerText = '-';
  } else {
    salaries.classList.add('salaries--closed');
    salariesButton.innerText = '+';
  }
}

function addSalary() {
  const lastSalary = document.querySelector('.salary:last-of-type');
  const newSalary = lastSalary.cloneNode(true);
  lastSalary.after(newSalary);
}

function removeSalary() {
  const numberOfSalaries = document.getElementsByClassName('salary').length;
  if (numberOfSalaries === 1) return;
  event.target.parentElement.remove();
}
