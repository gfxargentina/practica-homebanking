export function loguear() { //el onclick del boton agregar
    let cliente = document.getElementById("nombreLogin").value;
    let cliente1 = document.getElementById("passUsuario").value;
    if (cliente == 'admin' && cliente1 == 'admin') {
        window.location.href="administrador.html"
      
    }
    //  localStorage.setItem("login",cliente1);
    //  console.log(cliente,cliente1);
    //logueo seria:
    else{
    var usuarios = JSON.parse(localStorage.getItem('keybank'));
    //var contrasena = localStorage.getItem('contrasena');
    //let arreglo = JSON.parse (localStorage.getItem("keybank"));
    //let dni1 = document.getElementById("dni").value;
    //buscar en el arreglo el dni 

    let nombreListaPersonas1 = usuarios.filter(function(persona){
        return persona.dni == cliente && persona.contrasena == cliente1;
    })
    
    if(nombreListaPersonas1.length > 0){
        //alert('Es cliente');
        window.location.href="clientes.html"
       
    }else{
        window.location.href="administrador.html"
      
    }
    }
 }