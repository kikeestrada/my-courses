// con delegacion de eventos para un ejercicio como un lightbox

const gallery = document.getElementById('gallery');
gallery.addEventListener('click', function(e){
    const t = e.target;
    const listImages = Array.from(gallery.querySelectorAll('img'));
    i = listImages.indexOf(t);
    console.log(`hiciste click en la imagen ${i + 1}`);
});