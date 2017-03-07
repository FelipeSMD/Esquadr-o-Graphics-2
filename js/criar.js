function mudaImagemOver(id) {
    if(nClick==1){
	   document.getElementById(id).src = "../imagens/graficodebarras/bmouseover/"+id+".png";
    }
    else if( (nClick==2) && (nomeDoBotao!=id) ){
        nClick = 1;
        document.getElementById(id).src = "../imagens/graficodebarras/bmouseover/"+id+".png";
    }
}

function mudaImagemOut(id) {
    if(nClick==1){
	   document.getElementById(id).src = "../imagens/graficodebarras/bnormais/"+id+".png";
    }
}

function mudaImagemClick(id) {
    document.getElementById('somClick').play();
    if(nomeDoBotao==id){
        nClick=2;
        document.getElementById(id).src = "../imagens/graficodebarras/bmouseclick/"+id+".png";
        
    }
    else if(nomeDoBotao!=id){
        document.getElementById(nomeDoBotao).src = "../imagens/graficodebarras/bnormais/"+nomeDoBotao+".png";
        nClick=2;
        nomeDoBotao=id;
        document.getElementById(id).src = "../imagens/graficodebarras/bmouseclick/"+id+".png";

    }
}

function mudaImagemOverMateria(id) {
    if(nClickMateria==1){
       document.getElementById(id).src = "../imagens/materia/bmouseover/"+id+".png";
    }
    else if( (nClickMateria==2) && (nomeDoBotaoMateria!=id) ){
        nClickMateria = 1;
        document.getElementById(id).src = "../imagens/materia/bmouseover/"+id+".png";
    }
}

function mudaImagemOutMateria(id) {
    if(nClickMateria==1){
       document.getElementById(id).src = "../imagens/materia/bnormais/"+id+".png";
    }
}

function mudaImagemClickMateria(id) {
    document.getElementById('somClick').play();
    if(nomeDoBotaoMateria==id){
        nClickMateria=2;
        document.getElementById(id).src = "../imagens/materia/bmouseclick/"+id+".png";
        
    }
    else if(nomeDoBotaoMateria!=id){
        document.getElementById(nomeDoBotaoMateria).src = "../imagens/materia/bnormais/"+nomeDoBotaoMateria+".png";
        nClickMateria=2;
        nomeDoBotaoMateria=id;
        document.getElementById(id).src = "../imagens/materia/bmouseclick/"+id+".png";

    }
}

function mudaImagemOverAjuda(id) {
    if(nClickAjuda==1){
       document.getElementById(id).src = "../imagens/graficodebarras/ajuda/bmouseover/"+id+".png";
    }
    else if( (nClickAjuda==2) && (nomeDoBotaoAjuda!=id) ){
        nClickAjuda = 1;
        document.getElementById(id).src = "../imagens/graficodebarras/ajuda/bmouseover/"+id+".png";
    }
}

function mudaImagemOutAjuda(id) {
    if(nClickAjuda==1){
       document.getElementById(id).src = "../imagens/graficodebarras/ajuda/bnormais/"+id+".png";
    }
}

function mudaImagemClickAjuda(id) {
    document.getElementById('somClick').play();
    if(nomeDoBotaoAjuda==id){
        nClickAjuda=2;
        document.getElementById(id).src = "../imagens/graficodebarras/ajuda/bmouseclick/"+id+".png";
        
    }
    else if(nomeDoBotaoAjuda!=id){
        document.getElementById(nomeDoBotaoAjuda).src = "../imagens/graficodebarras/ajuda/bnormais/"+nomeDoBotaoAjuda+".png";
        nClickAjuda=2;
        nomeDoBotaoAjuda=id;
        document.getElementById(id).src = "../imagens/graficodebarras/ajuda/bmouseclick/"+id+".png";

    }
}

