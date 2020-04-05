const template = document.getElementById('template');
const myNewTemplate = template.content.cloneNode(true);

myNewTemplate.querySelector('h2').textContent = 'CyberU';
myNewTemplate.querySelector('p').textContent = 'Educacion Tecnologica';
document.getElementById('content').appendChild(myNewTemplate);

