const salaJS = [7, 8, 8, 7 , 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual)=> atual + acum,0)
    return somaDasNotas/notasDaSala.length
}
console.log(`Média da sala de JavaScript ${mediaSala(salaJS)}`);
console.log(`Média da sala de JavaScript ${mediaSala(salaJava)}`);
console.log(`Média da sala de JavaScript ${mediaSala(salaPython)}`);

const notas =[ 10, 6.5,8,7];
const media = notas.reduce((acum,atual)=> atual + acum,0)/ notas.length; // reduce soma tds os valores do array e passando mais + parametro como acum e atual..ele acumula o valor e joga pro atual até somar tds os valores dentro da array
//Vou puxar meu acumulador e meu valor atual. Só para deixar claro que o acumulador, esse nome que estou dando de acum e atual são nomes de parâmetros, então você pode dar o nome que você quiser, é o nome que eu geralmente utilizo, mas vocês podem ficar à vontade para trocar o nome desses parâmetros.
//inclusive em alguns exemplos você pode achar até mais curto, como ab, por exemplo, mas essa foi muito bem lembrado, porque nós damos os nomes que quisermos, então às vezes você vê os exemplos, é muito comum em documentação você ver o exemplo como ab, mas acum e atual é bem comum também de usar.
//Aqui no caso também é só uma soma. Então atual mais acumulado, e aí também queremos começar com o valor 0. No caso aqui para ficar até mais curta nossa linha, não precisar quebrar em mais linhas, vou fazer a divisão também.
//Depois do notas.reduce, vou colocar nossa divisão, que é notas.length

console.log(media);