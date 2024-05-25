import './ruta.css';
import '../../style.css';
import rutaCard from '../../components/rutaCard.js'
import supabase from '../../config/supabaseClient';
import navbarInsert from '../../components/navbar.js';

const content = document.querySelector("#content");
const rutaSelector = document.querySelector("#ruta");


let params = new URL(document.location).searchParams; //Se revisa el URL para obtener el cr_tienda 
let param_ruta = params.get("ruta");

if(param_ruta){
    rutaSelector.value = Number(param_ruta);
}
 
async function getRuta(ruta){
    const {data, error} = await supabase
        .from('tiendas')
        .select()
        .eq('ruta',ruta)
        .order('orden', {ascending: true});

        if(error){
            alert("Error :(")
        }

        if(data){
            localStorage.setItem(`ruta${rutaSelector.value}`, JSON.stringify(data));
            renderStyledCards();
        }
}

function renderStyledCards(){
    // Remove data parameter, read directly from localStorage. }
    // If localStorage is empty, get data from Database
    //console.log(data);

    //Cleans DOM from previews cards
    let styledCardsList = document.querySelectorAll('.styledCard');
    styledCardsList.forEach(card=>{
        card.remove();
    })

    let data = JSON.parse(localStorage.getItem(`ruta${rutaSelector.value}`));
    data.forEach((tienda)=>{
        content.append(rutaCard(tienda));
    })
    applyDeleteFunction(rutaSelector.value);
}
//  Antes de renderear las cartas, revisar si existe la informacion en local storage:
//  1. En caso de existir, renderizar las tarjets
//  2. En caso de no existir, hacer llamado a database y luego renderizar tarjets

function checkLocalStorageData(ruta){
    if(localStorage.getItem(`ruta${ruta}`) === null){
        getRuta(ruta);
    } else{
        renderStyledCards();
    }
}

checkLocalStorageData(rutaSelector.value);

rutaSelector.addEventListener('change', ()=>{
    if(param_ruta){
        document.location.href='./ruta.html';
    }
    checkLocalStorageData(rutaSelector.value);
});

const refreshBtn = document.querySelector("#refresh");
refreshBtn.addEventListener("click", ()=>{
    console.log("Refresh btn clicked for ruta " + rutaSelector.value);
    alert("Actualizando datos de ruta");
    getRuta(rutaSelector.value);
})

function applyDeleteFunction(ruta){
    //console.log("applyDeleteFunction called");

    let deleteIconsList = document.querySelectorAll('.deleteContainer');
    deleteIconsList.forEach((deleteIcon, index)=>{
        deleteIcon.addEventListener('click',()=>{
            let result = confirm("¿Borrar elemento de ruta?");
            if (result) {
                let tempArray = [...JSON.parse(localStorage.getItem(`ruta${rutaSelector.value}`))];
                tempArray.splice(index, 1);
                localStorage.setItem(`ruta${rutaSelector.value}`, JSON.stringify(tempArray));
                renderStyledCards();
            }
        }
    )
    })
}

navbarInsert();

