function Enviar(){
    var nome = document.getElementById("firstname");
    var sobrenome = document.getElementById("lastname");
    var email = document.getElementById("email");
    var numero = document.getElementById("number");
    var senha = document.getElementById("password");
    var confirmacao = document.getElementById("confirmPassword");

    if(nome.value != "" && sobrenome.value != "" && email.value != "" && numero.value != "" && senha.value != ""
     && confirmacao.value != ""){
        alert("Tudo certo, "+nome.value+" "+sobrenome.value+", recebemos os seus dados e seu pedido foi salvo.")
    }
}