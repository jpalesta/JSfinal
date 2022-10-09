function isValidProducto(producto) {
    if (producto != ``) {
        return true
    } else {
        // Swal.fire(
        //     'ATENCION',
        //     'El campo PRODUCTO es requerido',
        //     'warning'
        // )
        falsos.push(`Producto`)
        console.log(falsos)
        return false
    }
}

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

function validacionFormularioNuevaEntrega() {

    let zona = document.getElementById("zona").value;
    const validZona = isValidZona(zona)

    let al = Number(document.getElementById("alto").value);
    const validAltura = isValidAltura(al)

    let an = Number(document.getElementById("ancho").value);
    const validAncho = isValidAncho(an)

    let la = Number(document.getElementById("largo").value);
    const validLargo = isValidLargo(la)

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
    } else {
        Swal.fire(
            'ATENCION',
            'Entrega no creada, verifique la información de ${falsos.value}',
            'warning'
        )
    }
}