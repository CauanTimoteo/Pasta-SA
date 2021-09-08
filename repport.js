
document.getElementById("button-success").addEventListener('click' , e =>{

    const nome = document.getElementById("Name").value
    const email = document.getElementById("Email").value
    const select = document.getElementById("Select").value
    const descrição = document.getElementById("Caixa de mensagem").value

    const repport = {nome , email , select, descrição}
    
    localStorage.setItem('dados' , JSON.stringify(repport))


    if (nome == false) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'preencha os espaços corretamente',
            showConfirmButton: 'ok',
        })
        return;

    }
    if (email == false) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'preencha os espaços corretamente',
            showConfirmButton: 'ok',
        })
        return;

    }
    if (select == false) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'preencha os espaços corretamente',
            showConfirmButton: 'ok',
        })
        return;

    }
    if (descrição == false) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'preencha os espaços corretamente',
            showConfirmButton: 'ok',
        })
        return;

    }else{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sua reclamação foi enviada com sucesso',
            showConfirmButton: 'ok',
        })
    }
    
    
})

