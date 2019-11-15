import { agregar } from './funciones/agregar';
import { buscar } from './funciones/buscar';
import { loguear} from './funciones/login';
import {leerDatos} from './funciones/leer';

if (document.getElementById('agregar')){
    document.getElementById('agregar').addEventListener('click', agregar);
}

if(document.getElementById('dni')){
    document.getElementById('dni').addEventListener('blur', buscar);
}
if (document.getElementById('login')){
    document.getElementById('login').addEventListener('click',loguear);
}

if (window.location.pathname == '/administrador.html'){
    console.log('en el if app')
    leerDatos();
    }
    