function mudaImagemOverAjudaMateria(id) {
    if(nClickAjudaMateria==1){
       document.getElementById(id).src = "../imagens/materia/ajudamateria/bmouseover/"+id+".png";
    }
    else if( (nClickAjudaMateria==2) && (nomeDoBotaoAjudaMateria!=id) ){
        nClickAjudaMateria = 1;
        document.getElementById(id).src = "../imagens/materia/ajudamateria/bmouseover/"+id+".png";
    }
}

function mudaImagemOutAjudaMateria(id) {
    if(nClickAjudaMateria==1){
       document.getElementById(id).src = "../imagens/materia/ajudamateria/bnormais/"+id+".png";
    }
}

function mudaImagemClickAjudaMateria(id) {
    document.getElementById('somClick').play();
    if(nomeDoBotaoAjudaMateria==id){
        nClickAjudaMateria=2;
        document.getElementById(id).src = "../imagens/materia/ajudamateria/bmouseclick/"+id+".png";
        
    }
    else if(nomeDoBotaoAjudaMateria!=id){
        document.getElementById(nomeDoBotaoAjudaMateria).src = "../imagens/materia/ajudamateria/bnormais/"+nomeDoBotaoAjudaMateria+".png";
        nClickAjudaMateria=2;
        nomeDoBotaoAjudaMateria=id;
        document.getElementById(id).src = "../imagens/materia/ajudamateria/bmouseclick/"+id+".png";

    }
}

function mudaImagemOverModelos(id) {
    document.getElementById(id).src = "../imagens/materia/modelos/bmouseover/"+id+".png";

}

function mudaImagemOutModelos(id) {
    document.getElementById(id).src = "../imagens/materia/modelos/bnormais/"+id+".png";
}

function mudaImagemClickModelos(id) {
    document.getElementById('somClick').play();
    document.getElementById(id).src = "../imagens/materia/modelos/bmouseclick/"+id+".png";
}

function mudaTextoAjuda(name, id, classe){
    document.getElementById("textoajuda").src = "../imagens/graficodebarras/ajuda/textos/"+name+".png";
    mudaImagemClickAjuda(id);
    maisde1(classe);
}

function mudaTextoAjudaMateria(name, id){
    document.getElementById("textoajudamateria").src = "../imagens/Materia/ajudamateria/textos/"+name+".png";
    mudaImagemClickAjudaMateria(id);
   
}


function mostra(){
    if (usuario == 'hiperion') {
        mudaImagemClick('ajudahiperion');
    }else if (usuario == 'kalick') {
        mudaImagemClick('ajudakalick');
    }else if (usuario == 'omega') {
        mudaImagemClick('ajudaomega');
    };
    
    document.getElementById('ajudagraficos').style.display = "block";
    
}

function esconde(){

    mudaImagemClickAjuda('fecharajuda');
    document.getElementById('ajudagraficos').style.display = "none";

}

function mostraMateria(){
    if (usuario == 'hiperion') {
        mudaImagemClickMateria('ajudahiperionM');
    }else if (usuario == 'kalick') {
        mudaImagemClickMateria('ajudakalickM');
    }else if (usuario == 'omega') {
        mudaImagemClickMateria('ajudaomegaM');
    };
    
    document.getElementById('ajudamateria').style.display = "block";
    
}

function escondeMateria(){

    mudaImagemClickAjudaMateria('fecharajudamateria');
    document.getElementById('ajudamateria').style.display = "none";

}

function mostraModelos(){

    mudaImagemClick('modelosM');
    document.getElementById('escolhamodelos').style.display = "block";
    
}

function escondeModelos(){

    mudaImagemClick('fecharmodelo');
    document.getElementById('escolhamodelos').style.display = "none";

}

