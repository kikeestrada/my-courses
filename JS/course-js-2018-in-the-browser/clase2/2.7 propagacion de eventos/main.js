// document.querySelectorAll('div').forEach(el =>{
//     el.addEventListener('click', (e)=>{
//         console.log(e.target.id);
//         e.stopPropagation()
//     })
// })

div1 = document.getElementById('div-1');
div2 = document.getElementById('div-2');
div3 = document.getElementById('div-3');

div1.addEventListener('click', (e)=>{
    console.log(e.target.id);
    e.stopPropagation()
})
div2.addEventListener('click', (e)=>{
    console.log(e.target.id);
    e.stopPropagation()
})
div3.addEventListener('click', (e)=>{
    console.log(e.target.id);
    e.stopPropagation()
})