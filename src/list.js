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

  let txtNode = document.createElement("span");
  let node = document.createTextNode(label);
  li.appendChild(span);
  span.appendChild(cb);
  span.appendChild(txtNode);
  txtNode.appendChild(node);
  list.appendChild(li);
}

function checkHandler() {
  document.getElementById(this.id).parentElement.classList.toggle("del");
}
