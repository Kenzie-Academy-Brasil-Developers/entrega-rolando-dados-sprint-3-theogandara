function getRandom() {
    return Math.floor(Math.random() * 6 + 1)
}


function somando(){
    
    let somaDosDados = 0 
    
    for(let i = 0; i < 2 ;i++){
        
        somaDosDados += (getRandom())
    }
    return somaDosDados
}


let count = [0,0,0,0,0,0,0,0,0,0,0,0,0]

for(let j = 0; j < 1000 ; j++){
    
    doisDados = somando()
    
    count[doisDados] = count[doisDados] + 1;

}

console.log(count)


for ( let c = 2; c < count.length; c++ ){

    
    const divSelecionada = document.getElementById('barras')

    const barra = document.createElement('div')
    
    barra.innerText =  c;

    divSelecionada.appendChild(barra)

    barra.style.width = `${count[c]}px`;

    barra.style.backgroundColor = `#ee7441`;

    barra.style.color = `#00008b`;

    barra.style.height = `40px`;

    barra.style.margin = `10px auto`;

    barra.style.textAlign = `center`;
}