function maisde1(classe){
    if(classe=="opcoes"){
        document.getElementById('proximoajuda').style.display = "block";
        if(atualmagem==1){
        document.getElementById('textoajuda').src = "../imagens/graficodebarras/ajuda/textos/opcoes2.png";
        atualmagem=2;
        mudaImagemClick('proximoajuda');
        document.getElementById('proximoajuda').style.display = "none";
        document.getElementById('anteriorajuda').style.display = "block";
        }
        else{
            document.getElementById('textoajuda').src = "../imagens/graficodebarras/ajuda/textos/opcoes1.png";
            atualmagem=1;
            mudaImagemClick('anteriorajuda');
            document.getElementById('proximoajuda').style.display = "block";
            document.getElementById('anteriorajuda').style.display = "none";
        }
    }
    else if(classe=="criarbarra"){
        document.getElementById('proximoajuda').style.display = "block";
        if(atualmagem==1){
        document.getElementById('textoajuda').src = "../imagens/graficodebarras/ajuda/textos/criarbarra2.png";
        atualmagem=2;
        mudaImagemClick('proximoajuda');
        document.getElementById('proximoajuda').style.display = "none";
        document.getElementById('anteriorajuda').style.display = "block";
        }
        else{
            document.getElementById('textoajuda').src = "../imagens/graficodebarras/ajuda/textos/criarbarra1.png";
            atualmagem=1;
            mudaImagemClick('anteriorajuda');
            document.getElementById('proximoajuda').style.display = "block";
            document.getElementById('anteriorajuda').style.display = "none";
        }
    }
     else if(classe=="crialinha"){
        document.getElementById('proximoajuda').style.display = "block";
        if(atualmagem==1){
        document.getElementById('textoajuda').src = "../imagens/graficodebarras/ajuda/textos/crialinha2.png";
        atualmagem=2;
        mudaImagemClick('proximoajuda');
        document.getElementById('proximoajuda').style.display = "none";
        document.getElementById('anteriorajuda').style.display = "block";
        }
        else{
            document.getElementById('textoajuda').src = "../imagens/graficodebarras/ajuda/textos/crialinha1.png";
            atualmagem=1;
            mudaImagemClick('anteriorajuda');
            document.getElementById('proximoajuda').style.display = "block";
            document.getElementById('anteriorajuda').style.display = "none";
        }
    }
    else{
        document.getElementById('proximoajuda').style.display = "none";
        document.getElementById('anteriorajuda').style.display = "none";
    }
    
}

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d'); 
var canvasM = document.getElementById('canvasMaior');
var ctxM = canvasM.getContext('2d'); 
var canvas2 = document.getElementById('myCanvas2');
var ctx2 = canvas2.getContext('2d');
var lc ;
var colunas;
var linhas;
var md=false;
var nomeDoBotao = "malha";
var nClick=1;
var nomeDoBotaoMateria = "modelosM";
var nClickMateria=1;
var nomeDoBotaoAjuda = "opcoesajuda";
var nClickAjuda=1;
var nomeDoBotaoAjudaMateria = "opcoesajudamateria";
var nClickAjudaMateria=1;
var atualmagem = 1;
var fundocanvasmateria = new Image();
var usuario = window.localStorage.getItem('usuario');
fundocanvasmateria.src = "../imagens/materia/canvas/fundocanvas2.png";

ctx.fillStyle = "rgb(0,0,0)";   
ctx.fillRect(0,0,canvas.width,canvas.height);



// função usada para mudar o div visivel, mudando assim tambem a pagina atual
function pag1(){
    document.getElementById('materia').style.display = "none";
    document.getElementById('graficos').style.display = "block";
}

function pag2(){
    var passa = confirm("Já salvou seu trabalho ? Caso não queira salva-lo, click em cancelar, para poder salvar.")
    if(passa==true){
        document.getElementById('materia').style.display = "block";
        document.getElementById('graficos').style.display = "none";
        lay1();
        console.log("mudou");
    } 
}
pag1();

// recebe o numero de linhas e colunas desejados pelo usuario e divide a largura e a altura do canvas com base nesse numero, criando assim linhas e colunas proporcionais
function grid(){

//prompt usado para coletar a resposta do usuario
mudaImagemClick('malha');
lc = Number(prompt("Defina o espaçamento desejado para a malha quadriculada que será usada em colunas"));
if(lc<16){
    colunas= 400/lc;
    linhas= 400/lc;
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for (i = 0; i < canvas.width; i=i+linhas) {
    corlinha="#C0C0C0";
    ctx.strokeStyle = corlinha;
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i+1);
    ctx.stroke();
    }

    for (i = 0; i < canvas.height; i=i+colunas) {
    corlinha="#C0C0C0";
    ctx.strokeStyle = corlinha;
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i+1, canvas.height);
    ctx.stroke();
    }
}
else{
    alert("Você excedeu o número máximo(15) de colunas ou inseriu valor que não é um número, por favor digite novamente");
    grid();
}


}

