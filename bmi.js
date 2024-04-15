const bmiCalculator = (weight, height) => {
  const bmi = Math.round(weight / (height * height));
  return bmi;
};

let mark_w = 100,
  mark_h = 2,
  john_w = 80,
  john_h = 2;

const compareBMI = () => {
  const mark = bmiCalculator(mark_w, mark_h);
  const john = bmiCalculator(john_w, john_h);
  if (mark>john) {
    return `Mark's BMI (${mark}) is higher than John's (${john})!`;
  } else return `John's BMI (${john}) is higher than Mark's (${mark})!`;
};

let p = document.getElementById("show");
p.style.color = "lightblue";
const display = () => {
  p.innerText = compareBMI();
};

let button = document.getElementById("btn");
button.addEventListener("click", display);
