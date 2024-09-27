///----- Array

// 1. Crie uma array com 5 frutas diferentes;

const fruits = ["Banana", "Maçã", "Limão", "Laranja","Morango" ];

//2. Crie uma array com 100 espaços vazios.

const arrayCem = new Array(100);
// console.log(arrayCem);
//ou 

let posicoes = [];
posicoes.length = 100;

//3. Printe o ultimo elemento da array de frutas, baseando-se no seu length
// console.log(fruits.length -1);

//----- For

//4. Printar na tela em cada linha o nome de uma fruta da array anterior;

// for (let i=0; i < fruits.length; i++){
//  console.log(fruits[i])
// };

// ou

// for (i of frutas) {
//   console.log(i);
// }


//5. Inserir números crescentes a partir do 1 na array de 100 slots (a array vai ter 100 items, com o primeiro sendo 1 e o último sendo 100).

for(let i=0; i< arrayCem.length; i++){
  arrayCem[i]= i +1
}

// console.log(arrayCem);
//----- ForEach

//6. criar uma array, cujos itens sejam o dobro dos items da array de 100 itens.

arrayCem.forEach((item)=>{
  console.log(item * 2);
})



//----- ForEach

//6. criar uma array, cujos itens sejam o dobro dos items da array de 100 itens.

//7. Dada a seguinte array, printe o tamanho de cada string a cada iteração


//---- Map

//8. Dada uma array de nomes, criar uma nova array que adiciona o pronome de tratamento "sra." antes de cada nome;
const nomes = ["laís", "luiza", "fernanda", "marina"];

const incluiNomes = nomes.map((nome) => {
  return "sra " + nome;
});
console.log(incluiNomes);


//9. Dado uma array de preços de livros, retorne uma array com os preços com desconto de 20%.
const precosLivros = [10, 30, 25, 50, 40, 60];

const desconto = precosLivros.map((precoLivro) => {
  return precoLivro * (1 - 0.2);
});

//---- Filter 

const numeros = [1, 2, 3, 4, 5];
let filtrado = numeros.filter((item) => {
  return item > 2;
});
console.log(filtrado); // [3, 4, 5]

//10. Dada a array de livros *com desconto*, crie uma nova array contendo todos os preços que estão abaixo de 30;

const precosLivros = [8, 10, 30, 40];

let resultado = precosLivros.filter((preco) => {
  if (preco < 30) {
    return preco;
  }
});

//---- Reduce 

//11. Como essa promoção de livros está muito boa e você tem dinheiro para comprar os livros que quer, some os preços com desconto dessa array

const precoDosLivrosQueVouComprar = [8, 10];
const somaPrecos = precoDosLivrosQueVouComprar.reduce(function (
  acc,
  ValorInicial
) {
  return acc + ValorInicial;
},
0);

let soma = 0;
for(let i = 0; i < precoDosLivrosQueVouComprar.length; i++) {
  soma = soma + precoDosLivrosQueVouComprar[i];
}
console.log(soma);

//---- Objetos

//12. Crie um objeto chamado animal com as seguintes propriedades: porte, especie e raca; coloque os valores que quiser

let animal = {
  porte: "Grande",
  especie: "Cachorro",
  raca: "Golden",
};
console.log(animal);


//13. Crie um objeto curso que receba as propriedades: nome, período, professora. Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log

let curso = {
  nome: "Revisão de Javascript",
  periodo: "09h às 17h",
  professora: "Bruna",
};

console.log(
  `Nome: ${curso.nome} \n Período: ${curso.periodo} \n Professora: ${curso.professora}`
);

console.log("Nome: ", curso.nome);
console.log("Período: ", curso.periodo);
console.log("Professora: ", curso.professora);


//--- tudo junto e misturado!!

//. Dada a seguinte array de objetos:

const data = [
  {
    nome: "Scooby Doo",
    idade: 7,
    tipo: "cachorro",
  },
  {
    nome: "Sofia",
    idade: 1,
    tipo: "gato",
  },
  {
    nome: "Bidu",
    idade: 6,
    tipo: "cachorro",
  },
  {
    nome: "Mimi",
    idade: 3,
    tipo: "gato",
  },
  {
    nome: "Alfredo",
    idade: 10,
    tipo: "gato",
  },
];

// printar no console apenas os cachorros
let doguinhos = data.filter((animal) => {
  return animal.tipo === "cachorro";
});

// printe no console apenas os gatos

let gatinhos = data.filter((animal) => {
  return animal.tipo === 'gato';
});
console.log(gatinhos)  

// some a idade de todos os gatos juntos
let idadesGatos = gatinhos.reduce((acc, animal) => {
  return acc + animal.idade;
}, 0);
console.log(idadesGatos);