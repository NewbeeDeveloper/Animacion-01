// Definimos si se debe mostrar el mensaje     
var mostrarMensaje = true;     
// Definimos el mensaje a mostrar     
var mensaje = "Botones del Mouse deshabilitados";         
/* Creamos una función para que se ejecute ante el evento onmousedown    es decir, cada vez que se presiona un botón del mouse, ya sea el izquierdo,    el derecho o la rueda */
function noClick() {
  if (mostrarMensaje) {
    alert(mensaje);
  }
}       
 
// Llamamos a la función cada vez que se presiona un botón         
document.onmousedown = noClick;         
 
/* Ante el evento oncontextmenu creamos un nuevo objeto (función)        para que anule el menú contextual del navegador */
document.oncontextmenu = new Function("return false");
