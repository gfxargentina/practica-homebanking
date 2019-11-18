export function buscar() {

    let arreglo = JSON.parse(localStorage.getItem("keybank"));
    //crea un array con los datos del localstorage

    alert('en buscar')

    let dni1 = document.getElementById("dni").value;
    //trae el número de DNI que ingresó el usuario

    if (arreglo != null) {
        //verifica que el localstorage no esté vacío

        let nombreListaPersonas1 = arreglo.filter(function (persona) {
            return persona.dni == dni1;
            //si el arreglo no está vacío: crea un array "filtrando" los datos del localstorage cuyo DNI coincida con el que ingresó el Usuario

        })
        if (nombreListaPersonas1.length > 0) {
            //si ese arreglo no está vacío significa que existe por lo menos un usuario con ese número de DNI
            
            alert('DNI ya existente... no se dará de alta');
            return true;
            //retorna true cuando encontró ese DNI cargado en el localstorage

        } else {
            return false;
            //retorna false cuando no encontró ese DNI cargado en el localstorage 
        }

    } else {
        return false;
        //retorna false porque el localstorage cuando no encontró ese DNI cargado en el localstorage
    }


}
