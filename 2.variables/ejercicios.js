// averiguar las deferincias entre let y var
// la cocina del codigo
//hosting, scope
//contxto global y local
//let es el que permite declarar variable
//limitado su alcance al bloque, declaracion o expresion donde esta usando la clave

//var es la cual que define variable global o local de una funcion sin importante 

function vasTest() {
    var x = 31;
    if (true) {
        var x =71; // ¡misma variable!
console.log(x); // 71
    }
    console.log(x);  //71
}
