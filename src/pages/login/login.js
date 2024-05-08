import './login.css';
import '../../style.css';
import supabase from '../../config/supabaseClient';
const usernameInput = document.querySelector('#usuario');
const passwordInput = document.querySelector('#contrasena');

const loginBtn = document.querySelector("#login-btn");
loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(usernameInput.value);
    console.log(passwordInput.value);
    getData();
})

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
        }
}