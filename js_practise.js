var name = "Bodhit Darji";
const message = prompt("What would you like to add?");
console.log("Hi Bodhit! We have got your order for " + message);

const employee = {
  name: "Bodhit Darji",
  age: 25,
  department: "fullstack",
  specialization: "MERN",
};
const ele = document.querySelector("body")
const new1 = document.createElement("h1");
new1.innerText =
  "Create the things which inspire you and helpful for the society";
ele.append(new1);
console.log(ele.children)
