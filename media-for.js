//Para este desafio temos que calcular a média entre as seguintes notas, lembrando que são notas de alunos da nossa escola usando o for. O for foi a estrutura que estudamos anteriormente, a estrutura que usamos para percorrer uma lista, um array de números de 100 a 600.

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i=0; i<notas.length; i++){
    somaDasNotas += notas[i]; 
};

let media = somaDasNotas/notas.length;

console.log(media);