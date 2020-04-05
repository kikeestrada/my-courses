console.log('Clase 5.7 - Ejercicio Tasks: Creación de clases, propiedades y metodos');

class Task {
    constructor(name) {
        this.name = name;
        this.isComplete = false; // esto es un estado
    }
    // cambia el estado de la propiedad isComplete
    complete() { this.isComplete = !this.isComplete; }
}


class TaskList {
    constructor(name) {
        this.name = name;
        this.tasks = []; // aqui almacenaremos las tareas
    }

    // agreaga una tarea
    addTask(task,element) {
        this.tasks.push(task);
        this.renderTasks(element);
    }

    // elimina una tarea
    removeTask(i,element) {
        this.tasks.splice(i,1);
        this.renderTasks(element);
    }

    // mostrar la tarea en el navegador
    renderTasks(element) {
        let tasks = this.tasks.map( task => `
            <li class="task ${task.isComplete ? 'complete' : ''}">
            <input type="checkbox" 
            class="task__complete-button" 
            ${task.isComplete ? 'checked' : ''}
        >
        <span class="task__name">${task.name}</span>
        <a href="#" class="task__remove-button">X</a>
      </li>
    `);
        element.innerHTML = tasks.reduce((a,b) => a + b, '');
    }
}


// Trabajar con el DOM
const addTaskElement = document.getElementById('add-task');
const tasksContainerElement = document.getElementById('tasks-container');
const inbox = new TaskList('inbox');

// Añadir tarea desde el DOM
function addDOMTask(e, list = inbox) {
    // obtener el texto del input
    if (e.key === 'Enter') {
        // crear la tarea instanciando la clase
        let task = new Task(this.value);
        // añadir la tarea a la lista
        list.addTask(task,tasksContainerElement);
        // borrar el texto del input
        this.value = '';
    }
}
addTaskElement.addEventListener('keyup', addDOMTask);

// Obtener indice de la tarea actual
function getTaskIndex(e) {
    let taskItem = e.target.parentElement,
        tasksItems = [...tasksContainerElement.querySelectorAll('li')];
    return tasksItems.indexOf(taskItem);
}

// Eliminar tarea desde el DOM
function removeDOMtask(e, list = inbox) {
    // detectar que se hizo click en el enlace
    if (e.target.tagName === 'A') {
        // remover tarea de la lista (se necesita el indice)
        list.removeTask(getTaskIndex(e),tasksContainerElement)
    }
}
tasksContainerElement.addEventListener('click', removeDOMtask);

// Completar la tarea
function completeDOMtask(e, list = inbox) {
    // detectar que se hizo click en el input
    if (e.target.tagName === 'INPUT') {
        // completar la tarea de la lista (se necesita el indice)
        list.tasks[getTaskIndex(e)].complete();
        e.target.parentElement.classList.toggle('complete');
    }
}
tasksContainerElement.addEventListener('click', completeDOMtask);