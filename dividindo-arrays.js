//Nosso desafio para este código chama-se sala dividida, lembrando que estamos trabalhando com o contexto de uma escola, então temos notas, tirar as médias de notas entre alunos, listas de alunos, etc. Temos uma lista com vários alunos, a sala ficou muito grande, vai ser dividido em turma A e turma B, e nós vamos dividir essa quantidade de alunos em duas turmas iguais.

const nomes = [ 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjore', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela','Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = nomes.slice(0,nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);
console.log (`Alunos da sala 1 ${sala1}`)
console.log (`Alunos da sala 2 ${sala2}`)