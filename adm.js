//-------------------------------------------//
    //CÓDIGO PARA O CADASTRO DE PRODUTOS//
//-------------------------------------------//

var Nome = [];
var Marca = [];
var Quantidade = [];
var Tamanho = [];
var Textarea = [];

var n = 1;
var x = 0;

function AddEstoque(){

	var AddRow = document.getElementById('tabela-prod');
	var NewRow = AddRow.insertRow(n);

	Nome[x] = document.getElementById("Nome").value;
	Marca[x] = document.getElementById("Marca").value;
	Quantidade[x] = document.getElementById("Quantidade").value;
	Tamanho[x] =  document.getElementById("Tamanho").value
	Textarea[x] = document.getElementById("Textarea").value;

	if (Nome || Marca || Quantidade || Tamanho || Textarea) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Parabéns, mais produtos foram cadastrados',
			showConfirmButton: 'ok',
		})
	}
	
	var cel1 = NewRow.insertCell(0);
	var cel2 = NewRow.insertCell(1);
	var cel3 = NewRow.insertCell(2);
	var cel4 = NewRow.insertCell(3);
	var cel5 = NewRow.insertCell(4);

	cel1.innerHTML = Nome[x];
	cel2.innerHTML = Marca[x];
	cel3.innerHTML = Quantidade[x];
	cel4.innerHTML = Tamanho[x]
	cel5.innerHTML = Textarea[x];
	
	n++;
	x++;

Swal.fire({
	position: 'center',
	icon: 'success',
	title: 'Parabéns, mais produtos foram cadastrados',
	showConfirmButton: 'ok',
})
}
