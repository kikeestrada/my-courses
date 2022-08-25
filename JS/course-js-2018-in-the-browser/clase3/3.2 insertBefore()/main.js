console.log('aqui seleccionamos e imprimimos el parent')
const mainParentElement = document.getElementById('parent');
console.log(mainParentElement);



console.log('');
console.log('mainParentElement.children');
/**
 * Solo me va a devolver los childs pero NO 
 * devuelve los nietos 
 */
console.log(mainParentElement.children); 



console.log('')
/**
 * Aqui el hasChildNodes nos devuelve TODO
 * incluyendo los nodos de tipo texto
 */
console.log('Recordemos como saber Quién tiene hijos?')
const mainParentChilds = Array.from(mainParentElement.children);
console.log(mainParentChilds.filter(child => child.hasChildNodes()));
console.log('')
console.log('Tambien podemos obtenerlos por medio de una validacion')
console.log(mainParentChilds.filter(
    chil => {
        if (mainParentChilds.hasChildNodes) {
            return mainParentChilds;
        }
    }
))


console.log('')
console.log('Para detectar qué elemento tiene Hijos puros excluyendo los nodos de tipo texto');
console.log(mainParentChilds.filter(child => child.children.length > 0));



console.log('')
console.log('aqui detectmos por indice a cada elemento que tiene hijos usando el [0]')
const childWithChilds = mainParentChilds.filter(child => child.children.length > 0)[0];
// const childWithChilds = mainParentChilds.filter(child => child.children.length > 0)[1];
console.log(childWithChilds);



console.log('');
console.log('Otra forma de obtener los childs es usando un query selector');
const mainParentChildsQuerySelector = Array.from(mainParentElement.querySelectorAll('div'));
console.log(mainParentChildsQuerySelector);



console.log('');
console.log('para obtener un hijo especifico con una busqueda por recorrido');
console.log(mainParentChildsQuerySelector.filter(
    child => child.textContent.trim() === 'Nieto 3'
)[0]);


console.log('vamos a insertar un elemento con insertBefore');


console.log('');
const newGrandSon = document.createElement('div');
newGrandSon.textContent = 'Soy un nuevo Nieto';
// const mainParentElement = document.getElementById('parent');
// const mainParentChilds = Array.from(mainParentElement.children);
// const childWithChilds = mainParentChilds.filter(child => child.children.length > 0)[0];
const grandSons = Array.from(childWithChilds.children);
const grandSon3 = mainParentChildsQuerySelector.filter(
    child => child.textContent.trim() === 'Nieto 3'
)[0];

childWithChilds.insertBefore(newGrandSon, grandSon3)

