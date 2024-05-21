function tiendaCard(tienda){
    const styledCard = document.createElement('div');
    styledCard.classList.add('styledCard');
    styledCard.dataset.tiendaId = `${tienda.id}`;
    styledCard.innerHTML = `
    <div class="sectionTitle">"${tienda.cr_tienda} - ${tienda.nombre}"</div>
    <div class="storeInformation">
        <div class="informationTitle">Ultima visita:
            <div class="ultimaVisitaInfo storeData">${tienda.created_at}</div>
        </div>
        <div class="informationTitle ruta">Ruta:
            <div class="rutaInfo storeData">${tienda.ruta}</div>
        </div>
        <div class="informationTitle direccion">Dirección:
            <div class="direccionInfo storeData">${tienda.direccion}</div>
        </div>
        <div class="informationTitle">Total 750 ml:
            <div class="direccionInfo storeData">${tienda.total750ml}</div>
        </div>
        <div class="informationTitle">Total 200 ml:
            <div class="direccionInfo storeData">${tienda.total200ml}</div>
        </div>

    </div>
    <div class="buttonsContainer">
        <button class="registrarBtn" onclick="location.href='./entregar.html?cr_tienda=${tienda.cr_tienda}';" type="button">Registrar entrega aquí</button>
        <button class="googlemapsBtn" onclick="location.href='${tienda.urlmaps}';" type="button" >Google maps</button>
        <button class="agregarrutaBtn">Agregar a ruta</button>
    </div>
    `;
    return styledCard;
}

export default tiendaCard;