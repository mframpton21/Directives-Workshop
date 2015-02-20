var app = angular.module('directiveWorkshop');

app.service('mainService', function($http, $q){
	this.getData = function(artist) {

		var deferred = $q.defer();
		var url = 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK';

        $http({
        	method: 'JSONP', 
        	url: url
        })
        .then(function (data) {

        	deferred.resolve(data);
		});
		return deferred.promise;
    };
})