export function createListEntry(label, counter) {
  let list = document.getElementById("todolist");
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.setAttribute("class", "");
  let cb = document.createElement("input");
  cb.setAttribute("type", "checkbox");
  cb.setAttribute("id", "check" + counter);
  cb.setAttribute("value", "check" + counter);

  cb.onclick = checkHandler;
  console.log("test");

  let node = document.createTextNode(label);
  li.appendChild(span);
  span.appendChild(cb);
  span.appendChild(node);
  list.appendChild(li);
}

function checkHandler() {
  console.log("check");
  document.getElementById(this.id).parentElement.classList.toggle("del");
}
