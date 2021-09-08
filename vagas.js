let Nome = []
let Gênero = []
let CPF = []
let RG = []
let DataDeNascimento = []
let Idade = []
let Ensino = []
let NomeDoPai = []
let NomeDaMae = []
let Telefone = []
let Estado = []
let email = []
let Municipio = []
let Bairro = []

document.getElementById("btn-hit").addEventListener('click' , e =>{

Nome[0] = document.getElementById("Nome").value
Gênero[0] =document.getElementById("Gênero").value
CPF[0] = document.getElementById("CPF").value
RG[0] = document.getElementById("RG").value
DataDeNascimento[0] = document.getElementById("DataDeNascimento").value
Idade[0] = document.getElementById("Idade").value
Ensino[0] = document.getElementById("Ensino").value
NomeDoPai[0] = document.getElementById("NomeDoPai").value
NomeDaMae[0] = document.getElementById("NomeDaMae").value
Telefone[0] = document.getElementById("Telefone").value
Estado[0] = document.getElementById("Estado").value
email[0] = document.getElementById("email").value
Municipio[0] = document.getElementById("Municipio").value
Bairro[0] = document.getElementById("Bairro").value


if (Nome[0] == false) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Preencha o formulário corretamente',
        showConfirmButton: 'ok',
    })
    return;
}
if (Gênero[0] == false) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Preencha o formulário corretamente',
        showConfirmButton: 'ok',
    })
    return;
}
if (CPF[0] == false) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Preencha o formulário corretamente',
        showConfirmButton: 'ok',
    })
    return;
}
if (RG[0] == false) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Preencha o formulário corretamente',
        showConfirmButton: 'ok',
    })
    return;
}
if (DataDeNascimento[0] == false) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Preencha o formulário corretamente',
        showConfirmButton: 'ok',
    })
    return;
}
if (Idade[0] == false) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Preencha o formulário corretamente',
        showConfirmButton: 'ok',
    })
    return;
}
if (Ensino[0] == false) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Preencha o formulário corretamente',
        showConfirmButton: 'ok',
    })
    return;
}
if (NomeDoPai == false) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Preencha o formulário corretamente',
        showConfirmButton: 'ok',
    })
    return;
}
if (NomeDaMae[0] == false) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Preencha o formulário corretamente',
        showConfirmButton: 'ok',
    })
    return;
}
if (Telefone[0] == false) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Preencha o formulário corretamente',
        showConfirmButton: 'ok',
    })
    return;
}
if (Estado[0] == false) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Preencha o formulário corretamente',
        showConfirmButton: 'ok',
    })
    return;
}
if (email[0] == false) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Preencha o formulário corretamente',
        showConfirmButton: 'ok',
    })
    return;
}
if (Municipio[0] == false) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Preencha o formulário corretamente',
        showConfirmButton: 'ok',
    })
    return;
}
if (Bairro[0] == false) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Preencha o formulário corretamente',
        showConfirmButton: 'ok',
    })
    return;
}else{
    Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Seu formulario foi enviado com sucesso',
            showConfirmButton: 'ok',
        })
}
document.getElementById("Nome").value = ''
document.getElementById("Gênero").value = ''
document.getElementById("CPF").value = ''
document.getElementById("RG").value = ''
document.getElementById("DataDeNascimento").value = ''
document.getElementById("Idade").value = ''
document.getElementById("Ensino").value = ''
document.getElementById("NomeDoPai").value = ''
document.getElementById("NomeDaMae").value = ''
document.getElementById("Telefone").value = ''
document.getElementById("Estado").value = ''
document.getElementById("email").value = ''
document.getElementById("Municipio").value = ''
document.getElementById("Bairro").value = ''
})