// tem a mesma utilidade da primeira função grid, mas sem o prompt que permiti o usuario inserir o numero de linhas e colunas desejados, é usada para redesenhar a malha
//quando o usuario usa a borracha, por isso a ausencia do prompt

function grid2(){

for (i = 0; i < canvas.width; i=i+linhas) {
corlinha="#C0C0C0";
ctx.strokeStyle = corlinha;
ctx.lineWidth = 0.5;
ctx.beginPath();
ctx.moveTo(0, i);
ctx.lineTo(canvas.width, i+1);
ctx.stroke();
}

for (i = 0; i < canvas.width; i=i+colunas) {
corlinha="#C0C0C0";
ctx.strokeStyle = corlinha;
ctx.lineWidth = 0.5;
ctx.beginPath();
ctx.moveTo(i, 0);
ctx.lineTo(i+1, canvas.height);
ctx.stroke();
}

}

grid();

//escuadores em geral
document.getElementById('myCanvas').addEventListener("click", desenhaQuadrado);
document.getElementById('myCanvas').addEventListener("click", desenhaLinha);
document.getElementById('myCanvas').addEventListener("mousedown", mDown);
document.getElementById('myCanvas').addEventListener("mouseup", mUp);
document.getElementById('myCanvas').addEventListener("mousemove", apaga);
document.getElementById('myCanvas').addEventListener("click", criaRotulo);
document.getElementById('canvasMaior').addEventListener("click", criaLegenda);





var x1;
var y1;
var x2;
var y2;
var c=0;
var f=0;
var cor= ctx.fillStyle = "rgb(0, 0, 0)";
var cor2=ctx.fillStyle = "rgb(0, 0, 0)";
var cor3=ctx.fillStyle = "rgb(0, 0, 0)";
var corlinha="black";

//função usada para desenho do grafico de barras
function desenhaQuadrado(event){
    // a variavel f definida previamente é usada para determinar qual ferramenta está selecionada no momento, isso é preciso para garantir que apenas aquela função será executada ao clicar no canvas
    // esse if inicial é comum a alguns funções e serve como garantia de que a função a ser executada é mesmo aquela ou não
    
    if(f==1){
        
        // arredondamento da posição X do mouse, para garantir que o usuario desenhe sempre em cima da malha
        // nessa linha tambem foram feitas algumas compensações , que são necessarias para garantir que o grafico saira na posição do mouse
        // essa compensações devem ser feitas, porque o canvas se encontra afastado das margens da pagina, dessa forma sem elas o grafico seria desenhado fora da posição correta do mouse
        x1=Math.floor((event.clientX - (screen.width*0.5)+312)/colunas)*colunas;
        y1=Math.floor((event.clientY - (screen.height*0.5)+210)/linhas)*linhas;

        ctx.fillRect(x1,y1,colunas,490);
        ctx.fillStyle = cor;
        grid2();

    }
}

// função usada para desenhar graficos de linha e eixos
function desenhaLinha(event){
    if(f==2){
        // a varial c junto com if são responsaveis por garantir que o usuario tenha q clicar duas vezes para usar a linha
        // quando c for igual a 0 o usuario executou o primeiro clique e a função pegara a posição inicial da linha
        // quando for igual a 1 o usuario já está no ultimo clique e a função capturará a posição final da linha
        if(c==0){
            x1=event.clientX - (screen.width*0.5)+316;
            y1=event.clientY - (screen.height*0.5)+190;
            c=1;
        }
        else{
            x2=event.clientX - (screen.width*0.5)+316;
            y2=event.clientY - (screen.height*0.5)+190;
            ctx.strokeStyle = corlinha;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            
            c=0;
        }
    }
}

