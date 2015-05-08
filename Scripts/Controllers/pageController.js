window.controllers = window.controllers || {};

(function(namespace){
	namespace.pageController = function(){
		
	}
	
	var proto = namespace.pageController.prototype;
	var pageViewController;
	
	proto.initializePage = function(){
		pageViewController = new window.viewControllers.pageViewController();
		pageViewController.initializePage();
		
		var dataService = new window.services.dataService();
		var dataFromServer = dataService.getDataFromServer();
		
		initializePageModelFromData(dataFromServer);
	}
	
	function initializePageModelFromData(data){		
		if(!data || !data.lists || !data.lists.length){
			return;
		}
		
		data.lists.forEach(function(listData){
			pageViewController.addListFromData(listData);
		});
	}
})(window.controllers);