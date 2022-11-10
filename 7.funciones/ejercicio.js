//funcion contarVocales(texto){retur cantidadVocales}
//contarVocales("eucalipto") //5

function contarVocales(texto){
    const vocales= "aeiou";
    let cantidadVocales =0
    for(const letra of texto){
        if (vocales.includes(letra.toLowerCase())){
            cantidadVocales++;
        }
    }
    return cantidadVocales;

}
console.log(contarVocales("eucalipto"))
console.log(contarVocales("magali"))


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
