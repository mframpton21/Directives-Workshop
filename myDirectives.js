var app = angular.module('directiveWorkshop');

app.directive('pending', function(){
	return {
    restrict: 'A',
      scope: {
    	 request: '&'
      },
    	link: function(scope, element, attrs){

        //console.log(scope, element, attrs);
        element.on('click', function() {
          scope.request();
          

        })	
    	}
  }
});