//as 3 funções abaixo são usadas para garantir um melhor funcionamento da borracha
// as 2 primeiras verificam se o mouse está pressionado setando uma variavel caso ele esteja ou não
// a ultima possui um if que caso a ferramenta borracha tenha sido selecionada e o mouse estiver pressionado uma pequena area será apagada na posição atual do mouse

function mDown(){
    md=true;
}

function mUp(){
    md=false;
}

function apaga(event){
    
 if(f==3 && md==true){
    x1=Math.floor((event.clientX - (screen.width*0.5)+312)/colunas)*colunas;
    y1=Math.floor((event.clientY - (screen.height*0.5)+210)/linhas)*linhas;
    ctx.clearRect(x1,y1,colunas,linhas);
    grid2();
 }
}

//esse conjunto de funções serve apenas para setar a variavel f de acordo com a respectiva ferramenta selecionada

function clickLinha(){
    f = 2;
    console.log("2");
    mudaImagemClick('linha');
}

function clickQuadrado(){
    console.log("1");
    f = 1;
    mudaImagemClick("barra");
}

function clickBorracha(){
    console.log("3");
    mudaImagemClick('borracha');
    f = 3;
}

function clickRotulo(){
    console.log("4");
    mudaImagemClick('rotulo');
    f = 4;
}



//essa é usada para criar legendas ou tags importantes no grafico, é usado um prompt para pegar a informação que o usuario deseja escrever e se desenha na tela no lugar clicado pelo mouse com um cor previamente selecionada por ele

function criaTitulo(event){
    x1= document.getElementById('textotitulografico').offsetLeft -178;
    y1=document.getElementById('textotitulografico').offsetTop - 77;
    ctxM.clearRect(0,0,canvasMaior.width,50); //altera o tamanho do ClearRect do TÍTULO AQUI
    var textomateria = document.getElementById("textotitulografico").value;
    ctxM.fillStyle = cor;
    ctxM.font = '32px "Impact"';
    ctxM.fillText(textomateria, x1, y1, 815);
    
    
    
}

function criaRotulo(event){
    if(f==4){
    x1=Math.floor((event.clientX - (screen.width*0.5)+312)/colunas)*colunas;
    y1=Math.floor((event.clientY - (screen.height*0.5)+220)/linhas)*linhas;
    var text = prompt("Digite seu texto");
    ctx.font = '24px "Arial"';
    ctx.fillText(text, x1, y1);
    ctx.fillStyle = cor;
    
    }
}

function criaLegenda(id){
    
    x1= document.getElementById(id).offsetLeft -175;
    y1=document.getElementById(id).offsetTop - 83;
    var text = document.getElementById(id).value;
    ctxM.font = '12px "Verdana"';
    ctxM.fillRect(x1-20,y1-7,10,10);
    ctxM.clearRect(x1-1, y1-1, x1+25, y1+20);
    ctxM.fillStyle = cor;
    ctxM.fillRect(x1-20,y1-7,10,10);
    ctxM.fillText(text, x1+5, y1);
    ctxM.fillStyle = '#000';
    
}

// esse conjunto de metodos é usado para mudar e armazenar as cores escolhidas pelo usuario
// chamando-as quando o mesmo quiser desenhar alguma coisa com a cor escolhida

function mudaAzul(){
    cor = ctx.fillStyle = "#0000FF";
    
    corlinha = '#0000FF';
    mudaImagemClick('azul');
}

function mudaVermelho(){
    cor = ctx.fillStyle = "#FF0000";
    /*cor2 = ctx2.fillStyle = "#FF0000";*/
    corlinha = '#FF0000';
    mudaImagemClick('vermelho');
}

function mudaAmarelo(){
    cor = ctx.fillStyle = "#FFFF00";
    
    corlinha = '#FFFF00';
    mudaImagemClick('amarelo');
}


