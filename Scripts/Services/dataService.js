window.services = window.services || {};

(function(namespace){
	namespace.dataService = function(){

	};

	var proto = namespace.dataService.prototype;

	proto.getDataFromServer = function(){
		var data = {
				lists: [
				        {
				        	title: "do now",
				        	items: [
				        	        {
				        	        	title: "finish assignment",
				        	        	description: "solve 4 hour problem"
				        	        },
				        	        {
				        	        	title: "go home",
				        	        	description: "eat and sleep"
				        	        }
				        	        ]
				        },
				        {
				        	title: "do later",
				        	items: [
				        	        {
				        	        	title: "fix bug",
				        	        	description: "bug no 12345, write cucumber"
				        	        },
				        	        {
				        	        	title: "learn css design",
				        	        	description: "read smacs blog"
				        	        }
				        	        ]
				        }
				        ]
		};
		
		return data;
	};

})(window.services);