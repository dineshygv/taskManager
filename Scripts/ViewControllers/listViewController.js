window.viewControllers = window.viewControllers || {};

(function(namespace){
	
	namespace.listViewController = function(options){
		this.modalViewController = options.modalViewController;
		this.items = [];
	}
	
	var proto = namespace.listViewController.prototype;
	
	function insertItemFromData(itemData){
		var itemViewController = new window.viewControllers.itemViewController({
			modalViewController: this.modalViewController
		});
		
		itemViewController.initlializeFromData(itemData);
		
		var itemElement = itemViewController.getElement();
		window.utils.insertElement(this.listItemsContainer, itemElement);
		
		var removeItem = itemElement.getElementsByClassName("remove-item")[0];
		removeItem.addEventListener("click", function(){
			window.utils.removeElement(itemElement);
		});		
	}
	
	proto.initlializeFromData = function(listData){
		var self = this;
		
		var listTemplate = window.utils.getHtmlFromTemplate("listTemplate");
		var listWithTitle = listTemplate.replace("{title}", listData.title);
		this.listElement = window.utils.getNodeFromText(listWithTitle);
		this.listItemsContainer = this.listElement.getElementsByClassName("list-items")[0];
		addItemButton = this.listElement.getElementsByClassName("add-item")[0];
		
		addItemButton.addEventListener("click", function(){
			self.modalViewController.setOnSaveButtonClick(function(){
				var modalData = self.modalViewController.getModalData();
				if(modalData.title){
					insertItemFromData.call(self, modalData);
				}
			});
			self.modalViewController.showModal();
		});
		
		if(listData.items && listData.items.length){
			listData.items.forEach(function(itemData){				
				insertItemFromData.call(self, itemData);
			});
		}
		
		this.listItemsContainer.addEventListener("dragover", function(event){
			event.preventDefault();
		});
		
		this.listItemsContainer.addEventListener("drop", function(event){
			event.preventDefault();
			var sourceElement = window.utils.getElementById("drag-source");
			sourceElement.id = "";
			window.utils.insertElement(this, sourceElement);
		});
	}
	
	proto.getElement = function(){
		return this.listElement;
	}
		
			
})(window.viewControllers);