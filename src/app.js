import { agregar } from './funciones/agregar';
import { buscar } from './funciones/buscar';
import { loguear} from './funciones/login';
import { calcular } from './funciones/calcular';

document.getElementById('agregar').addEventListener('click', agregar);
document.getElementById('dni').addEventListener('blur', buscar);
document.getElementById('login').addEventListener('click',loguear);
document.getElementById('calcular').addEventListener('click',calcular);
