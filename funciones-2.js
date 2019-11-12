class Persona {
    constructor(dni, nombre, apellido, direccion, telefono, email, salario, estado, contrasena) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.salario = salario;
        this.contrasena=contrasena;
        this.estado = "pendiente" 
    }
}

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

    if(!buscar()){
        //guardar el arreglo dentro del localStorage si el usuario es uno nuevo
        localStorage.setItem("keybank", JSON.stringify(nombreListaPersonas));
        document.getElementById("agregarForm").reset(); // resetea el formulario
        alert('Se agregó con éxito a nuestra base de datos. Estará pendiente de aprobación');
    }else{ 
        alert('No se dió de alta. Ingrese por Login');
        document.getElementById("agregarForm").reset(); // resetea el formulario
    }
}

// function leer() {
//     //traer arreglo del localStorage
//     let arregloAux = JSON.parse(localStorage.getItem("keybank"))
//     console.log(arregloAux)
    
//     let fila = document.getElementById('miLista');
//     let texto = '';
//     for(i in arregloAux){
//         texto +=`<div class="col-sm-6 col-md-3">
//                     <div class="card">
//                         <img src="./img/${arregloAux[i].dni}" class="img-contenedor card-img-top" alt="...">
//                     </div>
//                 </div>`;
//     }
//     fila.innerHTML = texto;
// }

// leer();

function buscar(){

    let arreglo = JSON.parse (localStorage.getItem("keybank"));
    let dni1 = document.getElementById("dni").value;
    //buscar en el arreglo el dni 

    nombreListaPersonas1 = arreglo.filter(function(persona){
        return persona.dni == dni1;
    })
    
    if(nombreListaPersonas1.length > 0){
        alert('DNI ya existente... no se dará de alta');
        return true;
    }else{
        return false;
    }
}

//GABY R
function loguear() { //el onclick del boton agregar
    let cliente = document.getElementById("nombreLogin").value;
    let cliente1 = document.getElementById("passUsuario").value;
    if (cliente == 'admin' && cliente1 == 'admin') {
        alert("Ud ha iniciado como administrador");
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

    nombreListaPersonas1 = usuarios.filter(function(persona){
        return persona.dni == cliente && persona.contrasena== cliente1;
    })
    
    if(nombreListaPersonas1.length > 0){
        alert('Es cliente');
        return true;
    }else{
        alert('No es cliente');
        return false;
    }
    }
 }
//  document.getElementById('loguear').addEventListener('click', function(){
//     loguear();
 //})
