//PRUEBA FILTROS ENTREGAS
function aplicacionDeFiltros() {

    let selectZona = document.getElementById("filtroZonaEntrega").value;
    let selectEstado = document.getElementById("filtroEstadoEntrega").value;

    const entregasFiltradas = paraFiltrar(selectZona, selectEstado)
    function paraFiltrar(selectZona, selectEstado) {
        if (selectZona != `Seleccione`) {
            if (selectEstado != `Seleccione`) {
                return entregas.filter(entregas => entregas.estado == selectEstado && entregas.zona == selectZona)
            } else {
                return entregas.filter(entregas => entregas.zona == selectZona)
            }
        } else {
            if (selectEstado != `Seleccione`) {
                return entregas.filter(entregas => entregas.estado == selectEstado)
            } else {
                return entregas
            }
        }
    }

    entregasFiltradas.forEach((entrega) => {
        let nuevaFilaClon = nuevaFila.cloneNode(true)
        section.appendChild(nuevaFilaClon)
        const { id, producto, zona, al, la, an, volumen, estado } = entrega
        nuevaFilaClon.children[0].innerText = id
        nuevaFilaClon.children[1].innerText = producto
        nuevaFilaClon.children[2].innerText = zona
        nuevaFilaClon.children[3].innerText = al
        nuevaFilaClon.children[4].innerText = an
        nuevaFilaClon.children[5].innerText = la
        nuevaFilaClon.children[6].innerText = volumen.toFixed(2)
        nuevaFilaClon.children[7].innerText = estado
    })

    let seleccionFiltroZona = document.getElementById("filtroZonaEntrega")
    seleccionFiltroZona.value = "Seleccione"

    let seleccionFiltroEstado = document.getElementById("filtroEstadoEntrega")
    seleccionFiltroEstado.value = "Seleccione"

}

function borradoDeFiltros() {
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

    let seleccionFiltroZona = document.getElementById("filtroZonaEntrega")
    seleccionFiltroZona.value = "Seleccione"

    let seleccionFiltroEstado = document.getElementById("filtroEstadoEntrega")
    seleccionFiltroEstado.value = "Seleccione"

}
