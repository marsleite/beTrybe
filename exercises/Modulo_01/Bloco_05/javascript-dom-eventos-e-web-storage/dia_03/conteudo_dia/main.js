const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

let elementFather = document.body;
let mainContainer = document.querySelector('.container');

/*
 1 -Crie uma função que adicione a classe 'tech' ao elemento selecionado; */
 function addClassTech(event) {
  event.target.classList.toggle('tech');
 }
/* 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?*/
function setClassTech(event) {
  const setAtributte = document.querySelectorAll('.tech');
  for(let index = 0; index < setAtributte.length; index += 1) {
    setAtributte[index].classList.remove('tech')
  }
  event.target.classList.add('tech');
}

/* Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;
Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}
addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
addEventListener('click', setClassTech);