// Desafio:
// Um professor que deveria ter lançado quatro notas, de quatro bimestres de um aluno, por engano lançou só três. Então como fazemos para lançar a quarta nota em uma lista de notas? Abaixo a resolução.


const notas = [10, 6, 8];
notas.push(7);
console.log(notas);

let media = (notas[0] + notas [1] + notas [2] + notas [3])/notas.length;

console.log(media);