//Depois que já calculamos média dos alunos, usando inclusive mais de um método, vamos mostrar quem está reprovado entre uma lista de alunos. Então vamos filtrar por nota. Vamos ter aqui uma lista com alguns alunos e outra lista e corresponde às médias de cada um deles.

const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter((_, indice)=> notas[indice] <5);

console.log(`reprovados: ${reprovados}`);