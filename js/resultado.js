

function mudaImagemOver(id) {
	document.getElementById(id).src = "../imagens/resultado/bmouseover/"+id+".png";
}

function mudaImagemOut(id) {
	document.getElementById(id).src = "../imagens/resultado/bnormais/"+id+".png";
}

function mudaImagemClick(id) {
	document.getElementById('somClick').play();
	document.getElementById(id).src = "../imagens/resultado/bmouseclick/"+id+".png";
}



function mostra(){
	document.getElementById('box').style.display = "block";
	
}

function esconde(){
	document.getElementById('box').style.display = "none";

}

var usuario = window.localStorage.getItem('usuario');
var fundo = new Image();
fundo = document.getElementById('fundoResultado');

trocaAjuda();
function trocaAjuda(){
    if(usuario == "hiperion"){
        
        fundo.src = "../imagens/resultado/fundohiperion.png";
        document.getElementById('voltaraoinicio').style.margin = "400px 0px 0px 630px"
    }
    else if(usuario == "omega"){
        
        fundo.src = "../imagens/resultado/fundoomega.png";
        document.getElementById('voltaraoinicio').style.margin = "400px 0px 0px 80px"
    }
    else{
        fundo.src = "../imagens/resultado/fundokalick.png";
        document.getElementById('voltaraoinicio').style.margin = "400px 0px 0px 630px"
    }
}