function mudaVerdelimao(){
    cor = ctx.fillStyle = "#99FF00";
    
    corlinha = '#99FF00';
    mudaImagemClick('verdelimao');
}

function mudaRoxo(){
    cor = ctx.fillStyle = "#660066";
    
    corlinha = '#660066';
    mudaImagemClick('roxo');
}

function mudaLaranja(){
    cor = ctx.fillStyle = "#FF6600";
    
    corlinha = '#FF6600';
    mudaImagemClick('laranja');
}

function mudaPretop(){
    cor = ctx.fillStyle = "#000000";
    
    corlinha = '#000000';
    mudaImagemClick('preto');
}

function mudaVerde(){
    cor = ctx.fillStyle = "#33CC33";
    
    corlinha = '#33CC33';
    mudaImagemClick('verde');
}

function mudaRosa(){
    cor = ctx.fillStyle = "#FF0066";
    
    corlinha = '#FF0066';
    mudaImagemClick('pink');
}

function mudaMarrom(){
    cor = ctx.fillStyle = "#321800";
    
    corlinha = '#321800';
    mudaImagemClick('marrom');
}

function mudaCinza(){
    cor = ctx.fillStyle = "#666666";
    
    corlinha = '#666666';
    mudaImagemClick('cinza');
}

function mudaAzulmarinho(){
    cor = ctx.fillStyle = "#000066";
    
    corlinha = '#000066';
    mudaImagemClick('azulmarinho');
}

function mudaVinhoRoxoM(){
    cor3 =  "#990000";
    cor2 =  "#009933";
    document.getElementById('textotitulo').style.color = "#009933";
    document.getElementById('textoconteudo').style.color = "#990000";
    mudaImagemClickMateria('vinhoroxoM');
}

function mudaLaranjaAzulM(){
    cor2 =  "#000066";
    cor3 =  "#ff3d00";
    document.getElementById('textotitulo').style.color = "#000066";
    document.getElementById('textoconteudo').style.color = "#ff3d00";
    mudaImagemClickMateria('laranjaazulM');
}

function mudaRosaSalmonM(){
    cor2 =  "#e6003d";
    cor3 =  "#ff6633";
    document.getElementById('textotitulo').style.color = "#e6003d";
    document.getElementById('textoconteudo').style.color = "#ff6633";
    mudaImagemClickMateria('rosasalmonM');
}

function pretoPreto(){
    cor2 =  "#1a1a1a";
    cor3 =  "#1a1a1a";
    document.getElementById('textotitulo').style.color = "#1a1a1a";
    document.getElementById('textoconteudo').style.color = "#1a1a1a";
    mudaImagemClickMateria('pretoM');
}
// função semelhante a de criar textos, mas como a possibilidade de troca de font
// o usuario esolhe a font desejada em um combo box e o valor da box é usado para mudar a font
function criaTituloMateria(event){
    
    ctx2.clearRect(0,0,canvas2.width,80);
    var text = prompt("Digite seu texto");
    ctx2.font = '36px "'+document.getElementById("fonte").value+'"';
    ctx2.fillText(text, 10, 40, 815);
    ctx2.fillStyle = cor2;

    
}

// mesma coisa da função acima, mas com um if que testa qual o modelo de layout escolhido pelo usuario
function criaConteudo(event){
  if(layout==true){
    x1=550 ;
    y1=100;
    ctx2.clearRect(540,85,830,510);
    var text = prompt("Digite seu texto");
    ctx2.font = '18px "'+document.getElementById("fonteConteudo").value+'"';
    //ctx2.fillText(text, x1, y1);
    ctx2.fillStyle = cor3;
     wrapText(ctx2, text, x1, y1,  270, 25);
  }
  else{
    x1=(screen.width*0.45) - (screen.width*0.5)+90;
    y1=(screen.height*0.207) - (screen.height*0.5)+308;
    ctx2.clearRect(0,y1-14,canvas2.width,y1+16);
    var text = prompt("Digite seu texto");
    ctx2.font = '16px "'+document.getElementById("titulo").value+'"';
    //ctx2.fillText(text, x1, y1);
    //ctx2.fillStyle = cor2;
    wrapText(ctx2, text, x1, y1, x1+100, y1+200);
  }
    
}


