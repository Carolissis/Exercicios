var barco = [];
var vidas;
var pontos;
var pode;
var count;
var vidamax = 5;

function aleat(min, max){
    var aleat = Math.floor(Math.random() * (max - min + 1)) + min;
    return aleat
}

function newgame(){
    for(var i = 0; i < 40; i ++){
        barco.push(0);
    }
}

sorteados = []

do {
    var pos = aleat(0, 39);
    if (sorteados.includes(pos)){
        continue;
    } else {
        barco[pos] = 1;
        sorteados.push(pos);
    }
} while (sorteados.length < 8)

vidas = vidamax;
pontos = 0;
pode = true;

function clicar(id) {
    var peca = window.document.getElementById(id);
    if(pode == true){
        verifStatus(id)
    }
}

function verifStatus(x){
    var peca = window.document.getElementById(x)
    var pontoht = window.document.getElementById('pontos')
    var vidaht = window.document.getElementById('vidas')

    if (barco[x-1]==0){
        peca.style.backgroundImage = 'url (img/agua.png)';
        
    }
}