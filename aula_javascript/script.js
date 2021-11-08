function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar</b>";




    //console.log(document.getElementById("agradecimento"));

    // alert("obrigado por clicar")
}

function redirecionar() {
    window.open("https://www.linkedin.com/in/victor-bruno-56ba5692/");
    //window.location.href = "https://www.linkedin.com/in/victor-bruno-56ba5692/";

}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML ="obrigado por passar o mouse";
//alert("trocar texto");
elemento.innerHTML ="obrigado por passar o mouse";


}

function voltar(elemento){
   // document.getElementById("mousemove").innerHTML ="passe o mouse aqui";
   elemento.innerHTML = "passe o mouse aqui"; 
}

function load(){

alert("Pagina Carregada")


}

function funcaoChange(elemento){
    console.log(elemento.value);


}