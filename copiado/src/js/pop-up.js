let btnAbrirPopup = document.getElementById('btn-abrir-pop1'),//variable del botón para abrir la ventana
    overlay = document.getElementById('overlay'), // variable de la visibilidad
    popup = document.getElementById('popup'), //  variable de la propia ventana
    btnCerrarPopup = document.getElementById('btn-cerrar-popup1');// variable del botón para cerrar la ventana

//getElementById(): nos permite acceder a elementos HTML a los que hemos asignado un identificador con el atributo HTML id

btnAbrirPopup.addEventListener('click', function () {
    overlay.classList.add('activo');
    popup.classList.add('activo');

});// Quiero un addeventlistener que cuando presione un click me ejecute esta función. Agregar dos eventos, es decir,cuando presione el botón me añada la clase activo del overlay.Cuando la tiene, permite que esté visible. Quiero que el overlay tenga un cambio en sus clases con el classLiss.add.

btnCerrarPopup.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.classList.remove('activo');
    popup.classList.remove('activo');
});
window.onload = function () {
    window.datos = [];//El evento onload se usa para ejecutar una función de JavaScript tan pronto como una página haya cargado.
}

function agregarElemento() {
    let nuevoElemento = document.getElementById('Nombre_input').value;//1º-getElementById(): nos permite acceder a elementos HTML a los que hemos asignado un identificador con el atributo HTML id

    datos.push(nuevoJugador);//2ºEl método push() añade uno o más elementos al final de un array
    mostrarArreglo();


}

function mostrarArreglo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (const nuevoJugador of datos) {
        let datoParrafo = document.createElement('p');// crea un elemento en forma de "p"
        datoParrafo.innerText = nuevoJugador;//luego no se generan nodos en el DOM sino se muestran dichos caracteres en la página.
        resultado.appendChild(datoParrafo);//  Como su propio nombre indica, este método realiza un «append», es decir, inserta o elimina el elemento.
    }
}

function eliminarElemento() {
    let nuevoJugador = document.getElementById('Nombre_input').value;
    datos.pop();//El método pop() elimina el último elemento de un array
    mostrarArreglo();

}



