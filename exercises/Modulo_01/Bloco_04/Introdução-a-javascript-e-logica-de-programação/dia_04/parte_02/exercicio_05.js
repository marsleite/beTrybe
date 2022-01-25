function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }
  let phoneNumber = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 0, 1, ];
  console.log(maisRepetido(phoneNumber));
  
  var array = [1, 1, 1 , 1, 2];
  var arrayVerificado = [];
  
  for(var i = 0; i < array.length; i++){
      var contador = 0;  
    var repetiu = false;
    
    for(var z = 0; z < arrayVerificado.length; z++){
        if(arrayVerificado[z] == array[i]){
       //Verifico se no array auxiliar, o número já foi verificado, caso sim, seto a variavel repetiu para true.
          repetiu = true
      }
    }  
    if(repetiu == false){ //caso não tenha repetido, eu deixo o padrão false.
    arrayVerificado.push(array[i])//add no meu array auxiliar que este número vai ser verificado
      for(var j = 0; j < array.length; j++){
        if(array[i] == array[j]){ //se ele achar, faço meu contador acrescentar +1
          contador++
        }
        
      }
        console.log(array[i]);
    }
  
  }