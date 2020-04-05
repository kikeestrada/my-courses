console.log('Clase 4.2');
console.log('Ejecutar Functions');

let obj = {
    nombre: 'objeto',
    sumar(a,b) {
        return a + b;
    }
};

let miOtraSuma = obj.sumar(2,3);
console.log(miOtraSuma);