window.viewControllers = window.viewControllers || {};

(function(namespace){
	namespace.pageViewController = function(){
		
	}
	
	var proto = namespace.pageViewController.prototype;
	var lists = [];
	var contentElement;
	var addListButton;
	var saveListButton;
	var addListName;
	var addListTitle;
	var modalViewController;
	
	proto.initializePage = function(){
		var self = this;
		
		contentElement = window.utils.getElementById("content");
		addListButton = window.utils.getElementById("add-list");
		saveListButton = window.utils.getElementById("save-list");
		addListName = window.utils.getElementById("add-list-name");
		addListTitle = window.utils.getElementById("add-list-title");
		modalViewController = new window.viewControllers.modalViewController();
		modalViewController.initializeModal();		
		
		addListButton.addEventListener("click", function(){
			window.utils.hideElement(addListButton);
			window.utils.showElement(addListName);
		});
		
		saveListButton.addEventListener("click", function(){
			var listTitle = addListTitle.value;
			addListTitle.value = "";
			if(listTitle){
				self.addListFromData({
					title: listTitle
				});
			}			
			window.utils.hideElement(addListName);
			window.utils.showElement(addListButton);
		});
	};
	
	proto.addListFromData = function(listData){		
		var listViewController = new window.viewControllers.listViewController({
			modalViewController : modalViewController
		});
		lists.push(listViewController);
		listViewController.initlializeFromData(listData);
		var listElement = listViewController.getElement();
		window.utils.insertElement(contentElement, listElement, contentElement.children.length-2);
		
		var listRemoveButton = listElement.getElementsByClassName("remove-item")[0];
		listRemoveButton.addEventListener("click", function(){
			window.utils.removeElement(listElement);
		});		
	};
	
	
			
})(window.viewControllers);