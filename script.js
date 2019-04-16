let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.getElementById("shopping");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
  li.addEventListener("click", itemDone);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
  input.value = "";
  
  function itemDone() {
    li.classList.toggle("done");
	}
	
	let deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("X"));
	deleteBtn.classList.add("delBtn");
	li.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", deleteItem);

	function deleteItem() {
		li.remove();
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);




