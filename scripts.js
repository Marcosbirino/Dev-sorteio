function generateNumber(){
    const min = Math.ceil(document.querySelector('.min').value)
    const max = Math.floor(document.querySelector('.max').value)
    

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    // document.getElementById('number-output').innerText = result;
    // console.log(result)

    // 1. Avisa que está sorteando e injeta os pontinhos animados via HTML/CSS rápido
    const output = document.getElementById('number-output');
    output.innerHTML = 'Sorteando<span class="pontos"></span>';

    // 2. Define o tempo de espera (ex: 2000 milissegundos = 2 segundos)
    const tempoSegundos = 2; 
    
    setTimeout(() => {
        // 3. Mostra o resultado na tela após o tempo acabar
        document.getElementById('number-output').innerText = result;
        console.log(result);
    }, tempoSegundos * 1000);
}