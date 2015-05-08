window.viewControllers = window.viewControllers || {};

(function(namespace){
	namespace.itemViewController = function(options){
		this.modalViewController = options.modalViewController;
	}
	
	var proto = namespace.itemViewController.prototype;
	
	proto.initlializeFromData = function(itemData){
		var self = this;
		
		this.itemData = itemData;
		var itemTemplate = window.utils.getHtmlFromTemplate("itemTemplate");
		var itemWithTitle = itemTemplate.replace("{title}", itemData.title);
		this.itemElement = window.utils.getNodeFromText(itemWithTitle);
		var itemContent = this.itemElement.getElementsByClassName("item-content")[0];
				
		itemContent.addEventListener("click", function(){
			self.modalViewController.setModalData(self.itemData);
			self.modalViewController.showModal();
			
			self.modalViewController.setOnSaveButtonClick(function(){
				var modalData = self.modalViewController.getModalData();
				self.itemData = modalData;
				if(modalData.title){
					var itemTitle = self.itemElement.getElementsByClassName("item-content-title")[0];
					itemTitle.innerText = modalData.title;
				}
			});
		});
		
		this.itemElement.draggable = true;
		this.itemElement.addEventListener("dragstart", function(event){
			this.id = "drag-source";
		});
		
		this.itemElement.addEventListener("dragover", function(event){
			event.preventDefault();
		});
		
		this.itemElement.addEventListener("drop", function(event){
			event.preventDefault();
			var sourceElement = window.utils.getElementById("drag-source");
			sourceElement.id = "";
			this.parentElement.insertBefore(sourceElement, this);
		});
	}
	
	proto.getElement = function(){
		return this.itemElement;
	}
		
			
})(window.viewControllers);