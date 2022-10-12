//ENTREGAS
class Entrega {
    constructor(id, producto, zona, al, an, la, volumen) {
        this.id = id;
        this.producto = producto
        this.zona = zona;
        this.al = al;
        this.an = an;
        this.la = la;
        this.volumen = volumen;
        this.estado = "Pendiente";
    }
}

//Traigo las entregas del Json y las mando al localStorage
let entregasJson

async function fetchEntregas() {
    const respuesta = await fetch(`./json/entregas.json`)
    return await respuesta.text()
}

fetchEntregas().then(entregas => {
    entregasJson = entregas
    localStorage.setItem("arrayEntregasJson", entregasJson)

})

//botón Nueva entrega
const btnNuevaEntrega = document.getElementById("nuevaEntrega");
btnNuevaEntrega.onclick = function () {
    document.getElementById("cardsMenuPrincipal").style.display = "none";
    document.getElementById("formularioNuevaEntrega").style.display = "initial";
    document.getElementById("tablaEntregas").style.display = "none";
    document.getElementById("formularioNuevoVehiculo").style.display = "none";
    document.getElementById("tablaVehiculos").style.display = "none";
}

const crearNuevaEntrega = document.getElementById("crearEntrega");
crearNuevaEntrega.onclick = function () {

    let producto = document.getElementById("producto").value;
    const validProducto = isValidProducto(producto);
    function isValidProducto(producto) {
        if (producto != ``) {
            return true
        } else {
            // Swal.fire(
            //     'ATENCION',
            //     'El campo PRODUCTO es requerido',
            //     'warning'
            // )
            return false
        }
    }

    let zona = document.getElementById("zona").value;
    const validZona = isValidZona(zona)
    function isValidZona(zona) {
        if (zona == 1 || zona == 2 || zona == 3 || zona == 4) {
            return true
        } else {
            // Swal.fire(
            //     'ATENCION',
            //     'Introduzca una zona válida',
            //     'warning'
            // )
            return false
        }
    }

    let al = Number(document.getElementById("alto").value);
    const validAltura = isValidAltura(al)
    function isValidAltura(al) {
        if (al != ``) {
            return true
        } else {
            // Swal.fire(
            //     'ATENCION',
            //     'El campo Altura es requerido',
            //     'warning'
            // )
            return false
        }
    }

    let an = Number(document.getElementById("ancho").value);
    const validAncho = isValidAncho(an)
    function isValidAncho(an) {
        if (an != ``) {
            return true
        } else {
            // Swal.fire(
            //     'ATENCION',
            //     'El campo Ancho es requerido',
            //     'warning'
            // )
            return false

        }
    }

    let la = Number(document.getElementById("largo").value);
    const validLargo = isValidLargo(la)
    function isValidLargo(la) {
        if (la != ``) {
            return true
        } else {
            // Swal.fire(
            //     'ATENCION',
            //     'El campo Largo es requerido',
            //     'warning'
            // )
            return false
        }
    }

    let volumen = (al * la * an) / 1000000;
    let estado = "Pendiente";

    function validacionFormularioNuevaEntrega() {
        if (validProducto == true && validZona == true && validAltura == true && validAncho == true && validLargo == true) {
            entregas.push(
                new Entrega(
                    entregas.length + 1,
                    producto,
                    zona,
                    al,
                    an,
                    la,
                    volumen,
                    estado
                )
            )
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'La entrega fue creada correctamente',
                showConfirmButton: false,
                timer: 1000
            })
            document.getElementById("producto").value = "";
            document.getElementById("alto").value = "";
            document.getElementById("ancho").value = "";
            document.getElementById("largo").value = "";
            document.getElementById("zona").value = "Seleccione";

            entregasJson = JSON.stringify(entregas);
            localStorage.setItem("arrayEntregasJson", entregasJson)
        } else {

            const falsos = ["lalalala", "lalala", "lalala"]
            Swal.fire(
                'ATENCION',
                'Entrega no creada, verifique la información de "+falsos+"',
                'warning'
            )
        }
    }

    validacionFormularioNuevaEntrega()
}

