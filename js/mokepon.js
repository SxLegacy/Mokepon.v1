const sectionSelectatk = document.getElementById("select-atk")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-seleccionar-pet")
const btnReinciar = document.getElementById("btn-reload")
const btnFuego = document.getElementById("boton-fuego")
const btnAgua = document.getElementById("boton-agua")
const btnRoca = document.getElementById("boton-roca")

const sectionSelectMasc = document.getElementById("select-pet")
const sectionbtnFuego = document.getElementById("boton-fuego")
const sectionbtnRock = document.getElementById("boton-roca")
const sectionbtnAgua = document.getElementById("boton-agua")
const $ = selector => document.getElementById(selector)
/* es para que se reemplazar ese getelement por $, mejor lectura */
const spanMascotaJugador = $("mascota-jugador")

const spanMascotaOponente = document.getElementById("mascota-oponente")

const spanVidasJugador = document.getElementById("vida-jugador")
const spanVidasOponente = document.getElementById("vida-oponente")

const resultadoJug = document.getElementById("resultadoJug")
const resultadoOpo = document.getElementById("resultadoOpo")
const psectionMensajes = document.getElementById("p-resultadovida")

const sectionMensajes = document.getElementById("mensajes")
const contenedorTarjetas = $("contenedorTarjetas")
const contenedorTarjetas2 = $("contenedorTarjetas2")

let mokepones = []
let mokepones2 = []
/* mokepones.push (Fisher,Opalux,Tucapalma)
 */
let ataqueOponente
let vidaJugador = 3
let vidaOponente = 3
let mascJug
let mascOpon
let opcionDeMokepones
let opcionDeMokepones2
let inputFisher
let inputOpalux
let inputChurizar
let inputLangoschiz
let inputPydoz
let inputTucapalma
let mascJugador

class Mokepon {
    constructor (nombre,foto,vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }    
}
class Mokepon2 {
    constructor (nombre,foto,vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }    
}
/* estos son "objetos instancia" xq ya tienen sus propiedades */
let Fisher = new Mokepon("Fisher💧","./assets/fisher.jpg", 5)
let Opalux = new Mokepon("Opalux🥌","./assets/opalux.jpg",5)
let Churizar = new Mokepon("Churizar🔥","./assets/churizar.jpg",5)
let Langoschiz = new Mokepon2("Langoschiz💧🔥","./assets/langos.jpg",5)
let Pydoz = new Mokepon2("Pydoz🔥🥌","./assets/piroz.jpg",5)
let Tucapalma = new Mokepon2("Tucapalma💧🥌", "./assets/tucapalma.jpg",5)

/* estos son "objetos iterarios" xq son para recibir propiedades */
Fisher.ataques.push (
    {nombre:"💧", id:"boton-agua"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"🔥", id:"boton-fuego"},
)
Opalux.ataques.push (
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"🔥", id:"boton-fuego"},
)
Churizar.ataques.push (
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"🔥", id:"boton-fuego"},
)
Langoschiz.ataques.push (
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"🔥", id:"boton-fuego"},
)
Pydoz.ataques.push (
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"🔥", id:"boton-fuego"},
)
Tucapalma.ataques.push (
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"🔥", id:"boton-fuego"},
)
mokepones.push(Fisher,Opalux,Churizar)
mokepones2.push(Langoschiz,Pydoz,Tucapalma)

