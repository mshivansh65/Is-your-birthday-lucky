const inputDOBel = document.querySelector("#input-date");
const inputNumberEl = document.querySelector("#input-number");
const outputMessageEl = document.querySelector("#output-message");
const btnCheck = document.querySelector(".btn-check");

let DOB = 0;

inputDOBel.addEventListener("change", function () {
  const replacedDob = inputDOBel.value.replace(/-/g, "0");
  DOB = Number.parseInt(replacedDob);
});
btnCheck.addEventListener("click", function () {
  if (DOB !== 0) {
    const luckyNumber = Number(inputNumberEl.value);
    if (Number.isNaN(luckyNumber) || luckyNumber === 0) {
      alert("please enter valid number");
    } else {
      checkIfLucky(luckyNumber);
    }
  }
});
function checkIfLucky(luckyNumber) {
  let dobCopy = DOB;
  let sum = 0;
  while (dobCopy > 0) {
    sum = sum + (dobCopy % 10);
    dobCopy = Math.trunc(dobCopy / 10);
  }
  if (sum % luckyNumber === 0) {
    outputMessageEl.textContent = "Wow Lucky!";
  } else {
    outputMessageEl.textContent = `${luckyNumber} is not so lucky`;
  }
}
