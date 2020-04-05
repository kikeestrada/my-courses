console.log('Clase 4.5 - Ejecutar funciones constructoras');

/* Función constructora */
let Pais = function(nombre,moneda){
    this.nombre = nombre;
    this.moneda = moneda;
};

// let peru = new Pais();
let peru = new Pais('Peru', 'Sol');
console.log(peru);