function iniciarJuego() {
    sectionSelectatk.style.display = "none"
    sectionReiniciar.style.display = "none"
    
    mokepones.forEach((mokepon)=> {
/*         voy a generar una nueva variable que sera mi estructura antes de usarla aqui debo generarla afuera "opcionDeMokepones" */ 
        opcionDeMokepones = `
        <input type="Radio" name="mascota" id=${mokepon.nombre}>
                <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>              
                        <p>${mokepon.nombre}</p>
                        <img src=${mokepon.foto} alt=${mokepon.nombre}>
                </label>
        </input>
        ` 
        contenedorTarjetas.innerHTML+= opcionDeMokepones
        inputFisher = document.getElementById("Fisher💧")
        inputOpalux = document.getElementById("Opalux🥌")
        inputChurizar = document.getElementById("Churizar🔥")               
        /* esta es mi estructura y le estoy diciendo que mande a html estos datos */
    })
    mokepones2.forEach((mokepon2)=> {
        opcionDeMokepones2 = `
        <input type="Radio" name="mascota" id=${mokepon2.nombre}>
                <label class="tarjeta-de-mokepon" for=${mokepon2.nombre}>              
                        <p>${mokepon2.nombre}</p>                    
                        <img src=${mokepon2.foto} alt=${mokepon2.nombre}>
                </label>
        </input>
        ` 
        contenedorTarjetas2.innerHTML+= opcionDeMokepones2
        inputLangoschiz = document.getElementById("Langoschiz💧🔥")
        inputPydoz = document.getElementById("Pydoz🔥🥌")
        inputTucapalma = document.getElementById("Tucapalma💧🥌")
    })
        
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    btnFuego.addEventListener("click", ataqueFuego)
    btnAgua.addEventListener("click", ataqueAgua)
    btnRoca.addEventListener("click", ataqueRoca)
    btnReinciar.addEventListener("click", reLoad)
}
function seleccionarMascotaJugador() {
    sectionSelectatk.style.display = "flex"
    sectionSelectMasc.style.display = "none"
    sectionbtnFuego.style.display = "none"
    sectionbtnRock.style.display = "none"
    sectionbtnAgua.style.display = "none"

    if(inputFisher.checked) {
        spanMascotaJugador.innerHTML = inputFisher.id
        mascJug = inputFisher.id
        //alert("Selecionaste: Fisher")
        sectionbtnAgua.style.display = "block"
    } else if (inputOpalux.checked) {
        spanMascotaJugador.innerHTML = inputOpalux.id
        mascJug = inputOpalux.id
        //alert("Seleccionaste: Opalux")
        sectionbtnRock.style.display = "block"
    } else if (inputChurizar.checked) {
        spanMascotaJugador.innerHTML = inputChurizar.id
        mascJug = inputChurizar.id
        //alert("Seleccionaste: Churizar")
        sectionbtnFuego.style.display = "block"
    } else if (inputLangoschiz.checked) {
        spanMascotaJugador.innerHTML = inputLangoschiz.id
        mascJug = inputLangoschiz.id
        //alert("Seleccionaste: Langoschiz")
        sectionbtnAgua.style.display = "block"
        sectionbtnFuego.style.display = "block"
    } else if (inputPydoz.checked) {
        spanMascotaJugador.innerHTML = inputPydoz.id
        mascJug = inputPydoz.id
        //alert("Seleccionaste: Pydoz")
        sectionbtnFuego.style.display = "block"
        sectionbtnRock.style.display = "block"
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascJug = inputTucapalma.id
        //alert("Seleccionaste: Tucapalma")
        sectionbtnAgua.style.display = "block"
        sectionbtnRock.style.display = "block"
    } else {
        alert("Debes seleccionar una mascota")
        reLoad()
    }
    botonMascotaJugador.disabled = true
    seleccionarMascotaOponente()
    /* extraerAtaques(mascJug) */
    
}

function extraerAtaques(mascJug) {
    let ataques
   
    mokepones.forEach((mokepon) => {
        if (mascJug == mokepon.nombre) {
            ataques = mokepon.ataques
        }
    })
    mokepones2.forEach((mokepon2) => {
        if (mascJug == mokepon2.nombre) {
            ataques = mokepon2.ataques
        }
    })

    
}

