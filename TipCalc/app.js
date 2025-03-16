const billAmount = document.querySelector("#billAmount");
const tipPercent = document.querySelector("#tipPercent");
const numPeople = document.querySelector("#numPeople");
let totalTip = document.querySelector("#totalTip");
let tipPerPerson = document.querySelector("#tipPerPerson");
const calculateBtn = document.querySelector("#calculateBtn");

calculateBtn.addEventListener("click", () => {
  const billAmountInNumber = Number(billAmount.value);
  const tipPercentInNumber = Number(tipPercent.value);
  const numPeopleInNumber = Number(numPeople.value);

  if (
    isNaN(billAmountInNumber) ||
    isNaN(tipPercentInNumber) ||
    isNaN(numPeopleInNumber) ||
    billAmountInNumber <= 0 ||
    tipPercentInNumber <= 0 ||
    numPeopleInNumber <= 0
  ) {
    return alert("Please Enter valid values");
  }

  const totalTipValue = (
    billAmountInNumber *
    (tipPercentInNumber / 100)
  ).toFixed(2);

  const tipPerPersonValue = (totalTipValue / numPeopleInNumber).toFixed(2);

  totalTip.value = `${totalTipValue}`;

  tipPerPerson.value = `${tipPerPersonValue}`;
});
