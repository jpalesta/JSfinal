//Genero la base de datos y la mando al localstorage
//constructor y array de entregas de ejemplo
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
let entregas = [
    new Entrega(1, "Cama", 4, 60, 160, 200, 1.92),
    new Entrega(2, "Mueble TV", 2, 80, 45, 180, 0.65),
    new Entrega(3, "Mesa", 1, 75, 90, 160, 1.08),
    new Entrega(4, "Sillón", 3, 90, 70, 180, 1.13),
    new Entrega(5, "Caja", 4, 60, 40, 60, 0.14),
];
let entregasStr = JSON.stringify(entregas);
localStorage.setItem("arrayEntregas", entregasStr)

//Vista inicial
document.getElementById("formularioNuevaEntrega").style.display = "none";
document.getElementById("cardsMenuPrincipal").style.display = "initial";
document.getElementById("tablaEntregas").style.display = "none";


//defino variables para tabla de entregas
let section = document.getElementById("filas");
let temp = document.querySelector("template");
let nuevaFila = temp.content.getElementById("nuevaFila");

//botón Menú principal
const btnMenuPrincipal = document.getElementById("menuPrincipal");
btnMenuPrincipal.onclick = function () {
    document.getElementById("formularioNuevaEntrega").style.display = "none";
    document.getElementById("cardsMenuPrincipal").style.display = "initial";
    document.getElementById("tablaEntregas").style.display = "none";

    const btnConteoEntregasPendientes = document.getElementById("conteoEntregasPendientes")
    localStorage.getItem("arrayEntregas", entregasStr)
    entregas = JSON.parse(entregasStr);

    btnConteoEntregasPendientes.innerText = `${entregas.length}`


}

//REVISAR PORQUE LOS ALERTS APARECEN EN ORDEN INVERSO AL DE APARICION
//botón Nueva entrega
const btnNuevaEntrega = document.getElementById("nuevaEntrega");
btnNuevaEntrega.onclick = function () {
    document.getElementById("cardsMenuPrincipal").style.display = "none";
    document.getElementById("formularioNuevaEntrega").style.display = "initial";
    document.getElementById("tablaEntregas").style.display = "none";
}
const crearNuevaEntrega = document.getElementById("crearEntrega");
crearNuevaEntrega.onclick = function () {

    let producto = document.getElementById("producto").value;
    const validProducto = isValidProducto(producto);
    function isValidProducto(producto) {
        if (producto != ``) {
            return true
        }
        Swal.fire(
            'ATENCION',
            'El campo PRODUCTO es requerido',
            'warning'
        )
        return false
    }

    let zona = document.getElementById("zona").value;
    const validZona = isValidZona(zona)
    function isValidZona(zona) {
        if (zona == 1 || zona == 2 || zona == 3 || zona == 4) {
            return true
        }
        Swal.fire(
            'ATENCION',
            'Introduzca una zona válida',
            'warning'
        )
        return false
    }

    let al = Number(document.getElementById("alto").value);
    const validAltura = isValidAltura(al)
    function isValidAltura(al) {
        if (al != ``) {
            return true
        }
        Swal.fire(
            'ATENCION',
            'El campo Altura es requerido',
            'warning'
        )
        return false
    }

    let an = Number(document.getElementById("ancho").value);
    const validAncho = isValidAncho(an)
    function isValidAncho(an) {
        if (an != ``) {
            return true
        }
        Swal.fire(
            'ATENCION',
            'El campo Ancho es requerido',
            'warning'
        )
        return false
    }

    let la = Number(document.getElementById("largo").value);
    const validLargo = isValidLargo(la)
    function isValidLargo(la) {
        if (la != ``) {
            return true
        }
        Swal.fire(
            'ATENCION',
            'El campo Largo es requerido',
            'warning'
        )
        return false
    }   

    let volumen = (al * la * an) / 1000000;
    let estado = "Pendiente";

    function validacionFormularioNuevaEntrega() {
        if (validProducto == true && validZona == true && validAltura == true && validAncho == true && validLargo == true) {
            entregas.push(
                new Entrega(
                    entregas.length +1,
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
                timer: 2000
            })
            document.getElementById("producto").value = "";
            document.getElementById("alto").value = "";
            document.getElementById("ancho").value = "";
            document.getElementById("largo").value = "";
            document.getElementById("zona").value = "";

            entregasStr = JSON.stringify(entregas);
            localStorage.setItem("arrayEntregas", entregasStr)

        } 
    }

    validacionFormularioNuevaEntrega()

}

//boton visualizar entregas
const btnvisualizarEntregas = document.getElementById("verEntregas");
btnvisualizarEntregas.onclick = function () {
    document.getElementById("cardsMenuPrincipal").style.display = "none";
    document.getElementById("formularioNuevaEntrega").style.display = "none";
    document.getElementById("tablaEntregas").style.display = "initial";

    section.innerHTML = ''

    localStorage.getItem("arrayEntregas", entregasStr)
    entregas = JSON.parse(entregasStr);

    entregas.forEach((entrega) => {
        let nuevaFilaClon = nuevaFila.cloneNode(true)
        section.appendChild(nuevaFilaClon)
        nuevaFilaClon.children[0].innerText = entrega.id
        nuevaFilaClon.children[1].innerText = entrega.producto
        nuevaFilaClon.children[2].innerText = entrega.zona
        nuevaFilaClon.children[3].innerText = entrega.al
        nuevaFilaClon.children[4].innerText = entrega.an
        nuevaFilaClon.children[5].innerText = entrega.la
        nuevaFilaClon.children[6].innerText = entrega.volumen
        nuevaFilaClon.children[7].innerText = entrega.estado
    })
}



