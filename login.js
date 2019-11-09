export function loguear() { //el id del boton ingresar
    let cliente = document.getElementById("nombreLogin").value; //id del input dni//
    let cliente1 = document.getElementById("passUsuario").value; //id del input contrasena//
    if (cliente == 'admin' && cliente1 == 'admin') {
        console.log("administrador");
        window.location="./administrador.html";  //confirmar que asi se llame la pagina de administrador//
    }
    
    else{
    var usuarios = JSON.parse(localStorage.getItem('keybank'));
        nombreListaPersonas1 = usuarios.filter(function(persona){
        return persona.dni == cliente && persona.contrasena== cliente1;
    })
    
    if(nombreListaPersonas1.length > 0){
        console.log("cliente");
        window.location="./cliente.html";//confirmar que asi se llame la pagina html de cliente

        return true;
    }else{
        alert('dni o contraseña incorrecta'); //podriamos tambien hacer que si el dni coincide pero la contraseña no salga la advertencia de "contraseña incorrecta" y si no coincide el dni la leyenda de: "no es cliente registrador"
        return false;
    }
    }
 }
