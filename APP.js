/* API 1 */
/* const URL = "https://pokeapi.co/api/v2/pokemon/ditto"
fetch(URL)
.then(response =>{
    if (response.status == 404){
        document.body.textContent='no encontrado'
    }else{
        return response.json()
    } 
})

.then( data => {
    document.body.innerHTML=`<img src="${data.sprites.front_default}">`
})
 */


/* API 2 */
/* async function getNombre(username){
    const API = `http://api.github.com/users/${username}`
    const respuesta = await fetch(API)
    // .then(respuesta => respuesta.json())
    const datos = await respuesta.json()
    // .then(datos => console.log(datos.name))
    console.log(datos.name);
}
getNombre('rickitan') */

/* API EJERCICIO POKEDEX */
const contenedorImg = document.getElementById('imagen');
const boton = document.getElementById('btn');
boton.addEventListener('click',(e) => {
    e.preventDefault()
    cargarDatos()
})

const URL = "https://pokeapi.co/api/v2/pokemon/"
const contenedorText = document.getElementById("textoPokemon");
const contenedorInf = document.getElementById('contenedorImagen');

async function cargarDatos(){
    const nombre = document.getElementById('nombre').value
    const respuesta = await fetch(URL+nombre.toLowerCase())
    
/*     console.log(datos) */

    if (respuesta.status === 404 || nombre === ''){
        alert('no se encontro el Pokemon, por favor digite bien el nombre')
    }else{
        botonRegreso.style.display = 'block';
        const datos = await respuesta.json()
        contenedorInf.style.display = 'block';
    contenedorImg.innerHTML=`<img src=${datos.sprites.front_default} class="imagenPokemon">`
    contenedorText.innerHTML = `
    <h2 class="caracteristicas">Caracteristicas</h2>
    <div class="resultados">
        <div class="resultado2">
            <p>Daño de vida: ${datos.stats[0].base_stat}</p>
            <p>Ataque: ${datos.stats[1].base_stat}</p>
            <p>Defensa: ${datos.stats[2].base_stat}</p>
        </div>
        <div class="resultado2">
            <p>Ataque especial: ${datos.stats[3].base_stat}</p>
            <p>Defensa especial: ${datos.stats[4].base_stat}</p>
            <p>Velocidad: ${datos.stats[5].base_stat}</p>
        </div>
    </div>
    `
    }
}
nombre.addEventListener('click', () => {
    nombre.value = ''
})    

// boton del boton de regreso 
const botonRegreso = document.getElementById('btnRegreso');
botonRegreso.addEventListener('click', regreso)
function regreso(){
    contenedorInf.style.display = 'none';
    botonRegreso.style.display = 'none';
    nombre.value = ''
}
