//vamos continuar a trabalhar com nossas listas de alunos e fazendo alterações, os alunos vão, os alunos vêm, vamos ver qual o desafio desta aula, que é juntar duas salas. Vai ter uma palestra sobre padrões de projeto para os alunos da sala de Java script e de Python. Vamos juntar ambas as salas em uma única lista para ir conferir a presença dessas duas turmas.

const salaDePython = ['Melissa', 'Elena', 'Rodrigo'];
const salaDeJavaScript = ['Ju', 'Leo', 'Raquel'];

const salasUnificadas = salaDePython.concat(salaDeJavaScript);
console.log(salasUnificadas);