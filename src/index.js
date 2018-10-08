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
    Storage.listElements.push(input.value);
    console.log(Storage.listElements);
    createListEntry(input.value, counter);
    input.value = "";
  }
});

if (typeof Storage !== "undefined") {
  if (Storage.listElements === undefined) {
    Storage.listElements = [];
  } else {
    for (let i = 0; i < Storage.listElements.length; i++) {
      createListEntry(Storage.listElements[i], counter);
      counter++;
    }
  }
} else {
  // Sorry! No Web Storage support..
}
