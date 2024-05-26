const regex = {
    //name: /^[A-Z]+[a-z]{4,20}$/,
    //edad: /^[A-Z]+[a-z]{4,20}$/,
    mail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/
    //username: /^[a-zA-Z0-9_]{4,16}$/ 
}



const email = document.querySelector('#email')
const password =  document.querySelector('#pass')
const boton = document.querySelector('.boton')


boton.addEventListener("click", function() {
    if ( email.value.trim() == "" || password.value.trim() == "" )
        alert("Debe ingresar usuario y contraseña.")
    else{
        window.close()
        window.open("../index.html")
    }
        
})



/*
email.addEventListener("blur", function() {
    if(!regex.name.test(email.value))
        console.log("errror")
        //mensajeError("Solo se aceptan letras para el ingreso de nombre")
})

password.addEventListener("blur", function() {
    if(!regex.name.test(password.value))
        console.log("errror")
        //mensajeError("Solo se aceptan letras para el ingreso de nombre")
})
*/