//defino variables para tabla de entregas
let section = document.getElementById("filas");
let temp = document.querySelector("#filasTemp");
let nuevaFila = temp.content.getElementById("nuevaFila");

//boton visualizar entregas
const btnvisualizarEntregas = document.getElementById("verEntregas");
btnvisualizarEntregas.onclick = function () {
    document.getElementById("cardsMenuPrincipal").style.display = "none";
    document.getElementById("formularioNuevaEntrega").style.display = "none";
    document.getElementById("tablaEntregas").style.display = "initial";
    document.getElementById("formularioNuevoVehiculo").style.display = "none";
    document.getElementById("tablaVehiculos").style.display = "none";
    section.innerHTML = ''

    entregas.forEach((entrega) => {
        let nuevaFilaClon = nuevaFila.cloneNode(true)
        section.appendChild(nuevaFilaClon)
        const { id, producto, zona, al, la, an, volumen, estado } = entrega
        nuevaFilaClon.children[0].innerText = id
        nuevaFilaClon.children[1].innerText = producto
        nuevaFilaClon.children[2].innerText = zona
        nuevaFilaClon.children[3].innerText = al
        nuevaFilaClon.children[4].innerText = an
        nuevaFilaClon.children[5].innerText = la
        nuevaFilaClon.children[6].innerText = volumen
        nuevaFilaClon.children[7].innerText = estado
    })
}

//VEHICULOS
class Vehiculo {
    constructor(idVehiculo, marca, modelo, alVehiculo, anVehiculo, laVehiculo, volumenVehiculo) {
        this.idVehiculo = idVehiculo;
        this.marca = marca
        this.modelo = modelo;
        this.alVehiculo = alVehiculo;
        this.anVehiculo = anVehiculo;
        this.laVehiculo = laVehiculo;
        this.volumenVehiculo = volumenVehiculo;
    }
}

//Traigo los vehículos del Json y las mando al localstorage
let vehiculosJson

async function fetchVehiculos() {
    const respuesta1 = await fetch(`./json/vehiculos.json`)
    return await respuesta1.text()
}

fetchVehiculos().then(vehiculos => {
    vehiculosJson = vehiculos
    localStorage.setItem("arrayVehiculosJson", vehiculosJson)

})

let vehiculos = localStorage.getItem("arrayVehiculosJson", vehiculosJson)
vehiculos = JSON.parse(vehiculos)

//botón Nuevo vehículo
const btnNuevoVehiculo = document.getElementById("nuevoVehiculo");
btnNuevoVehiculo.onclick = function () {
    document.getElementById("cardsMenuPrincipal").style.display = "none";
    document.getElementById("formularioNuevaEntrega").style.display = "none";
    document.getElementById("tablaEntregas").style.display = "none";
    document.getElementById("formularioNuevoVehiculo").style.display = "initial";
    document.getElementById("tablaVehiculos").style.display = "none";
}

//defino variables para tabla de vehículos
let sectionVehiculos = document.getElementById("filasVehiculos");
let tempVehiculos = document.querySelector("#tempVehiculos");
let nuevaFilaVehiculos = tempVehiculos.content.getElementById("nuevaFilaVehiculos");

