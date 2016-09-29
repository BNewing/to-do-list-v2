localStorage.setItem("itemsCounter", 0);
var pendingIdAssigner = elementIdAssigner * 1000;



var mouseDragAndDrop = require('./mouseDragAndDrop.js');
var touchDragAndDrop = require('./touchDragAndDrop.js');















function checkIfContent(){
	var textInput = document.getElementById("listItem").value;
	if(textInput === ""){
		document.getElementById('emptyFieldAlert').innerHTML = "You need to type something into the box first!";
	}
	else{
		document.getElementById('emptyFieldAlert').innerHTML = "";
		collectContent();
	}
}

var elementIdAssigner = localStorage.getItem("itemsCounter")

function collectContent(){
	var length = document.getElementsByTagName("button").length;
	if(length <=9) {
		elementIdAssigner++;
		createListItem(elementIdAssigner);
		localStorage.setItem("itemsCounter", elementIdAssigner);
		document.getElementById("itemEntry").reset();
	}
	else{
		alert("You've already got ten on the list");
	}
}

function createListItem(elementId){
	var textInput = document.getElementById("listItem").value;
	listItemTag = document.createElement("li");
	listItemTag.setAttribute("class", "item");
	createListItemDeleteButton(elementId, listItemTag);
	createListItemStatusLabel(elementId, listItemTag);
	var listItemNode = document.createTextNode(textInput);
	var unorderedList = document.getElementById("list");
	listItemTag.appendChild(listItemNode);
	listItemTag.setAttribute("id", elementId);
	unorderedList.appendChild(listItemTag);
	touchDragAndDrop.enableDragFunctionality(listItemTag);
}

function createListItemDeleteButton(elementId, listItemTag) {
	var deleteButton = document.createElement("button");
	var buttonContent = document.createTextNode("X");
	deleteButton.setAttribute("id", elementId*1000);
	deleteButton.appendChild(buttonContent);
	listItemTag.appendChild(deleteButton);
	deleteButton.onclick = deleteItem;
}

function createListItemStatusLabel(elementId, listItemTag){
	var labelText = document.createTextNode("Pending");
	var pendingLabel = document.createElement("label");
	pendingLabel.appendChild(labelText);
	pendingLabel.setAttribute("id", elementId*100000)
	listItemTag.appendChild(pendingLabel);
	pendingLabel.onclick = changeStatus;
}












/*BASIC OPERATIONS?*/













function deleteItem(){
	var child = document.getElementById(this.id).parentElement;
	child.parentNode.removeChild(child);
}

function changeStatus(){
	var content = document.getElementById(this.id).innerHTML;
	if(content === "Pending"){
		document.getElementById(this.id).innerHTML = "Done";
		document.getElementById(this.id).style.backgroundColor = '#99ff33';
		var item = document.getElementById(this.id).parentElement;
		document.getElementById('div3').appendChild(item);
	}
	else{
		document.getElementById(this.id).innerHTML = "Pending";
		document.getElementById(this.id).style.backgroundColor = '#ffd27f';
		var item = document.getElementById(this.id).parentElement;
		document.getElementById('div4').appendChild(item);
	}
}


window.checkIfContent = checkIfContent;
window.drop = mouseDragAndDrop.drop;
window.allowDrop = mouseDragAndDrop.allowDrop;
