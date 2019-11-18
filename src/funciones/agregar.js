import {buscar} from './buscar';
import {Persona} from '../clases/persona';
// se crea un array vacío
let nombreListaPersonas = [];
//leer();

// si existen datos en el localStorage y el array está vacío, entonces traigo los datos del localStorage (localStorage.getItem) y "transformo" el string a un objeto (JSON.parse)
if(localStorage.length > 0 && nombreListaPersonas.length == 0){
    nombreListaPersonas = JSON.parse (localStorage.getItem("keybank"));
}

export function agregar() {
    //obtener todos los datos cargados en el formulario 
    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let salario = document.getElementById("salario").value;
    let contrasena = document.getElementById("contrasena").value;
    let estado = "pendiente";
    
    var e = document.getElementById("miSelect")
    let servicio = e.options[e.selectedIndex].value;
       
    //esta seccion no me funciona
    let tarjeta=false;
    let prestamo=false;
    let cuenta=true;

    if(servicio=='tarjeta'){
        console.log("en tarjeta")
        tarjeta=true;
        console.log(tarjeta)
    }else{
        if(servicio=='prestamo'){
            prestamo=true;
           
        }
    }
    //hasta aquí no funciona. No logro cambiar el servicio elegido por el usuario
           
    // crear el objeto persona 
    var personaItem = new Persona(dni, nombre, apellido, direccion, telefono, email, salario, contrasena);
    personaItem.cuenta=cuenta;
    personaItem.tarjeta=tarjeta;
    personaItem.prestamo=prestamo;
      
    // agregar el objeto persona dentro del arreglo 
    nombreListaPersonas.push(personaItem);

    if(!buscar()){
        //guardar el arreglo dentro del localStorage si el usuario es uno nuevo
        localStorage.setItem("keybank", JSON.stringify(nombreListaPersonas));
        document.getElementById("agregarForm").reset(); // resetea el formulario
        alert('Se agregó con éxito a nuestra base de datos. Estará pendiente de aprobación');
        window.location.href = "index.html";
        
    }else{ 
        alert('No se dió de alta. Ingrese por Login por favor...');
        document.getElementById("agregarForm").reset(); // resetea el formulario
        window.location.href = "index.html";
    }
}