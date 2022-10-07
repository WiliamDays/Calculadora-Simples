let screen = document.querySelector("#tela") //Aqui linkei o html da tela em uma variável 

function digito(num){
    oper = num
    screen.innerHTML += num //Aqui o digito vai aparecer na tela
}

function limpar(){
    screen.innerHTML = "" //Aqui o botão AC vai funcionar
}

function calcular(){
    if(screen){ //se a tela tiver alguma coisa
        screen.innerHTML = eval(screen.innerHTML) //Faça o eval do inner html de screen
    }
}
