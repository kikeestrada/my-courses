console.log('Clase 4.15 Lexical This');
console.log('');

// Lexical this

function Boy(edad) {
    this.edad = 0;

    // let _t = this;
    // setInterval(function () {
    //     _t.edad++;
    // }, 1000);

    setInterval(() => { this.edad++ }, 1000)
}
let juanito = new Boy();
console.log(juanito);
console.log('');