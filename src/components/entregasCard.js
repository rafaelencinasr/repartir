function entregasCard(entrega){
    const styledCard = document.createElement('div');
    styledCard.classList.add('styledCard');
    styledCard.dataset.entrega = `${entrega.id}`;
    styledCard.innerHTML = `
    <div class="entregaContainer">
        <div class="sectionTitle">"${entrega.cr_tienda}"</div>
        <div class="informationTitle fecha">Fecha:
            <div class="ultimaVisitaInfo storeData">${entrega.created_at}</div>
        </div>
        <div class="informationTitle remision">Remisión:
            <div class="rutaInfo storeData">${entrega.remision}</div>
        </div>
        <div class="informationTitle 750ml">750 ml:
            <div class="direccionInfo storeData">${entrega.blanco750}</div>
        </div>
        <div class="informationTitle 200ml">200 ml:
            <div class="direccionInfo storeData">${entrega.blanco200}</div>
        </div>
        <div class="informationTitle factura">Factura:
            <div class="direccionInfo storeData">${entrega.factura? entrega.factura: '-'}</div>
        </div>
        <div class="informationTitle pago">Pago:
            <div class="direccionInfo storeData">${entrega.pago? entrega.pago: '-'}</div>
        </div>
        <div class="editContainer">
            <span class="material-symbols-outlined">
                edit
            </span>
        </div>
    </div>
    `;
    styledCard.addEventListener("click",()=>{
        console.log('Clicked on card with id: ' + entrega.id);
        document.location.href = `./entregar.html?editarEntrega=true&entregaId=${entrega.id}`;
    })
    return styledCard;
}

export default entregasCard;