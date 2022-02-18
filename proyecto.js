// PRECIO BASE COTIZACIÓN QUETZALES
var precio_base = 2000

// RECARGOS POR EDAD: ASEGURADO, CÓNYUGE 10%, 20% 30% HE HIJOS 20%
var edad_18 = 0.1
var edad_25 = 0.2
var edad_50 = 0.3

var casado_18 = 0.1
var casado_25 = 0.2
var casado_50 = 0.3

var hijos_recargo = 0.2

// RECARGOS
var recargo_asegurado = 0
var recargo_conyuge = 0
var recargo_hijos = 0
var recargo_total = 0

// PRECIO FINAL
var precio_final = 0

// PALABRA CLAVE PARA RECORRER EL CICLO
var salir = "SI"

// CICLO PARA REALIZAR MAS DE UNA COTIZACIÓN
while ("NO" != salir.toUpperCase()) {
  // MENSAJE DE ALERTA, SOLICITUD DE DATOS, Y CONVIRTIENDOD EDAD A NÚMERO
  var nombre = prompt("Ingrese su nombre, por favor ")
  var edad = parseInt(prompt("¿Cuantos años tiene? Ingrese solo números "))
  // CONDICIONALES PARA VALIDAR SI ES MENOR DE EDAD
  if (edad < 18) {
    alert("Oye! parece que eres menor de edad")
  } // CONDICIONAL PARA EJECUTAR CORRECTAMENTE LA COTIZACIÓN
    else if (edad >= 18 && typeof nombre ==="string") {
    var casado = prompt("¿Está casado(a) actualmente? Si/No ")
    // COMPROBACIÓN EDAD CÓNYUGE, SOLO SI ESTA CASADO(A) Y CONVIRTIENDO VAR A NÚMERO
    var edad_conyuge
    if ("SI" == casado.toUpperCase()) {
      edad_conyuge = parseInt(prompt("¿Que edad tiene su esposo(a)? Igrese solo números "))
      // CONDICION PARA VALIDAR SI CONYUGE ES ACEPTABLE AL SEGURO
      if (edad_conyuge < 18) {
        alert("Su esposo(a) no cumple con la edad mínima para ser agregado(a) al seguro")
      }
    }
  
    var hijos = prompt("¿Tiene hijos o hijas? Si/No ")
    // COMPROBACIÓN CANTIDAD HIJOS, SOLO SI LOS TIENE, CONVIRTIENDO VAR A NÚMERO
    // Y RECARGO POR LA CANTIDAD DE HIJOS
    var cantidad_hijos
    if ("SI" == hijos.toUpperCase()) {
      cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene? Ingrese solo números "))
      recargo_hijos = cantidad_hijos * precio_base * hijos_recargo
    }
  
    // RECARGO POR LA EDAD DEL ASEGURADO
    if (edad >= 18 && edad <25) {
      recargo_asegurado = precio_base * edad_18
    } else if (edad >= 25 && edad <50) {
      recargo_asegurado = precio_base * edad_25
    } else if (edad >= 50) {
      recargo_asegurado = precio_base * edad_50
    }
  
    // RECARGO POR LA EDAD DEL CÓNYUGE
    if (edad_conyuge >= 18 && edad_conyuge <25) {
      recargo_conyuge = precio_base * casado_18
    }  else if (edad_conyuge >= 25 && edad_conyuge <50) {
      recargo_conyuge = precio_base * casado_25
    } else if (edad_conyuge >= 50) {
      recargo_conyuge = precio_base * casado_50
    }
  
    // FUNCIÓN, OPERACIÓN DEL PRECIO FINAL Y MENSAJE DE LA COTIZACIÓN
    function cotizacion() {
      precio_final = precio_base + recargo_total
      alert("Para el asegurado " + nombre + "\n" +
      "Q." + recargo_total + " Recargo total" + "\n" +
      "Q." + precio_final + " Precio Final de la cotización")
    }
  
    // RECARGO TOTAL BASADO EN LAS RESPUESTAS INGRESADAS Y LLAMADO A LA FUNCIÓN COTIZACIÓN
    if ("SI" == casado.toUpperCase() && "SI" == hijos.toUpperCase()) {
      recargo_total = recargo_asegurado + recargo_conyuge + recargo_hijos
      cotizacion()
    } else if ("SI" == casado.toUpperCase()) {
      recargo_total = recargo_asegurado + recargo_conyuge
      cotizacion()
    } else if ("SI" == hijos.toUpperCase()) {
      recargo_total = recargo_asegurado + recargo_hijos
      cotizacion()
    } else {
      recargo_total = recargo_asegurado
      cotizacion()
    }
  } // CONDICIONAL POR SI SE INGRESA MAL ALGÚN DATO AL INICIO DEL PROGRAMA
    else {
    alert("no has ingresado correctamente los datos")
  } salir = prompt("Deseas realizar una nueva cotización Si/No")
}