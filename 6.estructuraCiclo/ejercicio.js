//averiguar su concepto aplicacion y ejercicios
//existen 3
//for
for(let inicial=1;inicial<=20;inicial++) {
    console.log(inicial)
    
    }



    for(let inicial =1;inicial<=20;inicial++){
      if(inicial%2==0){
        console.log(inicial)
      }else{
        console.log(inicial)
      }
    }


    let vocales="aeiou"
  console.log(vocales.length)
  for(let i=0;i<vocales.length;i++){
    console.log(vocales[i])
  }
  
//let texto="hola como estas como te llamas"
//let contador=0
//for(let i=0;i<texto.length;i++){
 // if(texto[i]=="a"){
   // contador+=1
  //}
//}
//console.log("tienes",contador,"vocales a")
//for
//let texto="eucalipto"
//let contador=0
//for(let i=0;i<texto.length;i++){
 
// if(texto[i]=="a"){// contador+=1

//if(texto[i]=="e"){
//  contador+=1
//if(texto[i]=="u"){
//       contador+=1
//       if(texto[i]=="o"){//contador+=1
// if(texto[i]=="i"){
//           contador+=1

// }
//console.log("tienes",contador,"vocales 5")



//hacer un programa que se muestrael factorialde un numero 
//5!=5*4*3*2*1
//5!=120
//que mi determine si un texto es palimdromo
//ada
//q mi muestre los n numeros de la siere de fibonacci
//1-2-3-5-8-13-21-34


//trabajo del dia jueves
//hacerun programa que se muestra elfactorial de un numero
function factorialize(num) {
  // Si el número es menor que 0, rechacelo. 
  if (num < 0) 
        return -1;
    
  // Si el número es 0, su factorial es 1.
  else if (num == 0) 
      return 1;
    
   
    else {
        return (num * factorialize(num - 1)); 
        /* 
                	         num * factorialize(num - 1)
        1ª llamada – factorialize(5) devolvera    5  * factorialize(5 - 1) // factorialize(4)
        2ª llamada – factorialize(4) devolvera    4  * factorialize(4 - 1) // factorialize(3)
        3ª llamada – factorialize(3) devolvera    3  * factorialize(3 - 1) // factorialize(2)
        4ª llamada – factorialize(2) devolvera    2  * factorialize(2 - 1) // factorialize(1)
        5ª llamada – factorialize(1) devolvera    1  * factorialize(1 - 1) // factorialize(0)
      
        
        5ª la llamada devolvera (5 * (5 - 1))     // num = 5 * 4
        4ª la llamada devolvera (20 * (4 - 1))    // num = 20 * 3
        3ª la llamada devolvera (60 * (3 - 1))    // num = 60 * 2
        2ª la llamada devolvera (120 * (2 - 1))   // num = 120 * 1
        1ª la llamada devolvera (120)             // num = 120
        
        Si sumamonos todas las llamadas en una linea, tenemos
        (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
        */
    }
}
factorialize(5);

//q mi muestre los n numeros de la siere de fibonacci
//1-2-3-5-8-13-21-34
var fib = function(n) {

  if (n <= 1) return n;

  let prev2 = 0;
  let prev1 = 1;
  let c = 0;

  for (let i = 2; i<= n; i++) {
      c = prev1 + prev2;
      prev2 = prev1;
      prev1 = c;
  }

  return c;
};
//que mi determine si un texto es palimdromo
//ada
function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
  return true;
 }
 palindrome("A man, a plan, a canal. Panama");