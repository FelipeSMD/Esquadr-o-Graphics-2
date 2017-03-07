//var audios = document.getElementById('somClick')

function mudaImagemOver(id) {
	document.getElementById(id).src = "imagens/telainicial/bmouseover/"+id+".png";
}

function mudaImagemOut(id) {
	document.getElementById(id).src = "imagens/telainicial/bnormais/"+id+".png";
}

function mudaImagemClick(id) {

	document.getElementById('somClick').play();
	document.getElementById(id).src = "imagens/telainicial/bmouseclick/"+id+".png";

	
}

function apareceBox(){
	mudaImagemClick('ajuda');
	document.getElementById('box').style.display = "block";
}

function desapareceBox(){
	document.getElementById('box').style.display = "none";
}