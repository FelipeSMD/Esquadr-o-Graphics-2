

function mudaImagemOver(id) {
	document.getElementById(id).src = "../imagens/historia/bmouseover/"+id+".png";
}

function mudaImagemOut(id) {
	document.getElementById(id).src = "../imagens/historia/bnormais/"+id+".png";
}

function mudaImagemClick(id) {
	document.getElementById('somClick').play();
	document.getElementById(id).src = "../imagens/historia/bmouseclick/"+id+".png";
}



function mostra(){
	document.getElementById('lightbox').style.display = "block";
	
}

function esconde(){
	document.getElementById('lightbox').style.display = "none";

}