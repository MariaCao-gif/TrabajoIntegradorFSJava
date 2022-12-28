// definicion de constantes
const btnClickPrecio = document.getElementById("calculoPrecio");
const btnRedireccion1 = document.getElementById("paginaPrincipal1");
const btnRedireccion2 = document.getElementById("paginaPrincipal2");
const btnRedireccion3 = document.getElementById("principalOradores");
const btnRedireccion4 = document.getElementById("principalLugarFecha");
const btnRedireccion5 = document.getElementById("principalSerOrador");
const btnFinCompra = document.getElementById("confirmacion");

// funciones
function calculoPago() {
    var descuentoAplicado = document.getElementById("descuentoAplicado").value;
    var cantTickets = document.getElementById("cantTickets").value;
    if (descuentoAplicado === "Sin descuento") {
        pagoFinal = cantTickets * 200
        document.getElementById("pagoTotal").innerHTML = pagoFinal
    };
    if (descuentoAplicado === "Estudiante") {
        pagoFinal = cantTickets * (200 - (200 * 0.8))
        document.getElementById("pagoTotal").innerHTML = pagoFinal
    };
    if (descuentoAplicado === "Trainee") {
        pagoFinal = cantTickets * (200 * 0.5)
        document.getElementById("pagoTotal").innerHTML = pagoFinal
    };
    if (descuentoAplicado === "Junior") {
        pagoFinal = cantTickets * (200 - (200 * 0.15))
        document.getElementById("pagoTotal").innerHTML = pagoFinal
    };
};
function redireccionamientoPrincipal() {
    window.location = "../index.html";
};
function redireccionamientoOradores() {
    window.location = "../index.html#oradores";
};
function redireccionamientoLugarFecha() {
    window.location = "../index.html#honolulu";
};
function redireccionamientoSerOrador() {
    window.location = "../index.html#formulario";
};
function finCompra() {
    if ( //todas las condiciones se cumplen
        (!document.getElementById("nombre").value == "") &&
        (!document.getElementById("apellido").value == "") &&
        (!document.getElementById("email").value == "") &&
        (!document.getElementById("cantTickets").value == "")
    ) {
        alert("¡Gracias por tu compra!\nTe enviaremos toda la información al mail ingresado");
    }
    else {
        alert("Por favor, complete todos los campos");
    }
};

// eventos en botones
btnClickPrecio.addEventListener("click", calculoPago);
btnRedireccion1.addEventListener("click", redireccionamientoPrincipal);
btnRedireccion2.addEventListener("click", redireccionamientoPrincipal);
btnRedireccion3.addEventListener("click", redireccionamientoOradores);
btnRedireccion4.addEventListener("click", redireccionamientoLugarFecha);
btnRedireccion5.addEventListener("click", redireccionamientoSerOrador);
btnFinCompra.addEventListener("click", finCompra);