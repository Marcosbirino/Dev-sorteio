function generateNumber() {
    // Seleciona os inputs para capturar os valores e limpá-los depois
    const inputMin = document.querySelector('.min');
    const inputMax = document.querySelector('.max');

    const min = Math.ceil(inputMin.value);
    const max = Math.floor(inputMax.value);
    
    const errorOutput = document.getElementById('user-error');
    const numberOutput = document.getElementById('number-output');

    // Seleciona o botão de sorteio
    const button = document.getElementById('btn');

    if (min >= max) {
        numberOutput.innerText = ''; 
        errorOutput.innerText = 'Digite um valor MENOR e depois um valor MAIOR!';
    } else {
        errorOutput.innerText = '';

        // DESATIVA O BOTÃO para evitar múltiplos cliques
        button.disabled = true;

        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        numberOutput.innerHTML = 'Sorteando<span class="pontos"></span>';

        const tempoSegundos = 4;

        setTimeout(() => {
            // 1. Mostra o resultado na tela
            numberOutput.innerText = result;
            
            // 2. LIMPA OS INPUTS DA TELA APÓS O SORTEIO
            inputMin.value = '';
            inputMax.value = '';

            // REATIVE O BOTÃO após revelar o resultado
            button.disabled = false;
            
            // 3. Devolve o foco do teclado para o primeiro input automaticamente
            inputMin.focus();

            console.log(result);
        }, tempoSegundos * 1000);
    }
}
