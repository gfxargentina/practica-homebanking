export function loguear() { //el onclick del boton agregar
    let cliente = document.getElementById("nombreLogin").value;
    let cliente1 = document.getElementById("passUsuario").value;

    if (cliente == 'admin' && cliente1 == 'admin') {
        window.location.href = "administrador.html"

    } else {
        let usuarios = JSON.parse(localStorage.getItem('keybank'));
                        
        //buscar en el arreglo el dni 

        let nombreListaPersonas1 = usuarios.filter(function (persona) {
            return persona.dni == cliente && persona.contrasena == cliente1;
        })

        if (nombreListaPersonas1.length > 0) {
            
            if (nombreListaPersonas1[0].cuenta == '1') {
                alert('Ud ya es usuario pero aún no fue aprobado como Cliente... por favor intente nuevamente mas tarde... disculpe las molestias...')
                window.location.href = "index.html"
            }
            
            if(nombreListaPersonas1[0].cuenta == '2') {
                window.location.href = "clientes.html"
            }

            if(nombreListaPersonas1[0].cuenta == '3'){
                alert('Ud posee una cuenta Suspendida momentaneamente... por favor intente nuevamente mas tarde... disculpe las molestias...')
                window.location.href = "index.html"
            }

        } else {
            alert('Por favor, primero debería registrarse...');
            window.location.href = "index.html";
        }
    }

}