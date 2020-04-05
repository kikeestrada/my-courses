console.log('Clase 3.1');
console.log('Dibujar formas en el DOM');

class Forma {
    constructor(alto,ancho, color){
        this.alto = alto;
        this.ancho = ancho;
        this.color = color;
    }
    dibujar(){
        return document.body.innerHTML = `
            <div 
                style=" 
                    width: ${this.ancho}px; 
                    height: ${this.alto}px; 
                    background: ${this.color};">
            </div>`
    }
}

let forma1 = new Forma(100,100,'orange');
console.log(forma1);
console.log(forma1.dibujar());
console.log('');
console.log('');

class Cuadrado extends Forma{
    constructor(lado, color){
        super(lado, lado, color)
    }
}

let figuraCuadrada = new Cuadrado(100, 'green');
console.log(figuraCuadrada.dibujar());

