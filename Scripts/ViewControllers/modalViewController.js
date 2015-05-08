window.viewControllers = window.viewControllers || {};

(function(namespace){
	namespace.modalViewController = function(){
		
	}
	
	var proto = namespace.modalViewController.prototype;
	var onSaveButtonClickCallback;
	var modalBlocker;
	var modalTitle;
	var modalDescription;
		
	proto.initializeModal = function(){
		modalBlocker = window.utils.getElementById("modal-blocker");
		modalTitle = window.utils.getElementById("modal-title-input");
		modalDescription = window.utils.getElementById("modal-desc-input");
		var modalSaveButton = window.utils.getElementById("modal-save-button");
				
		modalSaveButton.addEventListener("click", function(){
			onSaveButtonClickCallback();
			modalTitle.value = "";
			modalDescription.value = "";
			window.utils.hideElement(modalBlocker);
		});
		
		var modalCloseButton = window.utils.getElementById("modal-close-button");
		modalCloseButton.addEventListener("click", function(){
			modalTitle.value = "";
			modalDescription.value = "";
			window.utils.hideElement(modalBlocker);
		});
	};
	
	proto.showModal = function(){
		window.utils.showElement(modalBlocker);
	};
	
	proto.getModalData = function(){
		return {
			title: modalTitle.value,
			description: modalDescription.value
		};
	};
	
	proto.setModalData = function(modalData){
		modalTitle.value = modalData.title;
		modalDescription.value = modalData.description;
	};
	
	proto.setOnSaveButtonClick = function(onSaveCallback){		
		onSaveButtonClickCallback = onSaveCallback;
	};
	
	
			
})(window.viewControllers);