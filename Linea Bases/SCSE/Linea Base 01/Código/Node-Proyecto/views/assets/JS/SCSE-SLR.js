//Ejecutando funciones

window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_login = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_register = document.querySelector(".caja__trasera-register");


    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPage();
    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            caja_trasera_register.style.opacity = "1";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            caja_trasera_register.style.display = "block";
        }
    }

    function login(){
        if (window.innerWidth > 850){
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_login.style.opacity = "1";
        }else{
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.opacity = "1";
        }
}


