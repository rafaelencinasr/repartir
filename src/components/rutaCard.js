function rutaCard(tienda){
    const styledCard = document.createElement('div');
    styledCard.classList.add('styledCard');
    styledCard.dataset.tiendaId = `${tienda.id}`;
    styledCard.innerHTML = `
    <div class="dragContainer">
        <span class="material-symbols-outlined">
            drag_handle
        </span>
    </div>
    <div class="deleteContainer">
        <span class="material-symbols-outlined">
            delete
        </span>
    </div>
    <div class="sectionTitle">"${tienda.cr_tienda} - ${tienda.nombre}"</div>
    <div class="storeInformation">
        <div class="informationTitle direccion">Dirección:
            <div class="direccionInfo storeData">${tienda.direccion}</div>
        </div>            
    </div>
    <div class="buttonsContainer">
        <button class="registrarBtn" onclick="location.href='./entregar.html?cr_tienda=${tienda.cr_tienda}&fromRuta=true&ruta=${tienda.ruta}';" type="button">Entrega aquí</button>
        <button class="googlemapsBtn" onclick="location.href='${tienda.urlmaps}';" type="button" >Google maps</button>
    </div>
    `;
    return styledCard;
}

export default rutaCard;