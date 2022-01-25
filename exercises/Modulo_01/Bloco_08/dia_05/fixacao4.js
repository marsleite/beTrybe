// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Banana', 'Abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Abacate', 'Laranja', 'Uva'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [
    ...fruit,
    ...additional,
  ]
};

console.log(fruitSalad(specialFruit, additionalItens));