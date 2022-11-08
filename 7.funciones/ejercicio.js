//funcion contarVocales(texto){retur cantidadVocales}
//contarVocales("eucalipto") //5




//funcion calculadora(num1,num2,operacion){retur total}
//calculadora(45,12,"resta") //33

function calcular(num1,num2,operacion) {
    if (operacion=="suma"){
        total=num1+num2
  }
    if (operacion=="resta"){
    total=num1-num2
 }
    if (operacion=="multiplicacion"){
    total=num1*num2
 }
    if (operacion=="divicion"){
    total=num1/num2
 }
 return total
}
console.log(calcular(45,12,"suma"))
