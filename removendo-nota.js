//Desafio: Anteriormente, nós adicionamos notas e nesse vamos ter que deletar uma nota. O professor acidentalmente lançou 5 notas de um aluno e nós temos que tirar a última nota que foi lançada no sistema, que foi uma nota lançada a mais.

const notas = [10, 7, 8, 5, 10];
notas.pop();
console.log(notas);

let media = (notas [0] + notas [1] + notas [2] + notas [3])/notas.length;
console.log(`A média é ${media}`);

const arrayVazia = [,,,];
console.log(arrayVazia.length);
arrayVazia.push(50);
console.log(arrayVazia);
console.log(arrayVazia.length);