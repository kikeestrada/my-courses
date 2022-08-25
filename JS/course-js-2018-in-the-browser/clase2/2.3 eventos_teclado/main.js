const input = document.getElementById('input');
// keyup
// keydown
// keypress cuando dejamos presionada una tecla

// input.addEventListener('keydown', e =>{
//     console.log('element ' + e);
//     console.log('element key ' + e.key);
//     console.log('element ctrl ' + e.ctrlKey);
//     console.log('element alt ' + e.altKey);
// })

input.addEventListener('keydown', e =>{
    if (e.key == 'a' && e.ctrlKey === true) {
        e.preventDefault();
        alert('ud escribió: Ctrl A')
    }
});


let x = 0;
let y = 0;
addEventListener('keyup', e =>{
    console.log(e.key);   
    const ball = document.getElementById('ball');
    const move = function(direction) {
        switch (direction) {
            case 'up':
                y--                
                break;
            case 'right':
                x++                
                break;
            case 'down':
                y++               
                break;
            case 'left':
                x--               
                break;    
            default:
                break;
        }
        ball.style.transform = `translate(${x*20}px, ${y*20}px)`
    }
    switch(e.key){
        case 'ArrowUp':
            move('up')
            break
        case 'ArrowRight':
            move('right')
            break
        case 'ArrowDown':
            move('down')
            break
        case 'ArrowLeft':
            move('left')    
            break
    }
});