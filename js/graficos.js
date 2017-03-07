var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var canvas2 = document.getElementById('myCanvas2');
var ctx2 = canvas2.getContext('2d');
var lc ;
var colunas;
var linhas;
var md=false;
var zuera = new Image();
zuera.src = "layouts/canvas.png";

ctx.fillStyle = "rgb(255,255,255)";   
ctx.fillRect(0,0,canvas.width,canvas.height);

// função usada para mudar o div visivel, mudando assim tambem a pagina atual
function pag1(){
    document.getElementById('pagina2').style.display = "none";
    document.getElementById('pagina1').style.display = "inline";
}

function pag2(){
    document.getElementById('pagina2').style.display = "inline";
    document.getElementById('pagina1').style.display = "none";
    console.log("mudou");
}


// recebe o numero de linhas e colunas desejados pelo usuario e divide a largura e a altura do canvas com base nesse numero, criando assim linhas e colunas proporcionais
function grid(){

//prompt usado para coletar a resposta do usuario

lc = Number(prompt("Defina o espaçamento desejado em colunas"));
colunas= 400/lc;
linhas= 400/lc;
ctx.clearRect(0,0,canvas.width,canvas.height);

for (i = 0; i < canvas.width; i=i+linhas) {
corlinha="black";
ctx.strokeStyle = corlinha;
ctx.lineWidth = 0.5;
ctx.beginPath();
ctx.moveTo(0, i);
ctx.lineTo(canvas.width, i+1);
ctx.stroke();
}

for (i = 0; i < canvas.width; i=i+colunas) {
corlinha="black";
ctx.strokeStyle = corlinha;
ctx.lineWidth = 0.5;
ctx.beginPath();
ctx.moveTo(i, 0);
ctx.lineTo(i+1, canvas.height);
ctx.stroke();
}

}

// tem a mesma utilidade da primeira função grid, mas sem o prompt que permiti o usuario inserir o numero de linhas e colunas desejados, é usada para redesenhar a malha
//quando o usuario usa a borracha, por isso a ausencia do prompt

