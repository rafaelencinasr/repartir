import supabase from '../../config/supabaseClient';



async function registrarDatos(){
    const remision = document.querySelector("#remision").value;
    const cr_tienda = document.querySelector("#nombre").value;
    const blanco750 = document.querySelector("#blanco750").value;
    const blanco200 = document.querySelector("#blanco750").value;
    const factura = document.querySelector("#factura").value;
    const pago = document.querySelector("#pago").value;

    const {data, error} = await supabase
        .from('entregas')
        .insert([{remision, factura, pago, cr_tienda, blanco750, blanco200}])
        .select()

        if(error){
            alert("Error al enviar el registro:(")
        }

        if(data){
            console.log(data);
            alert("Registro enviado correctamente!");
        }
}

export default registrarDatos;




