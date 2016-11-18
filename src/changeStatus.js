module.exports = {
  changeStatus: function (){
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
}
