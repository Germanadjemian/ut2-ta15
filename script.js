function eliminarUltimoElemento() {
    const lista = document.getElementById("lista");
    // Obtiene el último elemento de la lista
    const ultimoElemento = lista.lastElementChild;
    // Verifica si hay elementos en la lista antes de intentar eliminar, aunque no se porque me lo tomaba como existente pero undefined
    if (ultimoElemento) {
        lista.removeChild(ultimoElemento);
    } else {
        console.log("No hay elementos para eliminar.");
    }
}
boton = document.getElementById("eliminar");
console.log(typeof(boton))
boton.addEventListener("click", eliminarUltimoElemento);