function seleccionarMascotaOponente() {
    let mascotaAleatorio = aleatorio(0,mokepones.length+mokepones2.length-1)    
    if (mascotaAleatorio <2) {         
        spanMascotaOponente.innerHTML = mokepones [mascotaAleatorio].nombre      
    } else if (mascotaAleatorio >2) {        
        spanMascotaOponente.innerHTML = mokepones2  [mascotaAleatorio-mokepones2.length].nombre
    }
    
    /* if (mascotaAleatorio == 1){
        spanMascotaOponente.innerHTML = "Fisher💧"
        mascOpon = "Fisher💧"
        //alert("Oponente Selecionó: Fisher")
    } else if (mascotaAleatorio == 2) {
        spanMascotaOponente.innerHTML = "Opalux🥌"
        mascOpon = "Opalux🥌"
        //alert("Oponente Selecionó: Opalux")
    } else if (mascotaAleatorio == 3) {
        spanMascotaOponente.innerHTML = "Churizar🔥"
        mascOpon = "Churizar🔥"
        //alert("Oponente Selecionó: Churizar")
    } else if (mascotaAleatorio == 4) {
        spanMascotaOponente.innerHTML = "Langoschiz💧+🔥"
        mascOpon = "Langoschiz💧+🔥"
        //alert("Oponente Selecionó: Langoschiz")
    } else if (mascotaAleatorio == 5) {
        spanMascotaOponente.innerHTML = "Pydoz🥌+🔥"
        mascOpon = "Pydoz🥌+🔥"
       // alert("Oponente Selecionó: Pydoz")
    } else {
        spanMascotaOponente.innerHTML = "Tucapalma🥌+💧"
        mascOpon = "Tucapalma🥌+💧"
       // alert("Oponente Selecionó: Tucapalma")
    }  */
}
function ataqueFuego() {
    ataqueJugador = "FUEGO💥"    
    ataqueAleatorioOponente()    
}
function ataqueAgua() {
    ataqueJugador = "AGUA🌊"
    ataqueAleatorioOponente()
}
function ataqueRoca() {
    ataqueJugador = "ROCA🧱"
    ataqueAleatorioOponente()
}
function ataqueAleatorioOponente(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueOponente = "FUEGO💥"
    } else if (ataqueAleatorio == 2) {
        ataqueOponente = "AGUA🌊"
    } else {
        ataqueOponente = "ROCA🧱"
    }

    combate()
    
}
function combate() {

    if (ataqueOponente == ataqueJugador) {        
        crearMensaje("Empate 🙊")
    } else if((ataqueJugador == "FUEGO💥" && ataqueOponente == "ROCA🧱") || (ataqueJugador == "AGUA🌊" && ataqueOponente == "FUEGO💥") || (ataqueJugador == "ROCA🧱" && ataqueOponente == "AGUA🌊")) {
        crearMensaje("Ganaste 🤑")
        vidaOponente--
        spanVidasOponente.innerHTML = vidaOponente       
    } else {
        crearMensaje("Perdiste 🤡")
        vidaJugador--
        spanVidasJugador.innerHTML = vidaJugador

    } 
    contadorVidas() 
}
function contadorVidas() {
    if (vidaOponente == 0) {
        crearMensajeFinal("FELICITACIONES! You WON, buena esa Campeón 👑")

    } else if (vidaJugador == 0) {
        crearMensajeFinal("SO SAD, Mala suerte, echate un baño de playa 🎃")
    }
}
function reLoad() {
    location.reload()
}

function aleatorio (min,max) {
    return Math.floor(Math.random() * (max-min+1) + min)
}
function crearMensaje(resultadoAtaque) {
    let resAtkJug = document.createElement("p")
    let resAtkOpo = document.createElement("p")
    let resVidasgen = document.createElement("p")
    let sectionMensajes = document.getElementById("resultadovida")

    resVidasgen.innerHTML = resultadoAtaque
    psectionMensajes.innerHTML = resultadoAtaque
    resAtkJug.innerHTML = ataqueJugador
    resAtkOpo.innerHTML = ataqueOponente

    sectionMensajes.appendChild(resVidasgen)
    resultadoJug.appendChild(resAtkJug)
    resultadoOpo.appendChild(resAtkOpo)
}
function crearMensajeFinal(resultadoCombate) {
    sectionReiniciar.style.display = "flex"
    
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoCombate
    parrafo.style.display = "flex"
    parrafo.style.color = "#00fff2"
    parrafo.style.fontSize = "24px"
    parrafo.style.margin = "4px"

    sectionMensajes.appendChild(parrafo)

    btnFuego.disabled = true
    btnAgua.disabled = true
    btnRoca.disabled = true


}

window.addEventListener("load", iniciarJuego)