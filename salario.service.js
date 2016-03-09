/*
Salários até R$ 280,00 (incluindo): aumento de 20%
Salários entre R$ 280,00 e R$ 700,00: aumento de 15%
Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%
Salários de R$ 1500,00 em diante: aumento de 5%
*/

angular.module('salarioApp.services', [])

.service('salarioService', [function () {
	
	var salario = {
		base : 0,
		reajuste: 0,
		valor_reajuste: 0,
		total: 0
	}

	this.calculaReajuste = function(s){
		
		salario.base = s;

		if(s <= 280) {
			salario.reajuste = 20;
		} else if(s <= 700) {
			salario.reajuste = 15;
		} else if(s <= 1500) {
			salario.reajuste = 10;
		} else {
			salario.reajuste = 5;
		}

		salario.valor_reajuste = salario.base * (salario.reajuste/100);
		salario.total = salario.base + salario.valor_reajuste;

		return salario;
	}
}])