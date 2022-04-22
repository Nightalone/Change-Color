function botao(acao){
    if(acao === 'vermelho'){
        document.querySelector('.caixa1').style.background = 'red';
        document.querySelector('.caixa1').style.transition = '2s';
    }else if(acao === 'azul'){
        document.querySelector('.caixa1').style.background = 'blue';
    }else if(acao === 'amarelo'){
        document.querySelector('.caixa1').style.background = 'yellow';
    }else{
        document.querySelector('.caixa1').style.background = '#00FF7F';
    }
}