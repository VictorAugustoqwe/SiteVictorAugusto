function selecionarBotao(botao){
    mudarEstilo(botao);
    if(botao == 1){
        tabelaviolaodiv.classList.remove("hide");
        tabelaguitarradiv.classList.add("hide");
        tabelapianodiv.classList.add("hide");
    }
    else if(botao == 2){
        tabelaviolaodiv.classList.add("hide");
        tabelaguitarradiv.classList.remove("hide");
        tabelapianodiv.classList.add("hide");
    }
    else if(botao == 3){
        tabelaviolaodiv.classList.add("hide");
        tabelaguitarradiv.classList.add("hide");
        tabelapianodiv.classList.remove("hide");
    }
    else{
        console.log("temos um problema");
    }
}

function mudarEstilo(botao){
    var botaoatual = document.getElementById("bot-" + botao);
    var violao = document.getElementById("bot-1");
    var guitarra = document.getElementById("bot-2");
    var piano = document.getElementById("bot-3");
    violao.classList.remove("btn-selected");
    guitarra.classList.remove("btn-selected");
    piano.classList.remove("btn-selected");
    botaoatual.classList.add("btn-selected");
}
