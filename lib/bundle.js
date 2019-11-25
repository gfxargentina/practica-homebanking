/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funciones_agregar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funciones/agregar */ \"./src/funciones/agregar.js\");\n/* harmony import */ var _funciones_buscar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funciones/buscar */ \"./src/funciones/buscar.js\");\n/* harmony import */ var _funciones_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funciones/login */ \"./src/funciones/login.js\");\n/* harmony import */ var _funciones_calcular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funciones/calcular */ \"./src/funciones/calcular.js\");\n\n\n\n\ndocument.getElementById('agregar').addEventListener('click', _funciones_agregar__WEBPACK_IMPORTED_MODULE_0__[\"agregar\"]);\ndocument.getElementById('dni').addEventListener('blur', _funciones_buscar__WEBPACK_IMPORTED_MODULE_1__[\"buscar\"]);\ndocument.getElementById('login').addEventListener('click', _funciones_login__WEBPACK_IMPORTED_MODULE_2__[\"loguear\"]);\ndocument.getElementById('calcular').addEventListener('click', _funciones_calcular__WEBPACK_IMPORTED_MODULE_3__[\"calcular\"]);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/clases/persona.js":
/*!*******************************!*\
  !*** ./src/clases/persona.js ***!
  \*******************************/
/*! exports provided: Persona */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Persona\", function() { return Persona; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Persona = function Persona(dni, nombre, apellido, direccion, telefono, email, salario, contrasena) {\n  _classCallCheck(this, Persona);\n\n  this.dni = dni;\n  this.nombre = nombre;\n  this.apellido = apellido;\n  this.direccion = direccion;\n  this.telefono = telefono;\n  this.email = email;\n  this.salario = salario;\n  this.contrasena = contrasena;\n  this.cuenta = \"1\";\n  this.tarjeta = \"0\";\n  this.prestamo = \"0\";\n};\n\n//# sourceURL=webpack:///./src/clases/persona.js?");

/***/ }),

/***/ "./src/funciones/agregar.js":
/*!**********************************!*\
  !*** ./src/funciones/agregar.js ***!
  \**********************************/
/*! exports provided: agregar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"agregar\", function() { return agregar; });\n/* harmony import */ var _buscar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar */ \"./src/funciones/buscar.js\");\n/* harmony import */ var _clases_persona__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/persona */ \"./src/clases/persona.js\");\n\n // se crea un array vacío\n\nvar nombreListaPersonas = []; //leer();\n// si existen datos en el localStorage y el array está vacío, entonces traigo los datos del localStorage (localStorage.getItem) y \"transformo\" el string a un objeto (JSON.parse)\n\nif (localStorage.length > 0 && nombreListaPersonas.length == 0) {\n  nombreListaPersonas = JSON.parse(localStorage.getItem(\"keybank\"));\n}\n\nfunction agregar() {\n  //obtener todos los datos cargados en el formulario \n  var dni = document.getElementById(\"dni\").value;\n  var nombre = document.getElementById(\"nombre\").value;\n  var apellido = document.getElementById(\"apellido\").value;\n  var direccion = document.getElementById(\"direccion\").value;\n  var telefono = document.getElementById(\"telefono\").value;\n  var email = document.getElementById(\"email\").value;\n  var salario = document.getElementById(\"salario\").value;\n  var contrasena = document.getElementById(\"contrasena\").value;\n  var e = document.getElementById(\"miSelect\");\n  var servicio = e.options[e.selectedIndex].value; //esta seccion no me funciona\n\n  var tarjeta = \"0\";\n  var prestamo = \"0\";\n  var cuenta = \"1\";\n\n  if (servicio == 'tarjeta') {\n    tarjeta = \"1\";\n  } else {\n    if (servicio == 'prestamo') {\n      prestamo = \"1\";\n    }\n  } //hasta aquí no funciona. No logro cambiar el servicio elegido por el usuario\n  // crear el objeto persona \n\n\n  var personaItem = new _clases_persona__WEBPACK_IMPORTED_MODULE_1__[\"Persona\"](dni, nombre, apellido, direccion, telefono, email, salario, contrasena);\n  personaItem.cuenta = cuenta;\n  personaItem.tarjeta = tarjeta;\n  personaItem.prestamo = prestamo; // agregar el objeto persona dentro del arreglo \n\n  nombreListaPersonas.push(personaItem);\n\n  if (!Object(_buscar__WEBPACK_IMPORTED_MODULE_0__[\"buscar\"])()) {\n    //guardar el arreglo dentro del localStorage si el usuario es uno nuevo\n    localStorage.setItem(\"keybank\", JSON.stringify(nombreListaPersonas));\n    document.getElementById(\"agregarForm\").reset(); // resetea el formulario\n\n    alert('Se agregó con éxito a nuestra base de datos. Estará pendiente de aprobación');\n    $('#exampleModal').modal('hide');\n  } else {\n    alert('No se dió de alta. Ingrese por Login por favor...');\n    document.getElementById(\"agregarForm\").reset(); // resetea el formulario\n\n    $('#exampleModal').modal('hide');\n  }\n}\n\n//# sourceURL=webpack:///./src/funciones/agregar.js?");

