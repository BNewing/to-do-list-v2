localStorage.setItem("itemsCounter", 0);
var elementIdAssigner = localStorage.getItem("itemsCounter")
var pendingIdAssigner = elementIdAssigner * 1000;

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
	enableDragFunctionality(listItemTag);
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


function enableDragFunctionality(listItem){
	listItem.addEventListener("dragstart", function(ev){
		ev.dataTransfer.setData("Text", ev.target.id);
	});
	listItem.setAttribute("draggable", "true");
	listItem.addEventListener("touchstart", function(ev){
		ev.stopPropagation();
		touchMove(li)
	}, false);
}

function touchMove(li){
	li.addEventListener("touchmove", function(ev){
		ev.preventDefault();
		ev.stopPropagation();
		var touch = ev.targetTouches[0];
		var ul = document.getElementsByTagName("li");
		li.style.left = parseInt(touch.clientX) -touch.offsetX +'px';
		li.style.top = parseInt(touch.clientY) - touch.offsetY + 'px';
		this.style.position = "absolute";
		this.style.left = "0px"
		this.style.top = "0px"
		touchEnd(li);
	}, false);
}

function touchEnd(li){
	li.addEventListener("touchend", function(ev){
	ev.stopPropagation();
	var changedTouch = ev.changedTouches[0];
	var x = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);
	console.info('error here', x, changedTouch);
	if(x.id === "div1" || x.id === "div2" || x.id === "div3"){
	    x.appendChild(this);
	}
	else{
		var node = ev.target;
		var parent = node.parentElement;
		parent.appendChild(node);
	}
	this.style.position = "relative";
	this.style.left = "0px"
	this.style.top = "0px"
	automaticLabelAssignment();
	}, false);
}

function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    automaticLabelAssignment();
}

function automaticLabelAssignment(){
	var div3 = document.getElementById("div3");
    var div3Items = div3.getElementsByTagName("label");
    var i;
		for (i = 0; i <	div3Items.length; i++) {
   		div3Items[i].innerHTML = "Done";
   		div3Items[i].style.backgroundColor = '#99ff33'
   	}
   	var div1 = document.getElementById("div1");
    var div1Items = div1.getElementsByTagName("label");
    var j;
	for (j = 0; j <	div1Items.length; j++) {
   		div1Items[j].innerHTML = "Pending";
   		div1Items[j].style.backgroundColor = '#ffd27f'
   	}
   	  var div2 = document.getElementById("div2");
    var div2Items = div2.getElementsByTagName("label");
    var k;
	for (k = 0; k <	div2Items.length; k++) {
   		div2Items[k].innerHTML = "Pending";
   		div2Items[k].style.backgroundColor = '#ffd27f'
   	}
}


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


// window.createListItemStatusLabel = createListItemStatusLabel;
// window.createListItemDeleteButton = createListItemDeleteButton;
// window.createListItem = createListItem;
// window.collectContent = collectContent;
// window.drop = drop;
// window.automaticLabelAssignment = automaticLabelAssignment;
// window.drag = drag;
// window.allowDrop = allowDrop;
// window.touchEnd = touchEnd;
// window.touchMove = touchMove;
// window.enableDragFunctionality = enableDragFunctionality;
// window.deleteItem = deleteItem;
// window.changeStatus = changeStatus;
