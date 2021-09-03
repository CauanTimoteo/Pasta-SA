let imagem = document.getElementById("Arquivo")
let file  = document.getElementById("file-img")

imagem.addEventListener("click" , () => {
    file.click();
})
file.addEventListener('change' , (event) => {
    
    if (file.length <= [0]) {
        return;
    }
    let Reader = new FileReader() 
    
    Reader.onload = () =>{

        Input = Reader.result;
    }
    Reader.readAsDataURL(file.files[0])
})
