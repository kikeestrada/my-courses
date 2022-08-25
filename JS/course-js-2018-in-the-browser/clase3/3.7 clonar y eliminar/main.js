const idContainer = document.getElementById('idContainer');
const otroElemento = document.getElementById('otroElemento');
const elementoParaBorrar = document.getElementById('elementoParaBorrar');
const newBlock = idContainer.cloneNode(true);

elementoParaBorrar.remove();

otroElemento.after(newBlock);