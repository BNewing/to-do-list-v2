var interact =require('interact.js');


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
		      endOnly: true,
		      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
		    },
		    autoScroll: true,
		    onmove: dragMoveListener,

				onend: function (event) {
					var textEl = event.target.querySelector('p');
					textEl && (textEl.textContent =
						'moved a distance of '
						+ (Math.sqrt(event.dx * event.dx +
												 event.dy * event.dy)|0) + 'px');
					}
		  }),

		dropzone: interact('.dropzone').dropzone({
				accept: '.draggable',
			  overlap: 0.25,
			  ondropactivate: function (event) {
			    event.target.classList.add('drop-active');
			  },

		  ondragenter: function (event) {
		    var draggableElement = event.relatedTarget,
		        dropzoneElement = event.target;
		    dropzoneElement.classList.add('drop-target');
				draggableElement.classList.add('can-drop');
		  },

		  ondragleave: function (event) {
		    event.target.classList.remove('drop-target');
				event.relatedTarget.classList.remove('can-drop');
		  },

		  ondrop: function (event) {
				event.relatedTarget.removeAttribute('data-x');
				event.relatedTarget.removeAttribute('data-y');
				event.relatedTarget.removeAttribute('style');
				event.target.appendChild(event.relatedTarget);
				var childEl = event.relatedTarget;
				var parentDiv = event.target;
				var parentId = parentDiv.id;
				var childLabel = childEl.children;
				var label = childLabel[1];
				 if (parentId === 'completed'){
					 label.innerHTML = "Done";
					 label.style.backgroundColor = '#99ff33';
			 		}
					else {
						label.innerHTML = "Pending";
						label.style.backgroundColor = '#ffd27f';
					}
		  },

		  ondropdeactivate: function (event) {
		    event.target.classList.remove('drop-active');
		    event.target.classList.remove('drop-target');
		  }
		})
};

window.dragMoveListener = dragMoveListener;
