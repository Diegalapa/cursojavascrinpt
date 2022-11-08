//funcion contarVocales(texto){retur cantidadVocales}
//contarVocales("eucalipto") //5

let texto="eucalipto"
let contador=0
for (let i=0;i<texto.length;i++) {
    if(texto[i]=="e"){
        contador+=1
    }
    if(texto[i]=="u"){
        contador+=1
    }
    if(texto[i]=="a"){
        contador+=1
    }
    if(texto[i]=="o"){
        contador+=1
    } if(texto[i]=="u"){
        contador+=1
    }
    return contador;
}
console.log("tiene,contador)


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
