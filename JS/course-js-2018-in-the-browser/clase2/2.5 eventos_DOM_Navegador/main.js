// equivalente al document. ready de jquery
window.addEventListener('DOMContentLoaded', function(){
    
})

// scroll
window.addEventListener('scroll', function(e){
    console.log('scrollX: ' + scrollX, 'scrollY: ' + scrollY)
})

// resize cuando redimensionamos la
window.addEventListener('resize', function(e){
    console.log('innerWidth: ' + innerWidth, 'innerHeight: ' + innerHeight)
    console.log('outerWidth: ' + outerWidth, 'outerHeight: ' +outerHeight)
})

