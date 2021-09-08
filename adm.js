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


	document.getElementById("btn-success").addEventListener('click' , e =>{
        
		var AddRow = document.getElementById('tabela-prod');
		var NewRow = AddRow.insertRow(n);
	
		Nome[x] = document.getElementById("Nome").value;
		Marca[x] = document.getElementById("Marca").value;
		Quantidade[x] = document.getElementById("Quantidade").value;
		Tamanho[x] =  document.getElementById("Tamanho").value
		Textarea[x] = document.getElementById("Textarea").value;
	
        
		if (Nome[x] == false ) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Não deixe os espaços em branco',
                showConfirmButton: 'ok',
            })
            return;
        }
        if (Marca[x] == false) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Não deixe os espaços em branco',
                showConfirmButton: 'ok',
            
            })
            return;
        }
        if (Quantidade[x] == false) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Não deixe os espaços em branco',
                showConfirmButton: 'ok',
            })
            return;
        }
        if (Tamanho[x] == false) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Não deixe os espaços em branco',
                showConfirmButton: 'ok',
            })
            return;
        }
        if (Textarea[x] == false) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Não deixe os espaços em branco',
                showConfirmButton: 'ok',
            })
            return;

        }else{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Parabéns, mais produtos foram cadastrados',
            showConfirmButton: 'ok',
        })

        document.getElementById("Nome").value = ''
		document.getElementById("Marca").value = ''
		document.getElementById("Quantidade").value = ''
		document.getElementById("Tamanho").value = ''
		document.getElementById("Textarea").value = ''
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
	
	})

