import "./style.css";
import { createListEntry } from "./list";

document.getElementById("app").innerHTML = `
<header><h1>Todo List</h1></header>
<ul id="todolist"></ul>
<input type="text" id="textinput" placeholder="sample Task">
`;

let input = document.getElementById("textinput");
let counter = 1;
let entryList = "";

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    counter++;
    entryList.push(input.value);
    localStorage.listElements = JSON.stringify(entryList);
    createListEntry(input.value, counter);
    input.value = "";
  }
});

if (localStorage.listElements === undefined || localStorage.listElements == "") {
    localStorage.listElements = "[]";
} 
entryList = JSON.parse(localStorage.listElements);
  for (let i = 0; i < entryList.length; i++) {
    createListEntry(entryList[i], counter);
    counter++;
  }