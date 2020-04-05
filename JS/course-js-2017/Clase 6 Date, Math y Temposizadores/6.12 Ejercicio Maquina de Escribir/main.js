console.log('Clase 6.12 - Ejercicio maquina de escribir')
console.log('');

let writing = str => {
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(()=>{
        if(arrFromStr[i] === ' ') {
            document.body.innerHTML += arrFromStr[i];
            document.body.innerHTML += arrFromStr[i + 1];
            i += 2;
        } else {
            document.body.innerHTML += arrFromStr[i];
            i++;
        }
        if (i === arrFromStr.length) {
            clearInterval(printStr);
            document.body.style.color = 'red'
        }
    },300);
};

writing('Esta es una practica de impresion de texto');