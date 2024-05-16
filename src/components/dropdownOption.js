function  dropdownOption(tienda){
    const option = document.createElement('option');
    option.value = tienda.cr_tienda;
    option.textContent = `${tienda.cr_tienda} - ${tienda.nombre}`;

    return option;
}

export default dropdownOption;