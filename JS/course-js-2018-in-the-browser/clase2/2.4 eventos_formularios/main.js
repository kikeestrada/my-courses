const form = document.getElementById('idForm');
const check = document.getElementById('rememberPassWord');
form.addEventListener('submit', function(e){
    console.log(' se ha enviado el formulario')
});
check.addEventListener('change', function(e){
    // console.log(e);
    if (e.target.checked) {
        console.log(' el usuario quiere recordar su contrasenna')
    }else{
        console.log(' el usuario NOO quiere recordar su contrasenna')
    }
})

// change event
fnChangeEvent = document.getElementById("fname")
fnChangeEvent.addEventListener("change", function () {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  });

//   focus Event

fnFocusEvent = document.getElementById("fname2")
fnFocusEvent.addEventListener("focus", function () {
    document.getElementById("fname2").style.backgroundColor = "red";
  });

  //   blur Event

fnFocusEvent = document.getElementById("fname3")
fnFocusEvent.addEventListener("blur", function () {
    document.getElementById("fname3").style.backgroundColor = "red";
  });


//   reset event

fnReset = document.getElementById("myForm")
fnReset.addEventListener('reset', function () {
    document.getElementById("demo").innerHTML = "The form was reset";
  });

