function callNameBig () {
    let names = ['Jose', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
    let maior = names[0].length
    for (let i in names) {
      if (names[i].length > maior) {
          maior = names[i].length 
          nome = names[i]
      }
    };
    return nome
  };
  
  console.log(callNameBig());