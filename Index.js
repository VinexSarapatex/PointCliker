
var clicks = 0;
var contador = 1;
var dinheiro = 0;
var texto = document.getElementById('texto').innerHTML = "dinheiro: " + dinheiro;
var button = document.getElementById('btn').innerHTML = "+" + contador;
function btn(){
    dinheiro += contador;
    texto = document.getElementById('texto').innerHTML = "dinheiro: " + dinheiro;
}

var dobracompra1 = 50;
var comprar1 = document.getElementById('compra1').innerHTML = "R$" + dobracompra1;


function compra1(){
    if(dinheiro >= dobracompra1){
        dinheiro = dinheiro - dobracompra1;
        contador = contador + 1;
        button = document.getElementById('btn').innerHTML = "+" + contador;
        texto = document.getElementById('texto').innerHTML = "dinheiro: " + dinheiro;
        dobracompra1 = dobracompra1 * 2;
        comprar1 = document.getElementById('compra1').innerHTML = "R$" + dobracompra1;
        
    }else{
        alert("Você não tem dinheiro suficiente")
    }
}

var dobracompra2 = 100;
var comprar2 = document.getElementById('compra2').innerHTML = "R$" + dobracompra2;

function compra2(){

    if(dinheiro >= dobracompra2){
        dinheiro = dinheiro - 100;
        clicks += 1;
        button = document.getElementById('btn').innerHTML = "+" + contador;
        texto = document.getElementById('texto').innerHTML = "dinheiro: " + dinheiro;
        var texto2 = document.getElementById('texto2').innerHTML = "clicks automaticos: " + clicks;
        dobracompra2 = dobracompra2 * 2;
        comprar2 = document.getElementById('compra2').innerHTML = "R$" + dobracompra2;
    }else{
        alert("Você não tem dinheiro suficiente")
    }
}

var dobracompra3 = 200;
var comprar2 = document.getElementById('compra2').innerHTML = "R$" + dobracompra2;

function compra2(){

    if(dinheiro >= dobracompra2){
        dinheiro = dinheiro - 100;
        clicks += 1;
        button = document.getElementById('btn').innerHTML = "+" + contador;
        texto = document.getElementById('texto').innerHTML = "dinheiro: " + dinheiro;
        var texto2 = document.getElementById('texto2').innerHTML = "clicks automaticos: " + clicks;
        dobracompra2 = dobracompra2 * 2;
        comprar2 = document.getElementById('compra2').innerHTML = "R$" + dobracompra2;
    }else{
        alert("Você não tem dinheiro suficiente")
    }
}


function clicksautomatico(){
    setInterval(function time(){
        dinheiro += clicks;
        texto = document.getElementById('texto').innerHTML = "dinheiro: " + dinheiro;
    }, 1000)
}

clicksautomatico()