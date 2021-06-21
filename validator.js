const validator = {
  isValid: function validacion(cardNumber){
    let arrayTarjeta = Array.from(cardNumber);
    arrayTarjeta = arrayTarjeta.map(Number);
    let numInvertido = arrayTarjeta.reverse();
    let posicionPar = numInvertido.filter((num, i) => i%2!==0);
    let posicionImpar = numInvertido.filter((num, i) => i%2==0);
    let posicionParx2 = posicionPar.map(num => num*2);
    let productoMayor9 = posicionParx2.filter(num => num>9).map(num => num-9);
    let productoMenor9 = posicionParx2.filter(num => num<10);
    let sumaPar1 = productoMayor9.reduce(((a, b) => a+b), 0);
    let sumaPar2 = productoMenor9.reduce(((a, b) => a+b), 0);
    let sumaImpar = posicionImpar.reduce(((a, b) => a+b),0);
    const sumaTotal = sumaPar1 + sumaPar2 + sumaImpar;
    if (sumaTotal%10===0){
      return true;
    } else {
      return false;
    }
  },

  maskify: function enmascaramiento(cardNumber){
    let cuatroDigitos = cardNumber.slice(-4);
    let ocultarDigitos = cardNumber.slice(0,-4);
    let enmascarar = ocultarDigitos.replace(ocultarDigitos,"#").repeat(ocultarDigitos.length) + cuatroDigitos;
      return enmascarar;
    }
};
export default validator;