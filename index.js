var leonardo = document.getElementById("leonardo");
var samantha = document.getElementById("samantha");
var bruna = document.getElementById('bruna');
var setaDireita = document.getElementById('seta-direita');
var setaEsquerda = document.getElementById('seta-esquerda');

function moverParaDireita(){
    leonardo.style = "display: none";
    bruna.style = "display: flex";
    setaDireita.style = "display: none";
    setaEsquerda.style = "display: flex; margin-top: 55px";
}

function moverParaEsquerda(){
    bruna.style = "display: none";
    leonardo.style = "display: flex";
    setaEsquerda.style = "display: none";
    setaDireita.style = "display: flex";
}