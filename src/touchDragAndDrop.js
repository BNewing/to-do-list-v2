var interact =require('interact.js');

var automaticLabelAssignment = require('./automaticLabelAssignment.js');

var dragMoveListener = function (event) {
	var target = event.target,
			x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
			y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

	target.style.webkitTransform =
	target.style.transform =
		'translate(' + x + 'px, ' + y + 'px)';

	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
};

module.exports = {

		draggable: interact('.draggable')
		  .draggable({
		    inertia: true,
		    restrict: {
		      restriction: "parent",
		      endOnly: true,
		      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
		    },
		    autoScroll: true,
		    onmove: dragMoveListener,
		  }),

		dropzone: interact('.dropzone').dropzone({
			  overlap: 0.50,
			  ondropactivate: function (event) {
			    event.target.classList.add('drop-active');
			  },

		  ondragenter: function (event) {
		    var draggableElement = event.relatedTarget,
		        dropzoneElement = event.target;
		    dropzoneElement.classList.add('drop-target');
		  },

		  ondragleave: function (event) {
		    event.target.classList.remove('drop-target');
		  },

		  ondrop: function (event) {
		    event.relatedTarget.textContent = 'Dropped';
		  },

		  ondropdeactivate: function (event) {
		    event.target.classList.remove('drop-active');
		    event.target.classList.remove('drop-target');
		  }
		})
};
