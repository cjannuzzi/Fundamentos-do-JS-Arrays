//Continuando então a trabalhar com arrays e funções call-back, vamos ver qual o desafio deste vídeo. Dessa vez recebemos uma lista de alunos da nossa escola e temos que padronizar a forma com que os nomes estão escritos. Alguns deles foram inseridos no sistema em minúsculo, outros em maiúsculo, outros maiúsculo e minúsculo, vamos ver então como utilizamos esses métodos que estamos trabalhando para resolver isso de uma forma automatizada.

let nomes = ["ana Julio", "Caio vinicius", "BIA silva"];

const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

console.log(nomesAtualizados);