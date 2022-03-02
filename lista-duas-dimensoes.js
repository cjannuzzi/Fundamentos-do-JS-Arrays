//continuando então a manipulas as nossas listas de alunos e alunas, vamos ver qual o desafio que nos aguarda. Desta vez o desafio é criar uma lista com alguns alunos e alunas. João, Juliana, Caio e Ana, e depois criar uma outra lista com as médias, as seguintes médias, e temos que criar uma lista com duas dimensões, os nomes e as médias.

const alunos = ['João', 'Juliana', 'Caio','Ana'];
const mediasDosAlunos = [10, 7, 9, 6];
// [0] é a lista de alunos ['João', 'Juliana', 'Caio','Ana'] e [1] é a média [10, 7, 9, 6]
let listaDeNotasDeAlunos = [alunos, mediasDosAlunos];
console.log(`${listaDeNotasDeAlunos[0][0]}, sua média é ${listaDeNotasDeAlunos[1][0]}`);