// função usada para simular uma quebra de linha no conteudo da noticia, é necessaria pois o comando fillText, usado para inserir os texto, não tem suporte proprio para quebra de linha
function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';
    for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        }
        else {
            line = testLine;
        }
    }
    context.fillText(line, x, y);
}

// variavel e funções usadas para definir qual modelo de layout o usuario escolheu

var layout=true;

function lay1(){
    mudaImagemClickModelos('modelo1');
    fundocanvasmateria.src = "../imagens/materia/canvas/fundocanvas.png";
    layout= true;
    ctx2.clearRect(0,0,canvas2.width,canvas2.height);
    ctx2.drawImage(fundocanvasmateria, 0, 0);
    document.getElementById('textoconteudo').style.margin = "190px 0px 0px 104px";
    document.getElementById('textotitulo').style.margin = "105px 0px 0px 109px";
    document.getElementById('textoconteudo').style.border = "none";
    document.getElementById('textotitulo').style.border = "none";
    document.getElementById('escolhamodelos').style.display = "none";
    //linha de codigo responsavel por colocar o grafico feito e salvo na pagina anterior do O.A
    
}

function lay2(){
    mudaImagemClickModelos('modelo2');
    fundocanvasmateria.src = "../imagens/materia/canvas/fundocanvas2.png";
    layout= false;
    ctx2.clearRect(0,0,canvas2.width,canvas2.height);
    //linha usada para colocar o fundo de revista na imagem da noticia caso o usuario queria salva-la
    fundocanvasmateria.onload = function(){
        ctx2.drawImage(fundocanvasmateria, 0, 0);
    }
    document.getElementById('textoconteudo').style.margin = "190px 0px 0px 660px"
    document.getElementById('textoconteudo').style.border = "none"
    document.getElementById('textotitulo').style.border = "none"
    document.getElementById('textotitulo').style.margin = "105px 0px 0px 109px"
    document.getElementById('escolhamodelos').style.display = "none";
    
}

// como o nome diz cria um "aquivo" novo, apagando o canvas e redesenhando um novo grid
function novo(){
    var test = confirm("Teste ?");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(255,255,255)";   
    ctx.fillRect(0,0,canvas.width,canvas.height);
    grid();
    mudaImagemClick('novo');
}

var data;
var image;


function download() {
    data = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctxM.putImageData(data, 24,70);
    var eixo = new Image();
    eixo.src = "../imagens/graficodebarras/canvas/eixo.png";
    ctxM.drawImage(eixo,14,56);
    var legenda = new Image();
    legenda.src = "../imagens/graficodebarras/canvas/legendacanvas.png";
    ctxM.drawImage(legenda,445,61);
    criaTitulo();
    var dt = canvasM.toDataURL();
    this.href = dt; //this may not work in the future..
}
document.getElementById('download').addEventListener('click', download, false);

function download2() {
    
    data = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
    ctx2.putImageData(data, 1,1);    
    ajeitaMateria();
    ajeitaConteudo();
    var dt = canvas2.toDataURL();
    this.href = dt; //this may not work in the future..
}
document.getElementById('download2').addEventListener('click', download2, false);

function colocaGrafico(){
    data = ctxM.getImageData(0, 0, canvas.width, canvas.height);
    ctx2.putImageData(data, 15,79);
}



var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);

function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();

        img.onload = function(){
              if(layout == true){
                ctx2.drawImage(img,280,108,522,380);
              }
              else if(layout == false){
                 ctx2.drawImage(img,20,108,522,380);
              }
        }

        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}



