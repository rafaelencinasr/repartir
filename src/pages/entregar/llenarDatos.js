import supabase from '../../config/supabaseClient';

async function llenarDatos(id){
    //alert("Recibiendo datos de la entrega");
    const remision = document.querySelector("#remision")
    const cr_tienda = document.querySelector("#nombre")
    const blanco750 = document.querySelector("#blanco750")
    const blanco200 = document.querySelector("#blanco200")
    const factura = document.querySelector("#factura")
    const pago = document.querySelector("#pago")

    const {data, error} = await supabase
        .from('entregas')
        .select()
        .eq('id', id);

    if(error){
        alert("Error :(")
    }

    if(data.length>0){
        console.log(data[0]);
        remision.value = data[0].remision;
        console.log('cr_tienda actual: ' + cr_tienda.value);
        cr_tienda.value = data[0].cr_tienda;
        console.log('cr_tienda nuevo: ' + cr_tienda.value);
        blanco750.value = data[0].blanco750;
        blanco200.value = data[0].blanco200;
        factura.value = data[0].factura;
        pago.value = data[0].pago;

    }
}

export default llenarDatos;

