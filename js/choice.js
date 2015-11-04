var direction = angular.module('choice',[]);
direction.controller('machoice',['$scope',function($scope,Data){
	$scope.bdelogoSmall = true;
	$scope.bdelogoLarge = false;
	$scope.tselogoSmall = false;
	$scope.tselogoLarge = true;
}]);