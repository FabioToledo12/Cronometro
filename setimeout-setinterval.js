/*
    set timeout -> executa uma vez
    set interval -> executa infinitas vezes
        clearinterval -> vai pausar o setinterval
*/
let number = 0
let cron
//mapeamento campos
let h2 = document.querySelector("h2")

function start(){
    cron = setInterval(function(){
        number++
        h2.innerHTML = number
    }, 1000)
}

function stop(){
    clearInterval(cron)
}

function zerar(){
    stop()
    cron = 0
    number = 0
    h2.innerHTML = 0
}

/*
setInterval(() => {
   //executa o que estiver aqui 
   console.log(number++)  
}, 100);*/

/*
setTimeout(() => {
    //executa o que estiver aqui 
    console.log(number++)  
 }, 100);*/

/*
setTimeout (function() {
    //executa o que estiver aqui 
    alert("Executei")
    
 }, 3000); //1000 milisegundos é igual a 1 segundo*/

/*function myFunction (){

}

 setTimeout(myFunction, timeout);*/