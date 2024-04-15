var billAmount = 0;

//bill amount entered by user
const bill1 = document.getElementById("bill");

bill1.addEventListener("input", (e) => {
  console.log(e.target.value);
  billAmount = Number(e.target.value);
});

const tip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
const Total = (bill, tip) => bill + tip;

const printResult = () => {
  const calculatedTip = tip(billAmount);
  const total = Total(billAmount, calculatedTip);
  const div = document.getElementById("result");
  div.innerHTML = `The bill was ${billAmount}, the tip was ${calculatedTip}, and the total value ${total}`;
};

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", printResult);
