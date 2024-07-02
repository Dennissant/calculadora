var um = parseFloat(prompt("D|igiti o primeiro número: "));
var dois = parseFloat(prompt("D|igiti o segundo número: "));
var operacao = prompt("Digite a operação desejada: ")

if (operacao == "+") {
    var resultado = um + dois;
}
else if (operacao == "-"){
    var resultado = um - dois;
}
else if (operacao == "*" || operacao == "x" || operacao == "X"){
    var resultado = um * dois;
}
else if (operacao == "/"){
    var resultado = um / dois;

}else {
    var resultado = "operação invalida";
}
alert("O resultado é "+ resultado);

















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

