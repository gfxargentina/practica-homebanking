let _Persona = [];


leerDatos();


export function leerDatos() {
    console.log('leerDatos')

    if (localStorage.length > 0) {
        let _Persona = JSON.parse(localStorage.getItem("keybank"));

        //cargar datos en la tabla
        let tbody = document.getElementById("tbody");

        for (let i in _Persona) {
            //creo una fila tr 
            let tr = document.createElement("tr");

            // creo las celdas necesarias
            let tdDni = document.createElement("td");
            let tdNombre = document.createElement("td");
            let tdApellido = document.createElement("td");
            let tdDireccion = document.createElement("td");
            let tdTelefono = document.createElement("td");
            let tdEmail = document.createElement("td");
            let tdSalario = document.createElement("td");
            let tdAceptado = document.createElement('td');
            let tdRechazado = document.createElement('td');
            let tdSuspendido = document.createElement('td');
            //let tdcheck =document.createElement('td');
            
            //crear los check de aceptar rechazar suspendida
            let checkAceptar = document.createElement("input");
            checkAceptar.setAttribute("type", "radio");
            checkAceptar.className = "form-radio form-radio-inline, text-cent"
            checkAceptar.id = _Persona[i].dni;
            //checkAceptar.addEventListener("click", eliminarFila);

            let checkRechazar = document.createElement("input");
            checkRechazar.setAttribute("type", "radio");
            checkRechazar.className = "form-radio form-radio-inline, text-cent"

            let checkSuspendido = document.createElement("input");
            checkSuspendido.setAttribute("type", "radio");
            checkSuspendido.className = "form-radio form-radio-inline, text-cent"

            //agregar valores a las celdas

            tdDni.innerText = _Persona[i].dni;
            tdNombre.innerText = _Persona[i].nombre;
            tdApellido.innerText = _Persona[i].apellido;
            tdDireccion.innerText = _Persona[i].direccion;
            tdTelefono.innerText = _Persona[i].telefono;
            tdEmail.innerText = _Persona[i].email;
            tdSalario.innerText = _Persona[i].salario;
            tdAceptado.appendChild(checkAceptar);
            tdRechazado.appendChild(checkRechazar);
            tdSuspendido.appendChild(checkSuspendido);
            //tdcheck.appendChild(checkEliminar);
            //tdcheck.appendChild(checkModificar);

            //agregar a la tabla la filla y las celdas dentro de esa fila

            tr.appendChild(tdDni);
            tr.appendChild(tdNombre);
            tr.appendChild(tdApellido);
            tr.appendChild(tdDireccion);
            tr.appendChild(tdTelefono);
            tr.appendChild(tdEmail);
            tr.appendChild(tdSalario);
            tr.appendChild(tdAceptado);
            tr.appendChild(tdRechazado)
            tr.appendChild(tdSuspendido)
            tbody.appendChild(tr)
        }


    }
}

//function borrarFilas() {

  //  let tbody = document.getElementById("tbody");

    //if (tbody.firstChild.length > 0) {
      //  while (tbody.firstChild) {
        //    tbody.removeChild(tbody.firstChild);
        //}
    //}
//}

function eliminarFila() {
    // console.log(this.id);

    let dni = this.id;
    if (localStorage.length > 0 && _Persona.length == 0) {
        _Persona = JSON.parse(localStorage.getItem("keybank"));
    }

    //buscar el objeto que quiero eliminar
   // let  = _Persona.filter(function(Persona) {
     //   return Persona.dni != dni;
    //});

    //arregloHelados = objetoEncontrado;
    //localStorage.setItem("helados", JSON.stringify(arregloHelados));

    //leerDatos();
    //borrar el objeto con id

}

//function modificarDatos() {
    // console.log(this.id);

    //limpiarFormulario();
    //let codigo = this.id;
   // if (localStorage.length > 0 && _Persona.length == 0) {
       // _Persona = JSON.parse//(localStorage.getItem("Persona"));
    //}

    //buscar el objeto que quiero eliminar
    let objetoEncontrado = _Persona.filter(function(Persona) {
        return Persona.dni == dni;
    });

    console.log(objetoEncontrado);