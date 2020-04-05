console.log('Clase 2.10');
console.log('Ciclo for of');


let nombre = 'Alvaro';
for (let value of nombre) {
    console.log(value);
}

let links = document.links;
for (let link of links){
    link.style.color = 'red';
}