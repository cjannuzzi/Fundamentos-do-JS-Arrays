//Continuando então trabalhando com arrays, cada vez estamos incrementando mais nosso código, vamos ver qual o desafio deste vídeo. Estávamos trabalhando com médias de notas. Fizemos a média com for e agora temos que fazer uma tal de média com foreach, que é o nome do nosso desafio. Vamos calcular a média entre as seguintes notas usando esse foreach.

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//forEach é um callback...é uma função q chama outra função.
notas.forEach (nota =>{
    somaDasNotas += nota
});

let media = somaDasNotas/notas.length;

console.log(media);