function meme(){
    var aviso = document.getElementById("avisomeme");
    aviso.classList.remove("hide");
    setTimeout(function(){ fecharaviso();},7000);
}

function fecharaviso(){
    var aviso = document.getElementById("avisomeme");
    aviso.classList.add("hide");
}

range.oninput = function(){
    switch(this.value){
        case "1":
            valoratual.innerHTML = this.value + " (Você me odeia????)";
            break;
        case "2":
            valoratual.innerHTML = this.value + " (Aff, Por que não gostou?)";
            break;
        case "3":
            valoratual.innerHTML = this.value + " (Ah ok)";
            break;
        case "4":
            valoratual.innerHTML = this.value + " (Muito Obrigado :))";
            break;
        case "5":
            valoratual.innerHTML = this.value + " (Eu te amo)";
            break;
    }
}