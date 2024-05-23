import './tiendas.css';
import '../../style.css';
import supabase from '../../config/supabaseClient';
import tiendaCard from '../../components/tiendaCard';
import navbarInsert from '../../components/navbar.js';

//https://stackoverflow.com/questions/28085468/postgresql-extract-last-row-for-each-id
//para obtener la entrega mas reciente en una tienda

/*

select distinct on (id) id, date, another_info
from the_table
order by id, date desc;

*/

const content = document.querySelector('#content');

async function getData(){
    const {data, error} = await supabase
        .from('tiendas')
        .select()
        .eq('ruta',2)
        .order('orden', {ascending: true});

        if(error){
            alert("Error :(")
        }

        if(data){
            console.log(data);
            data.forEach((tienda)=>{
                content.append(tiendaCard(tienda));
            })
        }
}
getData();

navbarInsert();