// class Vehiculo {
//     constructor(id, marca, modelo, al, an, la) {
//         this.id = id;
//         this.marca = marca;
//         this.modelo = modelo;
//         this.al = al;
//         this.an = an;
//         this.la = la;
//         this.volumen = (this.al * this.la * this.an) / 1000000;
//     }
// }
// class HojaDeRuta {
//     constructor(id, entregas, volumen, vehiculo, ocupacion) {
//         this.id = id;
//         this.entregas = entregas;
//         this.volumenEntregasZona = volumen;
//         this.vehiculo = vehiculo
//         this.ocupacion = ocupacion
//     }
// }
// //array de vehículos de ejemplo
// let vehiculos = [
//     new Vehiculo(1, "Renault", "Kangoo", 105, 115, 180),
//     new Vehiculo(2, "Mercedes", "Sprinter", 175, 150, 330),
// ];
// //array vacío de hojas de ruta para que genere el id y se vaya completando
// let hojasDeRuta = [];



//     let nuevaFilaClon = nuevaFila.cloneNode(true)
//     section.appendChild(nuevaFilaClon)
//     nuevaFilaClon.children[0].innerText = entregas.length
//     nuevaFilaClon.children[1].innerText = zona
//     nuevaFilaClon.children[2].innerText = altura
//     nuevaFilaClon.children[3].innerText = ancho
//     nuevaFilaClon.children[4].innerText = largo
//     nuevaFilaClon.children[5].innerText = (altura * ancho * largo) / 1000000

// }

// function crearNuevoVehiculo() {
//     let marca = prompt(`Ingrese la marca del vehículo`);
//     let modelo = prompt(`Ingrese el modelo del vehículo`);
//     let altura = Number(prompt(`Ingrese la Altura en centímetros`));
//     let ancho = Number(prompt(`Ingrese el Ancho en centímetros`));
//     let largo = Number(prompt(`Ingrese el Largo en centímetros`));

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



// let section = document.getElementById("filas");
// let temp = document.querySelector("template");
// let nuevaFila = temp.content.querySelector("tr");

// function mostrarEntregas() {
//     entregas.forEach((entrega) => {
//         let nuevaFilaClon = nuevaFila.cloneNode(true)
//         section.appendChild(nuevaFilaClon)
//         nuevaFilaClon.children[0].innerText = entrega.id
//         nuevaFilaClon.children[1].innerText = entrega.zona
//         nuevaFilaClon.children[2].innerText = entrega.al
//         nuevaFilaClon.children[3].innerText = entrega.an
//         nuevaFilaClon.children[4].innerText = entrega.la
//         nuevaFilaClon.children[5].innerText = entrega.volumen
//     })
// }


// const boton = document.getElementById("nuevaEntrega");
// boton.onclick = function () {



// function crearNuevaHojaDeRuta() {

//     elegirZona();

//     let listadoEntregasPendientesPorZona = entregas.filter(
//         (entrega) => entrega.zona == zona && entrega.pendiente === true
//     );

//     let volumenEntregasZona = 0
//     for (let i = 0; i < listadoEntregasPendientesPorZona.length; i++) {
//         let va = listadoEntregasPendientesPorZona[i]
//         volumenEntregasZona = (volumenEntregasZona + va.volumen);
//     };

//     //tengo que ver como hacer que esta selección sea dinámica, es decir, que se modifiquen las opciones de vehículos en función de los vehículos disponibles
//     vh = Number(
//         prompt(`Seleccione el vehículo:
//         1: RN KANGOO
//         2: MZ SPRINTER
//         `)
//     );

//     let vehiculoElegido = vehiculos.find((vehiculo) => vehiculo.id === vh);

//     let ocupacion = (volumenEntregasZona / vehiculoElegido.volumen) * 100;

//     hojasDeRuta.push(
//         new HojaDeRuta(
//             (id = hojasDeRuta.length + 1),
//             (entregas = listadoEntregasPendientesPorZona),
//             (volumen = volumenEntregasZona),
//             (vehiculo = vehiculoElegido),
//             //no supe como mostrar la ocupación con el sigo de porcentaje al lado
//             (ocupacion = ocupacion.toFixed(2))
//         )
//     );
//     console.log(hojasDeRuta)

//     elegirFuncion()
// };

// //Los muestros con consola porque no encontré de que manera mostrarlo que no sea uno por uno con alerts y no me pareció práctico, imagino que con DOM se va a poder mostrar más facil
// function verEntregasPendientesPorZona() {
//     elegirZona();
//     const listadoEntregasPendientesPorZona = entregas.filter(
//         (entrega) => entrega.zona == zona && entrega.pendiente === true
//     );
//     //Este lo había puesto para estar seguro que me filtraba y me olvidé de sacarlo
//     console.log(listadoEntregasPendientesPorZona);
//     let listado = ``
//     for (const ep of listadoEntregasPendientesPorZona) {
//         listado += `Entrega N°: ` + ep.id + ` Zona: ` + ep.zona + ` Volumen: ` + ep.volumen + `\n`
//     }
//     alert(listado)

//     // elegirFuncion();
// }

// //ídem entregasPendientes
// function verListadoDeVehiculos() {
//     const listadoDeVehiculos = vehiculos.sort((v1, v2) => {
//         if (v1.marca < v2.marca) {
//             return -1;
//         } else if (v1.marca > v2.marca) {
//             return 1;
//         } else {
//             return 0;
//         }
//     });
//     console.log(listadoDeVehiculos);

//     // elegirFuncion();