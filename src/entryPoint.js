var css = require('../static/main.styl')
var touchDragAndDrop = require('./touchDragAndDrop.js');
//this below var wants changing to a constant
var listItemLimit = 2;

// Need to move away from this id concept
localStorage.setItem("itemsCounter", 0);
var pendingIdAssigner = elementIdAssigner * 1000;
var elementIdAssigner = localStorage.getItem("itemsCounter")


// functions that influence the display want putting elsewhere in another layer
// keep core logic in the same place
function checkIfContent(listItem){
  var listItem = document.getElementById("listItem").value;
	if(listItem === ""){
		document.getElementById('emptyFieldAlert').innerHTML = "You need to type something into the box first!";
	}
	else{
		document.getElementById('emptyFieldAlert').innerHTML = "";
		checkNumberOfExistingItems(listItem);
	}
}

function checkNumberOfExistingItems(listItem){
	var length = document.getElementsByTagName("button").length;
	if(length < listItemLimit) {
		elementIdAssigner++;
		localStorage.setItem("itemsCounter", elementIdAssigner);
		form.reset();
		createListItemElement(listItem, elementIdAssigner);
	}
	else{
		alert("You've already got " + listItemLimit + " on the list");
	}
}

function createListItemElement(listItem, elementId){
	var listItemNode = document.createTextNode(listItem);
	var unorderedList = document.getElementById("list");
	listItemTag = document.createElement("li");
	listItemTag.setAttribute("class", "item");
	listItemTag.setAttribute("class", "half");
	listItemTag.setAttribute("class", "draggable");
	createListItemDeleteButton(elementId, listItemTag);
	createListItemStatusLabel(elementId, listItemTag);
	listItemTag.appendChild(listItemNode);
	listItemTag.setAttribute("id", elementId);
	unorderedList.appendChild(listItemTag);
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

// functions that happen on button clicks
function deleteItem(){
	var child = document.getElementById(this.id).parentElement;
	child.parentNode.removeChild(child);
}

//UI stuff mixed in with logic - bad!
function changeStatus(){
	var content = document.getElementById(this.id).innerHTML;
	if(content === "Pending"){
		document.getElementById(this.id).innerHTML = "Done";
		document.getElementById(this.id).style.backgroundColor = '#BCED91';
		var item = document.getElementById(this.id).parentElement;
		document.getElementById('completed').appendChild(item);
	}
	else{
		document.getElementById(this.id).innerHTML = "Pending";
		document.getElementById(this.id).style.backgroundColor = '#ffd27f';
		var item = document.getElementById(this.id).parentElement;
		document.getElementById('pending').appendChild(item);
	}
}


window.checkIfContent = checkIfContent;
