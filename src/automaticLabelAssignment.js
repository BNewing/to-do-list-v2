var automaticLabelAssignment = function (){
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

module.exports = automaticLabelAssignment;