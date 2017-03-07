var atualmagem = 1;

function mudaImagemOver(id) {
	document.getElementById(id).src = "../imagens/tipodegrafico/bmouseover/"+id+".png";
}

function mudaImagemOut(id) {
	document.getElementById(id).src = "../imagens/tipodegrafico/bnormais/"+id+".png";
}

function mudaImagemClick(id) {

	document.getElementById('somClick').play();
	document.getElementById(id).src = "../imagens/tipodegrafico/bmouseclick/"+id+".png";
	
}

function avancarFala(){
	if(atualmagem==1){
		document.getElementById('fala').src = "../imagens/tipodegrafico/fundokalick2.png";
		atualmagem=2;
		mudaImagemClick('falaavancar');
		document.getElementById('falaavancar').style.display = "none";
		document.getElementById('falavoltar').style.display = "block";
	}
	else{
		document.getElementById('fala').src = "../imagens/tipodegrafico/fundokalick1.png";
		atualmagem=1;
		mudaImagemClick('falavoltar');
		document.getElementById('falaavancar').style.display = "block";
		document.getElementById('falavoltar').style.display = "none";
	}
}




function mostra(){

	mudaImagemClick('ajuda');
	document.getElementById('box').style.display = "block";
	
}

function esconde(){

	mudaImagemClick('fechar');
	document.getElementById('box').style.display = "none";

}