

function mudaImagemOver(id) {
	document.getElementById(id).src = "../imagens/escolherpersonagem/bmouseover/"+id+".png";

}

function mudaImagemOut(id) {
	document.getElementById(id).src = "../imagens/escolherpersonagem/bnormais/"+id+".png";
}

function mudaImagemClick(id) {
	document.getElementById('somClick').play();
	document.getElementById(id).src = "../imagens/escolherpersonagem/bmouseclick/"+id+".png";
}

function bioHiperion(){
	document.getElementById("personagem").src = "../imagens/escolherpersonagem/bio/biohiperion.png";
	document.getElementById("personagem").style.margin = "70px 0px 0px -435px";
	mudaImagemOver("bhiperion");
}

function bioOmega(){
	document.getElementById("personagem").src = "../imagens/escolherpersonagem/bio/bioomega.png";
	document.getElementById("personagem").style.margin = "70px 0px 0px -435px";
	mudaImagemOver("bomega");
}

function bioKalick(){
	document.getElementById("personagem").src = "../imagens/escolherpersonagem/bio/biokalick.png";
	document.getElementById("personagem").style.margin = "70px 0px 0px -435px";
	mudaImagemOver("bkalick");
}

function mostra(){

	mudaImagemClick('ajuda');
	document.getElementById('box').style.display = "block";
	
}

function esconde(){

	mudaImagemClick('fechar');
	document.getElementById('box').style.display = "none";

}

function escolhidoHiperion(event){
	mudaImagemClick("bhiperion");
	window.localStorage.setItem('usuario', 'hiperion');
}

function escolhidoKalick(event){
	mudaImagemClick("bkalick");
	window.localStorage.setItem('usuario', 'kalick');
}

function escolhidoOmega(event){
	mudaImagemClick("bomega");
	window.localStorage.setItem('usuario', 'omega');
}

