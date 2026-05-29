# 🎲 DevSorteio 

Um gerador de números aleatórios simples e elegante feito com HTML, CSS e JavaScript puro. O projeto conta com um efeito visual de carregamento nos pontinhos antes de revelar o número sorteado com um brilho estilo neon.

## 🚀 Funcionalidades

*   Sorteio de valores com base em um intervalo mínimo e máximo definido pelo usuário.
*   Efeito visual de "Sorteando..." animado via CSS (`steps`).
*   Atraso de 2 segundos simulados via JavaScript antes de mostrar o resultado.
*   Destaque neon para o número final sorteado.

## 📁 Estrutura do Código

O projeto é dividido em três arquivos principais:

### 1. HTML (`index.html`)
Estrutura a interface do usuário contendo os campos de entrada (`min` e `max`), o botão de ação e o contêiner que exibe o resultado final. O clique no botão dispara a função principal do sistema.

### 2. CSS (`styles.css`)
Aplica a estilização visual moderna com fundo escuro e fontes importadas. Os destaques técnicos incluem:
*   **Efeito Neon:** Aplicado no `#number-output` usando `text-shadow`.
*   **Animação dos Pontos:** A classe `.pontos::after` usa `@keyframes` e a propriedade `steps(4)` para simular os três pontinhos sendo digitados ciclicamente sem usar JavaScript para isso.

### 3. JavaScript (`scripts.js`)
Controla toda a lógica do sorteio através da função `generateNumber()`:
1.  Captura e arredonda os valores mínimos e máximos inseridos.
2.  Gera o número aleatório na memória usando as funções matemáticas `Math.random` e `Math.floor`.
3.  Modifica o HTML para exibir temporariamente o texto "Sorteando..." com a classe de animação dos pontinhos.
4.  Utiliza a função `setTimeout()` para segurar o resultado por 2 segundos (2000ms), revelando o número sorteado apenas quando o tempo acaba.

## 🛠️ Como Executar o Projeto

1. Clone ou baixe este repositório.
2. Certifique-se de que os três arquivos (`index.html`, `styles.css`, `scripts.js`) estão na mesma pasta.
3. Certifique-se de ter a imagem do logo na pasta `./assets/logo.png`.
4. Abra o arquivo `index.html` em qualquer navegador web.
