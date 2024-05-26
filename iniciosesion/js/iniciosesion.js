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

email.addEventListener("blur", function(){
    if ( !regex.mail.test(email.value.trim()) && email.value.trim() != "" ){
        email.focus()
        alert("Ingrese un formato valido.")
    }       
})


boton.addEventListener("click", function() {
    if ( !regex.mail.test(email.value.trim()) && email.value.trim() != "" ){
        email.focus()
    }    
    else{
        if ( email.value.trim() == "" || password.value.trim() == "" )
            alert("Debe ingresar usuario y contraseña.")
        else{
            window.close()
            window.open("../index.html")
        }
    }
})



