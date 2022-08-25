console.log('Clase 2.6');
console.log('switch');


let color = prompt(`Conoce tu personalidad según tu color (escribe su número): 
1. Rojo 
2. Verde
3. Azul
4. Negro
5. Amarillo`);

switch (color) {
    case '1':
        console.log('Escogiste rojo, eres un romántico')
        break;
    case '2':
        console.log('Escogiste verde, estás en contacto con la naturaleza')
        break;
    default:
        console.log('Por favor, escoge un color válido')
        break;
}