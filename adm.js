//-------------------------------------------//
    //CÓDIGO PARA O CADASTRO DE PRODUTOS//
//-------------------------------------------//

        var Nome = [];
		var Marca = [];
		var Quantidade = [];
		var Textarea = [];
        var Imagem = []

		var n = 1;
		var x = 0;

		function AddEstoque(){

			var AddRow = document.getElementById('tabela-prod');
			var NewRow = AddRow.insertRow(n);

			Nome[x] = document.getElementById("Nome").value;
			Marca[x] = document.getElementById("Marca").value;
			Quantidade[x] = document.getElementById("Quantidade").value;
			Textarea[x] = document.getElementById("Textarea").value;
            Imagem[x] = document.getElementById("Arquivo").value;



			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3);

			cel1.innerHTML = Nome[x];
			cel2.innerHTML = Marca[x];
			cel3.innerHTML = Quantidade[x];
			cel4.innerHTML = Textarea[x];
            cel4.innerHTML = Imagem[x];

			n++;
			x++;
		}