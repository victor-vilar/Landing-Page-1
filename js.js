



function diminuirTamanhodoButaoAoClicar(){

const butoes = document.querySelectorAll('.button-screenshots');

    butoes.forEach(item =>{
        item.addEventListener('click', () => {
            item.style.fontSize = "40px";
            
        })
    })

}


diminuirTamanhodoButaoAoClicar();