/***/ }),

/***/ "./src/funciones/buscar.js":
/*!*********************************!*\
  !*** ./src/funciones/buscar.js ***!
  \*********************************/
/*! exports provided: buscar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buscar\", function() { return buscar; });\nfunction buscar() {\n  var arreglo = JSON.parse(localStorage.getItem(\"keybank\")); //crea un array con los datos del localstorage\n\n  var dni1 = document.getElementById(\"dni\").value; //trae el número de DNI que ingresó el usuario\n\n  if (arreglo != null) {\n    //verifica que el localstorage no esté vacío\n    var nombreListaPersonas1 = arreglo.filter(function (persona) {\n      return persona.dni == dni1; //si el arreglo no está vacío: crea un array \"filtrando\" los datos del localstorage cuyo DNI coincida con el que ingresó el Usuario\n    });\n\n    if (nombreListaPersonas1.length > 0) {\n      //si ese arreglo no está vacío significa que existe por lo menos un usuario con ese número de DNI\n      alert('DNI ya existente... no se dará de alta');\n      return true; //retorna true cuando encontró ese DNI cargado en el localstorage\n    } else {\n      return false; //retorna false cuando no encontró ese DNI cargado en el localstorage \n    }\n  } else {\n    return false; //retorna false porque el localstorage cuando no encontró ese DNI cargado en el localstorage\n  }\n}\n\n//# sourceURL=webpack:///./src/funciones/buscar.js?");

/***/ }),

/***/ "./src/funciones/calcular.js":
/*!***********************************!*\
  !*** ./src/funciones/calcular.js ***!
  \***********************************/
/*! exports provided: calcular */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcular\", function() { return calcular; });\nfunction calcular() {\n  var monto = document.getElementById(\"simulador\").value; //traigo el valor que se carga en el input//\n\n  var resultado = document.getElementById(\"resultado\"); //el valor del resultado en el otro input\n\n  resultado.innerText = monto * 1.30 / 12; //el resultado es monto (lo que se cargue en el input) x1.30 (asi se le suma un 30%) dividido en 12\n}\n\n//# sourceURL=webpack:///./src/funciones/calcular.js?");

/***/ }),

/***/ "./src/funciones/login.js":
/*!********************************!*\
  !*** ./src/funciones/login.js ***!
  \********************************/
/*! exports provided: loguear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loguear\", function() { return loguear; });\nfunction loguear() {\n  //el onclick del boton agregar\n  var cliente = document.getElementById(\"nombreLogin\").value;\n  var cliente1 = document.getElementById(\"passUsuario\").value;\n\n  if (cliente == 'admin' && cliente1 == 'admin') {\n    window.location.href = \"administrador.html\";\n  } else {\n    var usuarios = JSON.parse(localStorage.getItem('keybank')); //buscar en el arreglo el dni \n\n    var nombreListaPersonas1 = usuarios.filter(function (persona) {\n      return persona.dni == cliente && persona.contrasena == cliente1;\n    });\n\n    if (nombreListaPersonas1.length > 0) {\n      if (nombreListaPersonas1[0].cuenta == '1') {\n        alert('Ud ya es usuario pero aún no fue aprobado como Cliente... por favor intente nuevamente mas tarde... disculpe las molestias...');\n        $('#loginModal').modal('hide');\n      }\n\n      if (nombreListaPersonas1[0].cuenta == '2') {\n        window.location.href = \"clientes.html\";\n      }\n\n      if (nombreListaPersonas1[0].cuenta == '3') {\n        alert('Ud posee una cuenta Suspendida momentaneamente... por favor intente nuevamente mas tarde... disculpe las molestias...');\n        $('#loginModal').modal('hide');\n      }\n    } else {\n      alert('Por favor, primero debería registrarse...');\n      $('#loginModal').modal('hide');\n      $('#exampleModal').modal('show');\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/funciones/login.js?");

/***/ })

/******/ });