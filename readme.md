# 🎲 DevSorteio 

Um gerador de números aleatórios simples, elegante e inteligente feito com HTML, CSS e JavaScript puro. O projeto conta com validação de erros para os intervalos numéricos e um efeito visual de carregamento nos pontinhos antes de revelar o resultado com um brilho estilo neon.

## 🚀 Funcionalidades

*   **Sorteio Inteligente:** Gera valores aleatórios com base em um intervalo mínimo e máximo definido pelo usuário.
*   **Validação de Entrada:** Impede o sorteio caso o usuário digite um valor mínimo maior ou igual ao máximo, exibindo um aviso vermelho na tela.
*   **Limpeza de Mensagens:** Limpa automaticamente os textos de erro ou resultados anteriores ao iniciar uma nova ação correta.
*   **Animação de Carregamento:** Efeito visual de "Sorteando..." animado nativamente via CSS (`steps`).
*   **Atraso de 4 Segundos:** Tempo simulado via JavaScript para gerar suspense antes de mostrar o resultado.
*   **Limpeza Automática:** Apaga os números digitados nos campos (`min` e `max`) assim que o resultado é revelado.
*   **Foco Automático:** Devolve o cursor do teclado para o campo inicial automaticamente após o término do sorteio para agilizar o próximo uso.
*   **Destaque Neon:** Estilização com brilho neon verde para o número final sorteado.

## 📁 Estrutura do Código

O projeto é dividido em três arquivos principais:

### 1. HTML (`index.html`)
Estrutura a interface do usuário contendo os campos de entrada, o botão de ação e as tags específicas para exibir o resultado final (`#number-output`) e a mensagem de erro (`#user-error`).

### 2. CSS (`styles.css`)
Aplica a estilização visual moderna com fundo escuro e fontes importadas. Os destaques técnicos incluem:
*   **Efeito Neon:** Aplicado no `#number-output` usando `text-shadow`.
*   **Animação dos Pontos:** A classe `.pontos::after` usa `@keyframes` e a propriedade `steps(4)` para simular os três pontinhos sendo digitados ciclicamente sem usar JavaScript para isso.

### 3. JavaScript (`scripts.js`)
Controla toda a lógica do sorteio através da função `generateNumber()`:
1.  Captura as caixas de texto e valida se o valor mínimo é menor que o máximo.
2.  Se houver erro, exibe a mensagem de aviso e limpa o resultado anterior.
3.  Se estiver correto, apaga mensagens de erro antigas e exibe temporariamente o texto "Sorteando..." com a animação dos pontinhos.
4.  Utiliza a função `setTimeout()` para segurar o fluxo por 4 segundos.
5.  Ao final do tempo, revela o número sorteado com `Math.random()`, limpa os valores das caixas de texto e coloca o cursor do teclado de volta no input inicial com `.focus()`.

## 🛠️ Como Executar o Projeto

1. Clone ou baixe este repositório.
2. Certifique-se de que os três arquivos (`index.html`, `styles.css`, `scripts.js`) estão na mesma pasta.
3. Certifique-se de ter a imagem do logo na pasta `./assets/logo.png`.
4. Abra o arquivo `index.html` em qualquer navegador web.
