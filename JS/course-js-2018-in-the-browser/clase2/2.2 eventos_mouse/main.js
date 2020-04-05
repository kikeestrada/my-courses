 /**
  * Eventos del Mouse
  * click
  * dblclick
  * mouseenter
  * mouseleave
  * contextmenu = > captura el click derecho
  * mousedown
  * mouseup
  * mousemove
  */

//  click
btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function(){
    console.log('btn un solo click')
})  

// dblclick
btn2 = document.getElementById('btn2');
btn2.addEventListener('dblclick', function(){
    console.log('btn doble solo click')
})  

// mouseleave
fnLeave = document.getElementById('leave');
fnLeave.addEventListener('mouseleave', function(){
    console.log('Mause Leave')
})  

// mouseenter
fnEnter = document.getElementById('enter');
fnEnter.addEventListener('mouseenter', function(){
    console.log('Mause Leave');
})  


const createMenuContextual = e => {
    const menu = document.createElement('div');
    menu.textContent = 'Soy un menu contextual';
    menu.id = 'context-menu';
    const prevMenu = document.getElementById('context-menu');

    menu.style.padding = '1em';
    menu.style.background = '#000000';
    menu.style.color = '#ffffff';
    menu.style.position = 'fixed';
    menu.style.top = `${e.pageY}px`;
    menu.style.left = `${e.pageX}px`;
    // if(prevMenu){
    //     document.body.removeChild(prevMenu)
    // }else{
    //     document.body.appendChild(menu);
    // }   
    
    // Operador ternario
    prevMenu? document.body.removeChild(prevMenu):
    document.body.appendChild(menu);       
}

document.addEventListener('contextmenu', e => {
    createMenuContextual(e)
    e.preventDefault();
})

// mousedown

fnMouseDown = document.getElementById("demo");
fnMouseDown.addEventListener("mousedown", function () {
    fnMouseDown.getElementById("demo").style.color = 'green'
  });

fnMouseUp = document.getElementById("demo")
fnMouseUp.addEventListener("mouseup", function () {
    document.getElementById("demo").style.color = 'black'
  });


// mousemove
fnMouseMove = document.getElementById("myDIV")
fnMouseMove.addEventListener("mousemove", function(event) {
    myFunction(event);
  });
  
  function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("demo").innerHTML = coor;
  }



const cambiarColor = document.getElementById('button5');


cambiarColor.addEventListener('click', function() {   
    var miPatito = document.getElementById('miDiv');
    miPatito.classList.toggle('color-rojo')
})