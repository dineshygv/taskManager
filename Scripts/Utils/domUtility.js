window.utils = window.utils || {};

(function(namespace){

	namespace.setOnReady = function(onReady){
		document.onreadystatechange = function () {
			if(document.readyState == 'complete') {
				onReady();
			}
		}
	};
	
	namespace.getHtmlFromTemplate = function(templateId){
		var element = document.getElementById(templateId);
		return element.innerHTML;
	};
	
	namespace.getNodeFromText = function(text){
		var div = document.createElement('div');
		div.innerHTML = text;
		return div;
	}
	
	namespace.getElementById = function(id){
		return document.getElementById(id);
	}
	
	namespace.insertElement = function(parent, child, position){
		parent.insertBefore(child, parent.children[position]);
	}
	
	namespace.hideElement = function(element){
		element.style.display = "none";
	}
	
	namespace.showElement = function(element){
		element.removeAttribute("style");
	}
	
	namespace.removeElement = function(element){
		element.parentElement.removeChild(element);
	};

})(window.utils);