function grid2(){

for (i = 0; i < canvas.width; i=i+linhas) {
corlinha="black";
ctx.strokeStyle = corlinha;
ctx.lineWidth = 0.5;
ctx.beginPath();
ctx.moveTo(0, i);
ctx.lineTo(canvas.width, i+1);
ctx.stroke();
}

for (i = 0; i < canvas.width; i=i+colunas) {
corlinha="black";
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
document.getElementById('myCanvas').addEventListener("click", criaTexto);





var x1;
var y1;
var x2;
var y2;
var c=0;
var f=0;
var cor=ctx.fillStyle = "rgb(0, 0, 0)";
var corlinha="black";

//função usada para desenho do grafico de barras
function desenhaQuadrado(event){
    // a variavel f definida previamente é usada para determinar qual ferramenta está selecionada no momento, isso é preciso para garantir que apenas aquela função será executada ao clicar no canvas
    // esse if inicial é comum a alguns funções e serve como garantia de que a função a ser executada é mesmo aquela ou não
    if(f==1){
        // arredondamento da posição X do mouse, para garantir que o usuario desenhe sempre em cima da malha
        // nessa linha tambem foram feitas algumas compensações , que são necessarias para garantir que o grafico saira na posição do mouse
        // essa compensações devem ser feitas, porque o canvas se encontra afastado das margens da pagina, dessa forma sem elas o grafico seria desenhado fora da posição correta do mouse
        x1=Math.floor((event.clientX - (screen.width*0.5)+162)/colunas)*colunas;
        y1=event.clientY - (screen.height*0.114);

        ctx.fillRect(x1,y1,colunas,490);
        ctx.fillStyle = cor;
    }
}

// função usada para desenhar graficos de linha e eixos
function desenhaLinha(event){
    if(f==2){
        // a varial c junto com if são responsaveis por garantir que o usuario tenha q clicar duas vezes para usar a linha
        // quando c for igual a 0 o usuario executou o primeiro clique e a função pegara a posição inicial da linha
        // quando for igual a 1 o usuario já está no ultimo clique e a função capturará a posição final da linha
        if(c==0){
            x1=event.clientX - (screen.width*0.5)+162;
            y1=event.clientY-(screen.height*0.114);
            c=1;
        }
        else{
            x2=event.clientX - (screen.width*0.5)+162;
            y2=event.clientY-(screen.height*0.114);
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
    x1=event.clientX - (screen.width*0.5)+162;
    y1=event.clientY-(screen.height*0.114);
    ctx.clearRect(x1,y1,colunas,linhas);
    grid2();
 }
}

//esse conjunto de funções serve apenas para setar a variavel f de acordo com a respectiva ferramenta selecionada

function clickLinha(){
    f = 2;
    console.log("2");
}

function clickQuadrado(){
    console.log("1");
    f = 1;
}

function clickBorracha(){
    console.log("3");
    f = 3;
}

function clickTexto(){
    console.log("4");
    f = 4;
}

//essa é usada para criar legendas ou tags importantes no grafico, é usado um prompt para pegar a informação que o usuario deseja escrever e se desenha na tela no lugar clicado pelo mouse com um cor previamente selecionada por ele

function criaTexto(event){
    if(f==4){
    x1=event.clientX -  (screen.width*0.5)+162;
    y1=event.clientY-(screen.height*0.5)+308;
    var text = prompt("Digite seu texto");
    ctx.font = '24px "Tahoma"';
    ctx.fillText(text, x1, y1);
    ctx.fillStyle = cor;
    
    }
}

// esse conjunto de metodos é usado para mudar e armazenar as cores escolhidas pelo usuario
// chamando-as quando o mesmo quiser desenhar alguma coisa com a cor escolhida

function azul(){
    cor = ctx.fillStyle = "#0000FF";
    cor2 = ctx2.fillStyle = "#0000FF";
    corlinha = '#0000FF';
}

function vermelho(){
    cor = ctx.fillStyle = "#FF0000";
    cor2 = ctx2.fillStyle = "#FF0000";
    corlinha = '#FF0000';
}

function amarelo(){
    cor = ctx.fillStyle = "#FFFF00";
    cor2 = ctx2.fillStyle = "#FFFF00";
    corlinha = '#FFFF00';
}

function vinho(){
    cor = ctx.fillStyle = "#AF002D";
    cor2 = ctx2.fillStyle = "#AF002D";
    corlinha = '#AF002D';
}

function lilas(){
    cor = ctx.fillStyle = "#CC33FF";
    cor2 = ctx2.fillStyle = "#CC33FF";
    corlinha = '#CC33FF';
}

function verdelimao(){
    cor = ctx.fillStyle = "#99FF00";
    cor2 = ctx2.fillStyle = "#99FF00";
    corlinha = '#99FF00';
}

function roxo(){
    cor = ctx.fillStyle = "#660066";
    cor2 = ctx2.fillStyle = "#660066";
    corlinha = '#660066';
}

function azulesverdeado(){
    cor = ctx.fillStyle = "#33CC99";
    cor2 = ctx2.fillStyle = "#33CC99";
    corlinha = '#33CC99';
}

function laranja(){
    cor = ctx.fillStyle = "#FF6600";
    cor2 = ctx2.fillStyle = "#FF6600";
    corlinha = '#FF6600';
}

function laranjaescuro(){
    cor = ctx.fillStyle = "#FF7C29";
    cor2 = ctx2.fillStyle = "#FF7C29";
    corlinha = '#FF7C29';
}

function amareloescuro(){
    cor = ctx.fillStyle = "#FFCC00";
    cor2 = ctx2.fillStyle = "#FFCC00";
    corlinha = '#FFCC00';
}

function preto50(){
    cor = ctx.fillStyle = "#808080";
    corlinha = '#808080';
}

function preto80(){
    cor = ctx.fillStyle = "#333333";
    corlinha = '#333333';
}

function pretop(){
    cor = ctx.fillStyle = "#000000";
    cor2 = ctx2.fillStyle = "#000000";
    corlinha = '#000000';
}

function verde(){
    cor = ctx.fillStyle = "#33CC33";
    cor2 = ctx2.fillStyle = "#33CC33";
    corlinha = '#33CC33';
}

function verdeoliva(){
    cor = ctx.fillStyle = "#669933";
    cor2 = ctx2.fillStyle = "#669933";
    corlinha = '#669933';
}

function goiaba(){
    cor = ctx.fillStyle = "#CC3366";
    cor2 = ctx2.fillStyle = "#CC3366";
    corlinha = '#CC3366';
}

function marrom(){
    cor = ctx.fillStyle = "#663300";
    cor2 = ctx2.fillStyle = "#663300";
    corlinha = '#663300';
}

function rosa(){
    cor = ctx.fillStyle = "#FF0066";
    cor2 = ctx2.fillStyle = "#FF0066";
    corlinha = '#FF0066';
}

// função semelhante a de criar textos, mas como a possibilidade de troca de font
// o usuario esolhe a font desejada em um combo box e o valor da box é usado para mudar a font
function criaTitulo(event){
    x1=(screen.width*0.467) - (screen.width*0.5)+90;
    y1=(screen.height*0.162) - (screen.height*0.5)+308;
    ctx2.clearRect(0,0,canvas2.width,y1+24);
    var text = prompt("Digite seu texto");
    ctx2.font = '24px "'+document.getElementById("titulo").value+'"';
    ctx2.fillText(text, x1, y1, 450);
    ctx2.fillStyle = cor2;
    
}

// mesma coisa da função acima, mas com um if que testa qual o modelo de layout escolhido pelo usuario
function criaConteudo(event){
  if(layout==false){
    x1=(screen.width*0.45) - (screen.width*0.5)+90;
    y1=(screen.height*0.78) - (screen.height*0.5)+308;
    ctx2.clearRect(0,y1-14,canvas2.width,y1+16);
    var text = prompt("Digite seu texto");
    ctx2.font = '16px "'+document.getElementById("titulo").value+'"';
    //ctx2.fillText(text, x1, y1);
    //ctx2.fillStyle = cor2;
     wrapText(ctx2, text, x1, y1, 400, 25);
  }
  else{
    x1=(screen.width*0.45) - (screen.width*0.5)+90;
    y1=(screen.height*0.207) - (screen.height*0.5)+308;
    ctx2.clearRect(0,y1-14,canvas2.width,y1+16);
    var text = prompt("Digite seu texto");
    ctx2.font = '16px "'+document.getElementById("titulo").value+'"';
    //ctx2.fillText(text, x1, y1);
    //ctx2.fillStyle = cor2;
    wrapText(ctx2, text, x1, y1, 400, 25);
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
    layout= true;
    ctx2.clearRect(0,0,canvas2.width,canvas2.height);
    ctx2.drawImage(zuera, 0, 0);
    //linha de codigo responsavel por colocar o grafico feito e salvo na pagina anterior do O.A
    ctx2.putImageData(data, 0,200);
}

function lay2(){
    layout= false;
    ctx2.clearRect(0,0,canvas2.width,canvas2.height);
    //linha usada para colocar o fundo de revista na imagem da noticia caso o usuario queria salva-la
    ctx2.drawImage(zuera, 0, 0);
    ctx2.putImageData(data, 0,100);
}

// como o nome diz cria um "aquivo" novo, apagando o canvas e redesenhando um novo grid
function novo(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(255,255,255)";   
    ctx.fillRect(0,0,canvas.width,canvas.height);
    grid();
    console.log("apagou");
}

var data;
var image;

//funções responsaveis por salvar imagens a partir do que foi criado no canvas pelo usuario
function salvar(){
  //salva o canvas em uma string de base64
  data = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //converte essa base em um link contendo uma imagem em png   
  image = canvas.toDataURL("image/png");
  ctx.clearRect (0,0,canvas.width,canvas.height);  
  //retorna o que ja foi feito pelo usuario para o canvas
  ctx.putImageData(data, 0,0);

}

function salvar2(){  
  data = ctx2.getImageData(0, 0, canvas2.width, canvas2.height); 
  image = canvas2.toDataURL("image/jpeg");
  var dt = canvas2.toDataURL();
  this.href = dt;
  //exibi em uma janela separada o link contendo a imagem, essa linha é usada apenas na segunda função para não causar uma quebra de sequencia na criação da noticia levando o usario para uma nova janela que não interfere no processo
  /*window.location.href = image; 
  ctx.clearRect (0,0,canvas2.width,canvas2.height);  
  ctx.putImageData(data, 0,0);  */
}

function download() {
    var dt = canvas2.toDataURL();
    this.href = dt; //this may not work in the future..
}
document.getElementById('download').addEventListener('click', download, false);