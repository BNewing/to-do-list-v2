var automaticLabelAssignment = require('./automaticLabelAssignment.js');

module.exports = {
	enableDragFunctionality: function(listItem){
		listItem.addEventListener("dragstart", function(ev){
			ev.dataTransfer.setData("Text", ev.target.id);
		});
		listItem.setAttribute("draggable", "true");
		listItem.addEventListener("touchstart", function(ev){
			ev.stopPropagation();
			touchMove(li)
		}, false);
	},

	touchMove: function(li){
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
	},

	touchEnd: function(li){
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
};


