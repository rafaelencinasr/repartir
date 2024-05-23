import './login.css';
import '../../style.css';
import supabase from '../../config/supabaseClient';
import navbarInsert from '../../components/navbar.js';
const usernameInput = document.querySelector('#usuario');
const passwordInput = document.querySelector('#contrasena');

const loginBtn = document.querySelector("#login-btn");
loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    signInWithEmail();
})

async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: usernameInput.value,
      password: passwordInput.value,
    })
    if(data){
        alert('Iniciaste sesion!');
        window.location.href = "http://repartir.bacanorabatuq.com/tiendas.html";
    }
    console.log(data);
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if(!error){
      alert("Sesion cerrada!");
    }
  }
  
  

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

const logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    signOut();
})

navbarInsert();