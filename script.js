var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("shopping");


function inputLength() {
	return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.addEventListener("click", itemDone);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
  input.value = "";
  
  function itemDone() {
    li.classList.toggle("done");
	}
	
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("X"));
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




