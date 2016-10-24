/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var css = __webpack_require__(1)

	localStorage.setItem("itemsCounter", 0);
	var pendingIdAssigner = elementIdAssigner * 1000;
	var elementIdAssigner = localStorage.getItem("itemsCounter")


	var mouseDragAndDrop = __webpack_require__(5);
	var touchDragAndDrop = __webpack_require__(7);


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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js!./main.styl", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js!./main.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n  margin: 25px;\n  background-color: #fffccc;\n  font-family: tahoma;\n}\nh2,\nh4 {\n  color: #412234;\n  letter-spacing: 1.5px;\n  line-height: 1.5;\n  border-bottom: solid 1px #412234;\n}\nh5 {\n  color: #412234;\n  letter-spacing: 1.5px;\n  line-height: 1;\n  text-transform: uppercase;\n  border-bottom: solid 1px #412234;\n}\np {\n  color: #555;\n  letter-spacing: 0.25px;\n  line-height: 1.5;\n}\n@media (max-width: 815px) {\n  h5 {\n    line-height: 1.5;\n  }\n  p {\n    text-align: left;\n  }\n}\nform {\n  color: #555;\n  letter-spacing: 0.25px;\n  line-height: 1.5;\n}\ninput {\n  border: solid 1px #000;\n}\nul {\n  padding-left: 0;\n}\nli {\n  color: #555;\n  line-height: 3/2;\n  background-color: #b49fbb;\n  border-radius: 5px;\n  border: solid 1px #000;\n  height: auto;\n  list-style-type: none;\n  padding-left: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-right: 20px;\n  position: relative;\n  overflow: auto;\n  margin: 20px;\n}\nbutton {\n  float: right;\n  margin: 5px;\n}\n@media screen and (max-width: 815px) {\n  top: 2px,\n  right: 2px {\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n}\nlabel {\n  float: right;\n  background: #ffd27f;\n  border-radius: 5px;\n  border: solid 1px #000;\n  top: 5px;\n  right: 35px;\n  padding: 2px;\n  z-index: 1;\n}\ndiv.third {\n  float: left;\n  width: 27.5%;\n  margin: 1.6%;\n  padding: 1%;\n  padding-bottom: 1%;\n}\n@media screen and (max-width: 815px) {\n  div.third {\n    padding-bottom: 15px;\n    margin-left: 5%;\n    margin-right: 5%;\n    width: 90%;\n  }\n}\ndiv.itemContainer {\n  background-color: #d3d3d3;\n  padding-bottom: 100px;\n  border: dotted 2px #000;\n  border-radius: 5px;\n}\ndiv.links {\n  float: left;\n  width: 45%;\n  border-radius: 25px;\n  border: solid 1px #000;\n  background-color: #ff92bb;\n  padding: 1%;\n  margin: 1%;\n}\ndiv.homepageLinks {\n  float: center;\n  width: 95%;\n  border-radius: 25px;\n  border: solid 1px #000;\n  background-color: #ff92bb;\n  padding: 1%;\n  margin: 1%;\n}\ndiv.topthird {\n  float: left;\n  width: 27.5%;\n  margin: 1.6%;\n  padding: 1%;\n  border: dotted 1px;\n  border-radius: 25px;\n  padding-bottom: 1%;\n  background-color: #ead7d7;\n}\n@media screen and (max-width: 815px) {\n  div.topthird {\n    padding: 10px;\n    float: center;\n    width: 90%;\n    margin: 25px;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var automaticLabelAssignment = __webpack_require__(6);

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


/***/ },
/* 6 */
/***/ function(module, exports) {

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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	import interact from 'interact'

	var automaticLabelAssignment = __webpack_require__(6);

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


/***/ }
/******/ ]);