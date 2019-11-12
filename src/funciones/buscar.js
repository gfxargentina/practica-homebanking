export function buscar() {
    
    let arreglo = JSON.parse (localStorage.getItem("keybank"));
    let dni1 = document.getElementById("dni").value;
    //buscar en el arreglo el dni 

    let nombreListaPersonas1 = arreglo.filter(function(persona){
        return persona.dni == dni1;
    })
    
    if(nombreListaPersonas1.length > 0){
        alert('DNI ya existente... no se dará de alta');
        return true;
    }else{
        return false;
    }
}
