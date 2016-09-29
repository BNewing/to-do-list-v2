var automaticLabelAssignment = require('./automaticLabelAssignment.js');

module.exports = {
	allowDrop: function (ev){
	    ev.preventDefault();
	},

	drag: function (ev){
	    ev.dataTransfer.setData("text", ev.target.id);
	},

	drop: function (ev){
	    ev.preventDefault();
	    var data = ev.dataTransfer.getData("text");
	    ev.target.appendChild(document.getElementById(data));
	    automaticLabelAssignment();
	}
};
