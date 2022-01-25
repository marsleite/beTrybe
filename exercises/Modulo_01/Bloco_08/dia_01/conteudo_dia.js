//First Class Functions

const product = (productName, price, isOnSale) => ({
    productName,
    price: `R$ ${price}`,
    sale: isOnSale ? 'For sale' : 'Not for sale',
});

console.log(product('Computador', 3000, false));
//--------------------------------------------------
// Higher Order Functions
const button = document.querySelector('#signup-button');
//minha função de primeira classe;
const registerUser = () => {
    // código para registrar a nova pessoa usuaria
    console.log('Registrado com sucesso!)');
};

//Minha função de segunda classe;
button.addEventListener('click', registerUser);