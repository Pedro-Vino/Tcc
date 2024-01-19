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
