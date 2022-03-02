//entramos agora em um tema dos loops, laços de repetição e funções call-back, vamos continuar estudando um pouco isso e vamos ver qual o desafio desse vídeo. Um aluno recebeu um ponto extra nas suas notas, adicione esse ponto em suas notas. Temos uma array, uma lista de números, que são todas as notas que esse aluno tem, do ano, e temos que adicionar um ponto extra para cada item desse array.

const notas =[10, 9, 8, 7, 6];

const notasAtulizadas = notas.map(nota => nota==10 ? nota: ++nota); // esse operador ternário se lê assim: se a nota for igual a 10, se for verdadeiro retorna o valor da nota pq a escola nao permite somar +1 nela, caso seja falso... a gente retorna a 1+nota +1 ou ++nota (soma antes de mostrar a nota). Enfim, o .map retorna algo para a gente q no caso foi uma array atualizada.

console.log(notasAtulizadas);
