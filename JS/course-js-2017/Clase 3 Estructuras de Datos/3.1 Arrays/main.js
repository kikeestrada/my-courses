console.log('Clase 3.1');
console.log('Arrays');
console.log('');


let array = [1,2,3,4,5,6];
console.log(array.length);
console.log(array[4]);
console.log('');


for (let index = 0; index < array.length; index++) {
    let element = array[index];
    console.log(element)
}
console.log('');


let sum = 0;
for (let index = 0; index < array.length; index++) {
    // sum += element;
    sum += array[index];
}
console.log(sum);
console.log('');



// let array2 = [1,2,3,4,true,5,6];
let array2 = [1,2,3,4,'true',5,6];
let sum2 = 0;
for (let index = 0; index < array2.length; index++) {
    // sum += element;
    sum2 += array2[index];
}
console.log(sum2);
console.log('');



let array3 = [1,2,3,4,'true',5,6];
let sum3 = 0;
for (let index = 0; index < array3.length; index++) {
    let element = array3[index];
    if (typeof element === 'number') {
        sum3 += element;
    }
}
console.log(sum3);
console.log('');


let array4 = [1,2,3,4,'true',5,6];
let sum4 = 0;
for (let index = 0; index < array4.length; index++) {
    let element = array4[index];
    if (typeof element !== 'number') continue;
    sum4 += element;
}

Array.prototype.saludo = 'Hola';

console.log(sum4);
console.log(sum4.saludo);
console.log('');