//boton visualizar vehiculos
const btnvisualizarVehiculos = document.getElementById("verVehiculos");
btnvisualizarVehiculos.onclick = function () {
    document.getElementById("cardsMenuPrincipal").style.display = "none";
    document.getElementById("formularioNuevaEntrega").style.display = "none";
    document.getElementById("tablaEntregas").style.display = "none";
    document.getElementById("formularioNuevoVehiculo").style.display = "none";
    document.getElementById("tablaVehiculos").style.display = "initial";
    sectionVehiculos.innerHTML = ''

    console.log(vehiculos)
    vehiculos.forEach((vehiculo) => {
        let nuevaFilaVehiculosClon = nuevaFilaVehiculos.cloneNode(true)
        sectionVehiculos.appendChild(nuevaFilaVehiculosClon)
        const { idVehiculo, marca, modelo, año, alVehiculo, anVehiculo, laVehiculo, volumenVehiculo } = vehiculo
        nuevaFilaVehiculosClon.children[0].innerText = idVehiculo
        nuevaFilaVehiculosClon.children[1].innerText = marca
        nuevaFilaVehiculosClon.children[2].innerText = modelo
        nuevaFilaVehiculosClon.children[3].innerText = año
        nuevaFilaVehiculosClon.children[4].innerText = alVehiculo
        nuevaFilaVehiculosClon.children[5].innerText = anVehiculo
        nuevaFilaVehiculosClon.children[6].innerText = laVehiculo
        nuevaFilaVehiculosClon.children[7].innerText = volumenVehiculo
    })
}

//VISTA INICIAL
//Defino variables para las cards de la vista inicial 
let entregas = localStorage.getItem("arrayEntregasJson", entregasJson)
entregas = JSON.parse(entregas)

let entregasPendientes = entregas.filter(pendientes => pendientes.estado === "Pendiente")

let entregasEnRuteo = entregas.filter(pendientes => pendientes.estado === "En ruteo")

let entregasRealizadas = entregas.filter(pendientes => pendientes.estado === "Realizada")

//Defino que se ve en la primer pantalla
document.getElementById("formularioNuevaEntrega").style.display = "none";
document.getElementById("cardsMenuPrincipal").style.display = "initial";
document.getElementById("tablaEntregas").style.display = "none";
document.getElementById("formularioNuevoVehiculo").style.display = "none";
document.getElementById("tablaVehiculos").style.display = "none";

const btnConteoEntregasPendientes = document.getElementById("conteoEntregasPendientes")

btnConteoEntregasPendientes.innerText = `${entregasPendientes.length}`

const btnConteoEntregasEnRuteo = document.getElementById("conteoEntregasEnRuteo")

btnConteoEntregasEnRuteo.innerText = `${entregasEnRuteo.length}`

const btnConteoEntregasRealizadas = document.getElementById("conteoEntregasRealizadas")

btnConteoEntregasRealizadas.innerText = `${entregasRealizadas.length}`

//botón Menú principal
const btnMenuPrincipal = document.getElementById("menuPrincipal");
btnMenuPrincipal.onclick = function () {
    document.getElementById("formularioNuevaEntrega").style.display = "none";
    document.getElementById("cardsMenuPrincipal").style.display = "initial";
    document.getElementById("tablaEntregas").style.display = "none";
    document.getElementById("formularioNuevoVehiculo").style.display = "none";
    document.getElementById("tablaVehiculos").style.display = "none";

    entregas = localStorage.getItem("arrayEntregasJson", entregasJson)
    entregas = JSON.parse(entregas)

    entregasPendientes = entregas.filter(pendientes => pendientes.estado === "Pendiente")

    entregasEnRuteo = entregas.filter(pendientes => pendientes.estado === "En ruteo")

    entregasRealizadas = entregas.filter(pendientes => pendientes.estado === "Realizada")

    btnConteoEntregasPendientes.innerText = `${entregasPendientes.length}`

    btnConteoEntregasEnRuteo.innerText = `${entregasEnRuteo.length}`

    btnConteoEntregasRealizadas.innerText = `${entregasRealizadas.length}`
}



// class HojaDeRuta {
//     constructor(id, entregas, volumen, vehiculo, ocupacion) {
//         this.id = id;
//         this.entregas = entregas;
//         this.volumenEntregasZona = volumen;
//         this.vehiculo = vehiculo
//         this.ocupacion = ocupacion
//     }
// }

//     vehiculos.push(
//         new Vehiculo(
//             vehiculos.length + 1,
//             marca,
//             modelo,
//             altura,
//             ancho,
//             largo
//         )
//     );
//     alert("El vehículo fue agregado con éxito");
//     elegirFuncion();
// }

