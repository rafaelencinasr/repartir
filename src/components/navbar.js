
function navbarInsert(){
    const navbar = document.querySelector("#navbar");
    navbar.innerHTML=`
        <a href="./entregar.html">Entregar</a>
        <a href="./tiendas.html">Tiendas</a>
        <a href="./ruta.html">Ruta</a>
        <a href="./login.html">Login</a>
        <a href="./entregas.html">Entregas</a>
    `;
}

export default navbarInsert;