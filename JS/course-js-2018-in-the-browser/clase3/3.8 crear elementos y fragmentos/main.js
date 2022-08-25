const arrayTeachers = ['Alexis', 'Beto', 'Alvaro', 'Daniel', 'John'];
const teacherListContainer = document.getElementById('teacherListContainer');
const teacherListFragment = document.createDocumentFragment();
const teacherListUl = document.createElement('ul');


// OJO
teacherListContainer.appendChild(teacherListUl);

for (let teacher of arrayTeachers){
    const teacherLi = document.createElement('li');
    // teacherListContainer.appendChild(teacherLi);
    teacherListFragment.appendChild(teacherLi);
    teacherLi.textContent = teacher;
}
teacherListUl.appendChild(teacherListFragment);

/**
 * 
 * En Cada iteracion incrustamos un elemento al 
 * DOM y todo se redibuja en panatalla
 * y eso afecta el rendimiento en el navegador
 * 
 * 
 * Lo correcto es tenr todo en memoria y 
 * luego crear el elemento del DOM
 */

 /**
  * El fragment es un elemento del 
  * DOM pero que vive en memoria
  * y eso mejora el performance
  */

  
/**
 * Librerias reactivas orientadas a componetes 
 * como react ya hacen todo este trabajo 
 * sucio por debajo para mejorar el rendimiento
 */
