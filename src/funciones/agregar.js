// se crea un array vacío
var nombreListaPersonas = [];
//leer();

// si existen datos en el localStorage y el array está vacío, entonces traigo los datos del localStorage (localStorage.getItem) y "transformo" el string a un objeto (JSON.parse)
if(localStorage.length > 0 && nombreListaPersonas.length == 0){
    nombreListaPersonas = JSON.parse (localStorage.getItem("keybank"));
}

function agregar() {
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

    // crear el objeto persona 
    let personaItem = new Persona(dni, nombre, apellido, direccion, telefono, email, salario, estado, contrasena);
   
    // agregar el objeto persona dentro del arreglo 
    nombreListaPersonas.push(personaItem);
