function validacionFormularioNuevaEntrega() {

    let producto = document.getElementById("producto").value;
    const validProducto = isValidProducto(producto);
    function isValidProducto(producto) {
        if (producto != ``) {
            return true
        } else {
            document.getElementById("errorFormularioNuevaEntregaProducto").style.display = "initial";
            return false
        }
    }

    let zona = document.getElementById("zona").value;
    const validZona = isValidZona(zona)
    function isValidZona(zona) {
        if (zona != `Seleccione`) {
            return true
        } else {
            document.getElementById("errorFormularioNuevaEntregaZona").style.display = "initial";
            return false
        }
    }

    let al = Number(document.getElementById("alto").value);
    const validAltura = isValidAltura(al)
    function isValidAltura(al) {
        if (al != ``) {
            return true
        } else {
            document.getElementById("errorFormularioNuevaEntregaAltura").style.display = "initial";
            return false
        }
    }

    let an = Number(document.getElementById("ancho").value);
    const validAncho = isValidAncho(an)
    function isValidAncho(an) {
        if (an != ``) {
            return true
        } else {
            document.getElementById("errorFormularioNuevaEntregaAncho").style.display = "initial";

            return false
        }
    }

    let la = Number(document.getElementById("largo").value);
    const validLargo = isValidLargo(la)
    function isValidLargo(la) {
        if (la != ``) {
            return true
        } else {
            document.getElementById("errorFormularioNuevaEntregaLargo").style.display = "initial";
            return false
        }
    }

    let volumen = (al * la * an) / 1000000;
    let estado = "Pendiente";


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

        //Oculto mensajes de error
        document.getElementById("errorFormularioNuevaEntregaProducto").style.display = "none";
        document.getElementById("errorFormularioNuevaEntregaZona").style.display = "none";
        document.getElementById("errorFormularioNuevaEntregaAltura").style.display = "none";
        document.getElementById("errorFormularioNuevaEntregaAncho").style.display = "none";
        document.getElementById("errorFormularioNuevaEntregaLargo").style.display = "none";

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'La entrega fue creada correctamente ${zona}',
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
    } 
}

function validacionFormularioNuevoVehiculo() {

    let marca = document.getElementById("marca").value;
    const validMarca = isValidMarca(marca);
    function isValidMarca(marca) {
        if (marca != ``) {
            return true
        } else {
            document.getElementById("errorFormularioNuevoVehiculoMarca").style.display = "initial";
            return false
        }
    }
    let modelo = document.getElementById("modelo").value;
    const validModelo = isValidModelo(modelo);
    function isValidModelo(modelo) {
        if (modelo != ``) {
            return true
        } else {
            document.getElementById("errorFormularioNuevoVehiculoModelo").style.display = "initial";
            return false
        }
    }
    let año = document.getElementById("año").value;
    const validAño = isValidAño(año);
    function isValidAño(año) {
        if (año != ``) {
            return true
        } else {
            document.getElementById("errorFormularioNuevoVehiculoAño").style.display = "initial";
            return false
        }
    }
    let alVehiculo = document.getElementById("alturaVehiculo").value;
    const validAlVehiculo = isValidAlVehiculo(alVehiculo);
    function isValidAlVehiculo(alVehiculo) {
        if (alVehiculo != ``) {
            return true
        } else {
            document.getElementById("errorFormularioNuevoVehiculoAlto").style.display = "initial";
            return false
        }
    }
    let anVehiculo = document.getElementById("anchoVehiculo").value;
    const validAnVehiculo = isValidAnVehiculo(anVehiculo);
    function isValidAnVehiculo(anVehiculo) {
        if (anVehiculo != ``) {
            return true
        } else {
            document.getElementById("errorFormularioNuevoVehiculoAncho").style.display = "initial";
            return false
        }
    }
    let laVehiculo = document.getElementById("largoVehiculo").value;
    const validlaVehiculo = isValidLaVehiculo(laVehiculo);
    function isValidLaVehiculo(laVehiculo) {
        if (laVehiculo != ``) {
            return true
        } else {
            document.getElementById("errorFormularioNuevoVehiculoLargo").style.display = "initial";
            return false
        }
    }

    let volumenVehiculo = (alVehiculo * laVehiculo * anVehiculo) / 1000000;

    if (validMarca == true && validModelo == true && validAño == true && validAlVehiculo == true && validAnVehiculo == true && validlaVehiculo== true) {
        vehiculos.push(
            new Vehiculo(
                vehiculos.length +1,
                marca,
                modelo,
                año,
                alVehiculo,
                anVehiculo,
                laVehiculo,
                volumenVehiculo
            )
        )

    //Oculto mensajes de error
    document.getElementById("errorFormularioNuevoVehiculoMarca").style.display = "none";
    document.getElementById("errorFormularioNuevoVehiculoModelo").style.display = "none";
    document.getElementById("errorFormularioNuevoVehiculoAño").style.display = "none";
    document.getElementById("errorFormularioNuevoVehiculoAlto").style.display = "none";
    document.getElementById("errorFormularioNuevoVehiculoAncho").style.display = "none";
    document.getElementById("errorFormularioNuevoVehiculoLargo").style.display = "none";

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El Vehiculo fue creado con éxito',
            showConfirmButton: false,
            timer: 1000
        })
        document.getElementById("modelo").value = "";
        document.getElementById("marca").value = "";
        document.getElementById("año").value = "";
        document.getElementById("alturaVehiculo").value = "";
        document.getElementById("largoVehiculo").value = "";
        document.getElementById("anchoVehiculo").value = "";


        vehiculosJson = JSON.stringify(vehiculos);
        localStorage.setItem("arrayVehiculosJson", vehiculosJson)
    }
}