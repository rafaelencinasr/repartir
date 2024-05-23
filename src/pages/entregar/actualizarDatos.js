import supabase from '../../config/supabaseClient';



async function actualizarDatos(id){
    alert("Intentando actualizar datos");
    const remision = document.querySelector("#remision").value;
    const cr_tienda = document.querySelector("#nombre").value;
    const blanco750 = document.querySelector("#blanco750").value;
    const blanco200 = document.querySelector("#blanco200").value;
    const factura = document.querySelector("#factura").value;
    const pago = document.querySelector("#pago").value;

    const {data, error} = await supabase
        .from('entregas')
        .update([{remision: remision, factura: factura, pago: pago, blanco750: blanco750, blanco200: blanco200}])
        .eq('id',id)
        .select()

        if(error){
            alert("Error al enviar el registro:(")
        }

        if(data){
            console.log(data);
            alert("Registro actualizado correctamente!");
        }
}

export default actualizarDatos;

