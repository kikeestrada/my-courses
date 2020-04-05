console.log('Clase 6.7 - Objeto Math');
/*
* Objeto Math
* Solo tiene propiedades y métodos estáticos
*
* Métodos
* Math.max(a,b,c...n)
* Math.min(a,b,c...n)
* Math.random() -> numero aleatorio entre 0 y 1
* Math.floor() -> redondea hacia abajo un decimal
* Math.ceil()  -> redondea hacia arriba un decimal
* Math.round() -> redondea un decimal a su entero más cercano
* Math.pow(x,n) -> eleva x al exponente n
* Math.sqrt(n)  -> devuelve la raiz de n
* */
console.log('');
console.log('arr = [1,2,3,7,4,5];');
let arr = [1,2,3,7,4,5];
console.log('max ' + Math.max(...arr));
console.log('min ' + Math.min(...arr));
console.log('');