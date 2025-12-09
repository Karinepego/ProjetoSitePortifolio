const contatoButtons = document.querySelectorAll(".contato-btn");

contatoButtons.forEach(button => {
    button.addEventListener("click", function() {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=karinepegoribeiro45@gmail.com&su=Visitei seu portifólio&body=Olá, visitei seu portifólio e gostaria de trocar uma conversa contigo.", "_blank");
    });
});