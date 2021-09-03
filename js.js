const footerEmail = document.getElementById("footer-email")
const news = document.getElementById("footer-email-btn");

    news.addEventListener("click", function() {
        newsSubmit();
    })

    function newsSubmit(){
        let text;
        let emailX = footerEmail.value;
        if(emailX == ""){
            text = "Insira um e-mail válido."
        } else {
            text = "Email cadastrado com sucesso!"
            document.getElementById("text-news").innerHTML = text;
        }
    }

const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")