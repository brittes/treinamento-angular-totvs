angular.module('salarioApp.controllers', [])

.controller('salarioController', ['$scope', 'salarioService', function ($scope, salarioService) {
	
	$scope.calcular = function(){

		$scope.resultado = salarioService.calculaReajuste($scope.salario);

	}
}])