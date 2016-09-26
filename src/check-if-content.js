var checkIfContent = function(){
	var textInput = document.getElementById("listItem").value;
	if(textInput === ""){
		document.getElementById('emptyFieldAlert').innerHTML = "You need to type something into the box first!"
	}
	else{
		document.getElementById('emptyFieldAlert').innerHTML = "";
		collectContent();
	}
}

module.exports = checkIfContent;