function ajeitaMateria(){
    x1= document.getElementById('textotitulo').offsetLeft - 90;
    y1=document.getElementById('textotitulo').offsetTop -55;
    ctx2.clearRect(x1+5,y1-15,638,32);
    ctx2.fillStyle="white"; 
	ctx2.fillRect(x1+5,y1-15,638,32); 
    var textomateria = document.getElementById("textotitulo").value;
    ctx2.fillStyle = cor2;
    ctx2.font = '32px "'+document.getElementById("fonte").value+'"';
    ctx2.fillText(textomateria, x1+5, y1+10, 815);
    
}

function ajeitaConteudo(){
    x1= document.getElementById("textoconteudo").offsetLeft -85;
    y1=document.getElementById("textoconteudo").offsetTop - 60;
    ctx2.clearRect(x1+5,y1-10,220,350);
    ctx2.fillStyle="white"; 
    ctx2.fillRect(x1+5,y1-10,220,350); 
    var textomateria = document.getElementById("textoconteudo").value;
    ctx2.fillStyle = cor3;
    ctx2.font = '12px "'+document.getElementById("fonteConteudo").value+'"';
    wrapText(ctx2, textomateria, x1+5, y1+5,  x1+220, y1+25);
    
    
}

function novoMateria(){
    var test = confirm("Ao Recomeçar perdera alguns de seus dados, deseja realmente um projeto novo ?");
    if(test === true){
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ajeitaMateria();
    ajeitaConteudo();
    //mudaImagemClick('novo');
    }
    
}

trocaAjuda();
function trocaAjuda(){
    if(usuario == "hiperion"){
        document.getElementById("ajudahiperion").style.display = "block";
        document.getElementById("ajudakalick").style.display = "none";
        document.getElementById("ajudaomega").style.display = "none";
        document.getElementById("ajudahiperionM").style.display = "block";
        document.getElementById("ajudakalickM").style.display = "none";
        document.getElementById("ajudaomegaM").style.display = "none";
        document.getElementById('ajudagraficos').setAttribute('class', 'fundoHiperion');
        document.getElementById('ajudamateria').setAttribute('class', 'fundoHiperion');
    }
    else if(usuario == "omega"){
        document.getElementById("ajudahiperion").style.display = "none";
        document.getElementById("ajudakalick").style.display = "none";
        document.getElementById("ajudaomega").style.display = "block";
        document.getElementById("ajudahiperionM").style.display = "none";
        document.getElementById("ajudakalickM").style.display = "none";
        document.getElementById("ajudaomegaM").style.display = "block";
        document.getElementById('ajudagraficos').setAttribute('class', 'fundoOmega');
        document.getElementById('ajudamateria').setAttribute('class', 'fundoOmega');
    }
    else{
        document.getElementById("ajudahiperion").style.display = "none";
        document.getElementById("ajudakalick").style.display = "block";
        document.getElementById("ajudaomega").style.display = "none";
        document.getElementById("ajudahiperionM").style.display = "none";
        document.getElementById("ajudakalickM").style.display = "block";
        document.getElementById("ajudaomegaM").style.display = "none";
        document.getElementById('ajudagraficos').setAttribute('class', 'fundoKalick');
        document.getElementById('ajudamateria').setAttribute('class', 'fundoKalick');
    }
}

function voltaPaginaCorreta(event){
    var confirmado = confirm('Ao sair perderá seu progresso, deseja realmente sair ?')
    if ((confirmado==true) && (usuario == "hiperion") ) {
        window.location="tipodegrafico.html";
    }else if ((confirmado==true) && (usuario == "omega")) {
        window.location="tipodegraficoomega.html";
    }else if ((confirmado==true) && (usuario == "kalick")) {
        window.location="tipodegraficokalick.html";
    };
}

function limitaTextarea(valor, id, name) {
    if(name=="legenda"){
        quantidade = 16;
        total = valor.length;
    }else if(name=="conteudo"){
        quantidade = 700;
        total = valor.length;
    }else if(name=="titulo"){
        quantidade = 38;
        total = valor.length;
    }
   

   if(total <= quantidade) {

      resto = quantidade- total;
      
   } else {

      document.getElementById(id).value = valor.substr(0, quantidade);
      alert('Ops! Você excedeu o limite do texto.');
   }

}