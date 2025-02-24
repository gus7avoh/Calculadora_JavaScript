var clear  = document.getElementById('Clear');
var clearAll = document.getElementById('ClearEntry');
var openParenthesis = document.getElementById('OpenParenthesis');
var closeParenthesis = document.getElementById('CloseParenthesis');
var seven = document.getElementById('Seven');
var eight = document.getElementById('Eight');
var nine = document.getElementById('Nine');
var divide = document.getElementById('Divide');
var four = document.getElementById('Four');
var five = document.getElementById('Five');
var six = document.getElementById('Six');
var multiply = document.getElementById('Multiply');
var one = document.getElementById('One');
var two = document.getElementById('Two');
var three = document.getElementById('Three');
var subtract = document.getElementById('Subtract');
var equals = document.getElementById('Equals');
var decimal = document.getElementById('Decimal');
var zero = document.getElementById('Zero');
var add = document.getElementById('Add');
var visorCampo = document.getElementById('Visor');

let pilha = [];

function adicionarAoVisor(valor) {
    visorCampo.value += valor; 
}
function limparVisorCompleto() {
    visorCampo.value = '';
    pilha = [];
}

function limparElemento() {
    //todo elemento do visor deve ser adicionado a um array e esse array vai ser a minha pilha.
    pilha.pop();
    visorCampo.value = '';
    pilha.forEach(element => {
        visorCampo.value += element;
    });   
} 

openParenthesis.addEventListener('click', () => {
    adicionarAoVisor('(');    
    pilha.push('(');               
});

closeParenthesis.addEventListener('click', () => {
    adicionarAoVisor(')');
    pilha.push(')');
});
seven.addEventListener('click', () => {
    adicionarAoVisor('7');
    pilha.push('7');
});

eight.addEventListener('click',() =>{ 
    adicionarAoVisor('8');
    pilha.push('8');
});
nine.addEventListener('click',() => {
    adicionarAoVisor('9');
    pilha.push('9');
});
divide.addEventListener('click',() =>{ 
    adicionarAoVisor(' / ');
    pilha.push(' / ');
});
four.addEventListener('click',() => {
    adicionarAoVisor('4');
    pilha.push('4');
});
five.addEventListener('click',() =>{ 
    adicionarAoVisor('5');
    pilha.push('5');
});
six.addEventListener('click',() => {
    adicionarAoVisor('6');
    pilha.push('6');
});
multiply.addEventListener('click',() => {
    adicionarAoVisor(' * ');
    pilha.push(' * ');
});
one.addEventListener('click',() => {
    adicionarAoVisor('1');
    pilha.push('1');
});
two.addEventListener('click',() => {
    adicionarAoVisor('2');
    pilha.push('2');
});
three.addEventListener('click',() => {
    adicionarAoVisor('3');
    pilha.push('3');
});
subtract.addEventListener('click',() => {
    adicionarAoVisor(' - ');
    pilha.push(' - ');
});
equals.addEventListener('click',() => {
    adicionarAoVisor(' = ');
    pilha.push(' = ');
});
decimal.addEventListener('click',() => {
    adicionarAoVisor(',');
    pilha.push(',');
});
zero.addEventListener('click',() => {
    adicionarAoVisor('0');
    pilha.push('0');
});
add.addEventListener('click',() => {
    adicionarAoVisor(' + ');
    pilha.push(' + ');
});

clearAll.addEventListener('click', () => limparVisorCompleto());

clear.addEventListener('click', () => limparElemento()); //posso criar um pilha para limpar o visor
