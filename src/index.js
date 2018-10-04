import "./style.css";
import { createListEntry } from "./list";

document.getElementById("app").innerHTML = `
<header><h1>Todo List</h1></header>
<ul id="todolist"></ul>
<input type="text" id="textinput" placeholder="sample Task">
`;

let input = document.getElementById("textinput");
let counter = 1;

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    counter++;
    createListEntry(input.value, counter);
    input.value = "";
  }
});

for (let i = 0; i < 5; i++) {
  createListEntry("Eintrag " + counter, counter);
  counter++;
}
