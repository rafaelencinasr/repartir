import './entregar.css';
import '../../style.css';
import dropdownOption from '../../components/dropdownOption';
import registrarDatos from './registrarDatos';
import supabase from '../../config/supabaseClient';

console.log("Entregar!");

const selectNombre = document.querySelector("#nombre");
const direccion = document.querySelector("#direccion");
const guardarBtn = document.querySelector("#guardarBtn");

let params = new URL(document.location).searchParams; //Se revisa el URL para obtener el cr_tienda 
let param_cr_tienda = params.get("cr_tienda"); // Se extrae especificamente el valor de cr_tienda=
console.log("cr_tienda= " + param_cr_tienda);
let param_fromRuta = params.get("fromRuta");
param_fromRuta = (param_fromRuta === 'true');
console.log(param_fromRuta);

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
            console.log(data);
            data.forEach((tienda)=>{
                selectNombre.append(dropdownOption(tienda));
            })
            if(param_cr_tienda){
                selectNombre.value = param_cr_tienda;
            }
            changeDireccionValue();
        }
}

getCRNombre();

function changeDireccionValue(){
    getDireccion(selectNombre.value);
}

selectNombre.addEventListener('change', ()=>{
    changeDireccionValue();
})

async function getDireccion(cr_tienda){
    const {data, error} = await supabase
        .from('tiendas')
        .select()
        .eq('cr_tienda', cr_tienda)

        if(error){
            alert("Error :(")
        }

        if(data){
            direccion.textContent=data[0].direccion;
            console.log(data[0].direccion);
        }
}

guardarBtn.addEventListener("click", ()=>{
    registrarDatos(param_fromRuta);
})