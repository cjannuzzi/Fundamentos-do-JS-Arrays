//Vamos continuar a trabalhar com alterações de arrays. Vamos ver qual o desafio neste vídeo. Aqui temos uma lista de chamada com uma lista de alunos e o desafio é tirar alguns alunos que saíram dessa turma e colocar mais um aluno no lugar deles.

const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjore', 'Leo'];

// listaDeChamada.splice(1,2,'Rodrigo');
listaDeChamada.splice(2,0,'Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`)

const animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarao']

animaisDoAquario.splice(1,0,'peixeiazl1')
animaisDoAquario.splice(3,2,'peixeiazl2')

console.log(animaisDoAquario)