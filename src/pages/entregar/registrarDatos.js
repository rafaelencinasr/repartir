import supabase from '../../config/supabaseClient';



async function registrarDatos(fromRuta, ruta){
    //alert("Intentando enviar datos");
    const remision = document.querySelector("#remision").value;
    const cr_tienda = document.querySelector("#nombre").value;
    const blanco750 = document.querySelector("#blanco750").value;
    const blanco200 = document.querySelector("#blanco200").value;
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
            if(fromRuta){
                document.location.href=`./ruta.html?ruta=${ruta}`;
            }
            document.querySelector("#blanco750").value = 0;
            document.querySelector("#blanco200").value = 0;
        }


}

export default registrarDatos;




