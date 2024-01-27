/*
Verificar email/senha
*/
function pedro(){
var pedregulho = document.getElementById("bolotinha").value;
    var pedrosa = document.getElementById("bolota").value;
    if(pedrosa==""){
        window.alert("Digite um email");
        return false;
    }   
    else if(pedrosa.indexOf("@")== -1){
        window.alert("escreve um @");
        return false;
    }
    else if(pedrosa.indexOf(".")== -1){
        window.alert("escreve um .");
        return false;
    }
    else if(pedregulho==""){
        window.alert("Digite uma senha");
        return false;
    }
    else{
        window.alert("Cadastro ok!");
        return true;
    }
}
/*
pesquisar
*/
var btn = document.querySelector('#search');
var container = document.querySelector('#pesquisa');

btn.addEventListener('click', function(){
    if(container.style.display === 'flex'){
        container.style.display = 'none';
    } else{
        container.style.display = 'flex';
    }
});


function search(){
    let input = document.getElementById('txtBusca').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('categorias')

    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
        x[i].style.display = "none"
    }else{
        x[i].style.display = "list-item"
    }
    }
}