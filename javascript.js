var expReg = "[0-9]"
var expReg2 = "^X|^x";
var expReg3 = "^_";


var nombre = document.getElementById("usuario");
var contraseña = document.getElementById ("password");
var bombilla = document.getElementById ("bombilla");
var contraseña_default = "123";
var div_formulario = document.getElementById("formulario");
var div_bienvenida = document.getElementById("bienvenida");
var contador = 0;
var div_padre = document.getElementById("div_padre");
var mensaje_Error = document.getElementById("mensaje_Error");



var label_password = document.getElementById("label_password");


nombre.addEventListener("keyup", function(){
    if (nombre.value.match(expReg3)){
       contraseña.style.display = "none";
       contraseña.value = '';
    }else{
        contraseña.style.display = "inline";
    }
    if(nombre.value.match(expReg)){
        contraseña.setAttribute("maxlength", 8);
    }else{
        contraseña.setAttribute("maxlength", 1);
    }
    if(nombre.value.match(expReg2)){
        contraseña.style.backgroundColor = "red";
        contraseña.style.fontSize = "28px";

    }else{
        contraseña.style.backgroundColor = "white";
        contraseña.style.fontSize = "14px";
    }
    
    
});
function comprobarContrasena(){
    if(contraseña.value === contraseña_default){
        console.log("he entrado");
        div_formulario.style.display = "none";
        div_bienvenida.style.display = "inline";
    }else{
        contador ++;
        if (contador >= 3){
            mensaje_Error.style.display = "inline";
            div_padre.remove();
        }
    }
}

function mostrar_bombilla(){
    bombilla.style.display = "inline";
}

function quitar_bombilla(){
    bombilla.style.display = "none";
}




