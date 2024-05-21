import './ruta.css';
import '../../style.css';
import rutaCard from '../../components/rutaCard.js'
import supabase from '../../config/supabaseClient';

const content = document.querySelector("#content");
const rutaSelector = document.querySelector("#ruta");


let params = new URL(document.location).searchParams; //Se revisa el URL para obtener el cr_tienda 
let param_fromEntregar = params.get("fromEntregar");
param_fromEntregar = (param_fromEntregar === 'true');
console.log(param_fromEntregar);
 
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
            renderStyledCards(data);
        }
}

function renderStyledCards(data){
    console.log(data);
    let styledCardsList = document.querySelectorAll('.styledCard');
    styledCardsList.forEach(card=>{
        card.remove();
    })
    data.forEach((tienda)=>{
        content.append(rutaCard(tienda));
    })
    applyDeleteFunction(rutaSelector.value);
}

function changeRuta(fromEntregar){
    if(fromEntregar){
        console.log('Getting data from local storage');
        renderStyledCards(JSON.parse(localStorage.getItem(`ruta${rutaSelector.value}`)));
    }
    else{
        console.log('Getting data from Supabase');
        getRuta(rutaSelector.value);
    }
};

changeRuta(param_fromEntregar);

rutaSelector.addEventListener('change', ()=>{
    changeRuta();
});

function applyDeleteFunction(ruta){

    let deleteIconsList = document.querySelectorAll('.deleteContainer');
    deleteIconsList.forEach((deleteIcon, index)=>{
        deleteIcon.addEventListener('click',()=>{

            let result = confirm("¿Borrar elemento de ruta?");
            if (result) {
                let tempArray = [...JSON.parse(localStorage.getItem(`ruta${rutaSelector.value}`))];
                console.log('tempArray:');
                console.log(tempArray);
                tempArray.splice(index, 1);
                localStorage.setItem(`ruta${rutaSelector.value}`, JSON.stringify(tempArray));
                console.log('tempArray after delete:');
                console.log(tempArray);
                changeRuta(true);
            }
        }
    )
    })
}

applyDeleteFunction(rutaSelector.value);


