// Função para adicionar símbolo no display
function appendSymbol(symbol) {
    var display = document.getElementById('display');
    display.value += symbol;
}

// Função para limpar o display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Função para remover o último caractere do display
function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Função para realizar o cálculo
function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erro';
    }
}

















// Estrutura de repetição

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// let i = 0;
// while (i < 10) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }

