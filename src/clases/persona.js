export class Persona {
    constructor(dni, nombre, apellido, direccion, telefono, email, salario, contrasena) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.salario = salario;
        this.contrasena=contrasena;
        this.estado = "pendiente";
        this.cuenta = true;
        this.tarjeta = false;
        this.prestamo = false;
        
    }
}

