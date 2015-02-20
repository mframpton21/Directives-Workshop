var app = angular.module('directiveWorkshop');

app.controller('mainCtrl', function($scope, mainService){
	$scope.isDisabled = false;
	$scope.pendingBtntext = "Submit";


	$scope.getData = function () {

		$scope.isDisabled = true;
		$scope.pendingBtntext = "Loading...";

    	return mainService.getData($scope.query)
    	.then(function (data) {

    		$scope.pendingBtntext = "Submit";
    		$scope.isDisabled = false;
    		console.log(data.data.results);
        	return $scope.data = data.results;
        });
    };

});