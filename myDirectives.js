var app = angular.module('myDirectives', []);

app.directive('pending', function(){
	return {
    	restrict: 'AE',
    	scope: {
    		request: '&'
    	},
    	link: function(scope, element, attrs){
    		console.log("test");
      		//console.log(scope, elem, attrs);
    	}
  	}

  });