


console.log("Ferenciador financeiro");
	
var cliente = "cesar renato";

console.log("CLiente:" + cliente);

var valproduto = 100;
var valdisconto = 37;


var calDescontofunc = require("./modules/calDisconto");

var valorfinal = calDescontofunc(valproduto, valdisconto);
console.log("valor final do produto = " + valorfinal);

/// modulo nativo do node https  para subir servidor 


