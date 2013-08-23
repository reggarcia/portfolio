'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('aboutCtrl', ['$scope', function($scope) {
  	$scope.header = "About Me";
  }])
 	.controller('contactCtrl', ['$scope', function($scope) {
  	$scope.header = "Contact Me";
  }])
	.controller('MyCtrl1', ['$scope', function($scope) {

  }])
	.controller('MyCtrl2', ['$scope', function($scope) {

  }]);