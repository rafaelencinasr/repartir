import './entregas.css';
import '../../style.css';
import supabase from '../../config/supabaseClient';
import navbarInsert from '../../components/navbar.js';
import entregasCard from '../../components/entregasCard.js';

console.log("Entregas!")
navbarInsert();

const content = document.querySelector('#content');

async function getData(){
    const {data, error} = await supabase
        .from('entregas')
        .select()

        if(error){
            alert("Error :(")
        }

        if(data){
            console.log(data);
            data.forEach((entrega)=>{
                content.append(entregasCard(entrega));
            })
        }
}
getData();