//temos que criar uma função que vai receber o nome de um aluno, procurar esse aluno em uma lista de alunos e caso o aluno esteja presente nessa lista retornar a média deste aluno, ou retornar uma mensagem se o aluno não foi encontrado na lista, ou seja, se o aluno não fizer parte daquela lista de classe, por exemplo, nós temos que dar uma mensagem de retorno dizendo que o aluno não foi localizado.

const alunos = ['João', 'Juliana', 'Caio','Ana'];
const mediasDosAlunos = [10, 7, 9, 6];
// [0] é a lista de alunos ['João', 'Juliana', 'Caio','Ana'] e [1] é a média [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){ //includes -> retorna um booleano (verdadeiro ou falso) e no caso do IF, se for verdadeiro ele avança na instrução. Pesquisou o nome Ana no array[0] e retornou um true...logo seguiu a instrução
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) // indexOf -> retorna o indice correspondente onde Ana se localiza nessa array...sendo joao 0, juliana 1, caio 2, e Ana 3...entao ele vai guardar o indice 3 na variável criada indice
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice] // retorna no array [0][indice] que siginifca q vai no alunos e até o indice 3 Ana.... "sua média é" vai no array[1][indice] array 1 sao as notas e o indice é o 3 q é respectivo a nota da ana q esta dentro da variavel indice=3
    } else{
        return "Aluno não esta cadastrado"
    }
}

console.log(exibeNomeNota("Caio"))