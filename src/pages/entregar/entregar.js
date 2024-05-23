import '../../style.css';
import './entregar.css';
import dropdownOption from '../../components/dropdownOption';
import registrarDatos from './registrarDatos';
import llenarDatos from './llenarDatos.js';
import supabase from '../../config/supabaseClient';
import navbarInsert from '../../components/navbar.js';
import actualizarDatos from './actualizarDatos.js';



const selectNombre = document.querySelector("#nombre");

const guardarBtn = document.querySelector("#guardarBtn");

let params = new URL(document.location).searchParams; //Se revisa el URL para obtener el cr_tienda 
let param_cr_tienda = params.get("cr_tienda"); // Se extrae especificamente el valor de cr_tienda=
//console.log("cr_tienda= " + param_cr_tienda);

let param_fromRuta = params.get("fromRuta");
param_fromRuta = (param_fromRuta === 'true');
//console.log(param_fromRuta);
let param_ruta = params.get("ruta");

let param_editarEntrega = params.get("editarEntrega");
param_editarEntrega = (param_editarEntrega === 'true');
//console.log(param_editarEntrega);
let param_entregaId = params.get("entregaId");
//console.log(param_entregaId);

async function getCRNombre(){
    const {data, error} = await supabase
        .from('tiendas')
        .select()
        .order('id', {ascending: true});

        if(error){
            alert("Error :(")
        }

        if(data.length>0){
            selectNombre.innerHTML='';
            //console.log(data);
            data.forEach((tienda)=>{
                selectNombre.append(dropdownOption(tienda));
            })
            if(param_cr_tienda){
                selectNombre.value = param_cr_tienda;
                //console.log( selectNombre.value);
            }
            changeDireccionValue();
        }
}

getCRNombre();



function changeDireccionValue(){
    //console.log(selectNombre.value);
    getDireccion(selectNombre.value);
}

selectNombre.addEventListener('change', ()=>{
    changeDireccionValue();
})

async function getDireccion(cr_tienda){
    console.log(cr_tienda + " from getDireccion");
    const {data, error} = await supabase
        .from('tiendas')
        .select()
        .eq('cr_tienda', cr_tienda)

        if(error){
            alert("Error :(")
        }

        if(data){
            //console.log(data);
            const direccion = document.querySelector("#direccion");
            direccion.textContent = data[0].direccion;
            //console.log(data[0].direccion);
        }
}

guardarBtn.addEventListener("click", ()=>{
    if(param_editarEntrega){
        actualizarDatos(param_entregaId);
        console.log("Click en boton de actualizar datos!")
    }
    else{
        registrarDatos(param_fromRuta, param_ruta);
    }
})


navbarInsert();

if(param_editarEntrega){
    setTimeout(()=>{
        document.querySelector('#entregasTitle').textContent = "Editar entrega";
        document.querySelector('#guardarBtn').textContent = 'Actualizar datos';
        llenarDatos(param_entregaId);
        setTimeout(() => {
            changeDireccionValue(); 
        }, 700);
    },1000)
}
