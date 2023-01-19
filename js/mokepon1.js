const sectionSelectatk = document.getElementById("select-atk")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-seleccionar-pet")


const sectionSelectMasc = document.getElementById("select-pet")
const sectionbtnFuego = document.getElementById("boton-fuego")
const sectionbtnRock = document.getElementById("boton-roca")
const sectionbtnAgua = document.getElementById("boton-agua")
const btnReinciar = document.getElementById("btn-reload")
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
const contenedorAtaques = $("contenedoratks")

let mokepones = []
let mokepones2 = []
/* mokepones.push (Fisher,Opalux,Tucapalma)
 */
/* esto es para canvas */
const sectionVerMapa = $("ver-mapa")
const mapa = $("mapa")

let vidaJugador = 3
let vidaOponente = 3
let mascJug
let mascOpon
let opcionDeMokepones
let opcionDeMokepones2
let ataquesMokepon
let ataquesMokeponOponente = []
let btnFuego
let btnAgua
let btnRoca
let inputFisher
let inputOpalux
let inputChurizar
let inputLangoschiz
let inputPydoz
let inputTucapalma
let mascJugador
let botones = []
let ataqueJugador = []
let ataqueOponente = []
let indexAtaqueJugador
let indexAtaqueOponente
let victoriasJugador = 0
let victoriasOponente = 0

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
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"🔥", id:"boton-fuego"},    
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"🔥", id:"boton-fuego"},    
)
Opalux.ataques.push (
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"💧", id:"boton-agua"},
)
Churizar.ataques.push (
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🥌", id:"boton-roca"},
)
Langoschiz.ataques.push (
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"🥌", id:"boton-roca"},    
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"🥌", id:"boton-roca"},    
)
Pydoz.ataques.push (
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"💧", id:"boton-agua"},
)
Tucapalma.ataques.push (
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"🔥", id:"boton-fuego"},
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
    
}
function seleccionarMascotaJugador() {
    sectionSelectatk.style.display = "flex"
    sectionSelectMasc.style.display = "none"
    sectionVerMapa.style.display = "none"
    
    if(inputFisher.checked) {
        spanMascotaJugador.innerHTML = inputFisher.id
        mascJug = inputFisher.id
        //alert("Selecionaste: Fisher")
        //sectionbtnAgua.style.display = "block"
    } else if (inputOpalux.checked) {
        spanMascotaJugador.innerHTML = inputOpalux.id
        mascJug = inputOpalux.id
        //alert("Seleccionaste: Opalux")
        //sectionbtnRock.style.display = "block"
    } else if (inputChurizar.checked) {
        spanMascotaJugador.innerHTML = inputChurizar.id
        mascJug = inputChurizar.id
        //alert("Seleccionaste: Churizar")
        //sectionbtnFuego.style.display = "block"
    } else if (inputLangoschiz.checked) {
        spanMascotaJugador.innerHTML = inputLangoschiz.id
        mascJug = inputLangoschiz.id
        //alert("Seleccionaste: Langoschiz")
        //sectionbtnAgua.style.display = "block"
        //sectionbtnFuego.style.display = "block"
    } else if (inputPydoz.checked) {
        spanMascotaJugador.innerHTML = inputPydoz.id
        mascJug = inputPydoz.id
        //alert("Seleccionaste: Pydoz")
        //sectionbtnFuego.style.display = "block"
        //sectionbtnRock.style.display = "block"
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascJug = inputTucapalma.id
        //alert("Seleccionaste: Tucapalma")
        //sectionbtnAgua.style.display = "block"
        //sectionbtnRock.style.display = "block"
    } else {
        alert("Debes seleccionar una mascota")
        reLoad()
    }
    botonMascotaJugador.disabled = true 
    extraerAtaques(mascJug)   
    seleccionarMascotaOponente()
    
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

    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="btn-atk BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    
    btnFuego = document.getElementById("boton-fuego")
    btnAgua = document.getElementById("boton-agua")
    btnRoca = document.getElementById("boton-roca")
    botones = document.querySelectorAll(".BAtaque")
    
}

function seleccionarMascotaOponente() {
    let mascotaAleatorio = aleatorio(0,mokepones.length+mokepones2.length-1)    
    if (mascotaAleatorio <2) {         
        spanMascotaOponente.innerHTML = mokepones [mascotaAleatorio].nombre      
        ataquesMokeponOponente = mokepones [mascotaAleatorio].ataques
    } else if (mascotaAleatorio >2) {        
        spanMascotaOponente.innerHTML = mokepones2  [mascotaAleatorio-mokepones2.length].nombre
        ataquesMokeponOponente = mokepones2  [mascotaAleatorio-mokepones2.length].ataques
    }

    secuenciaAtaque()
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
function secuenciaAtaque() {
    botones.forEach((boton)=> {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("FUEGO💥")
                boton.style.background = "gray"
                boton.disabled = true
            } else if (e.target.textContent === "💧") {
                ataqueJugador.push("AGUA🌊")
                boton.style.background = "gray"
                boton.disabled = true
            } else {
                ataqueJugador.push("ROCA🧱")
                boton.style.background = "gray"
                boton.disabled = true
            }
            ataqueAleatorioOponente() 
        })        
    })    
}

function ataqueAleatorioOponente(){
    let ataqueAleatorio = aleatorio(0,ataquesMokeponOponente.length-1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueOponente.push("FUEGO💥")
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueOponente.push("AGUA🌊")
    } else {
        ataqueOponente.push("ROCA🧱")
    }

    iniciarPelea()
    
}

function iniciarPelea(){
    if (ataqueJugador.length == 5) {
        combate()
    }
}
function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueOponente = ataqueOponente[enemigo]
}

function combate() {
    /* esto es para generar un loop que diria algo asi como: "mientras index sea menor que esto.legth index incrementa y haz algo" */
    for (let index = 0; index < ataqueJugador.length; index++) {
        console.log (ataqueJugador[index])
        if (ataqueJugador[index] == ataqueOponente[index]) { 
            indexAmbosOponente(index, index)       
            crearMensaje("Empate 🙊")
        } else if((ataqueJugador[index] == "FUEGO" && ataqueOponente[index] == "ROCA🧱") || (ataqueJugador[index] == "AGUA🌊" && ataqueOponente[index] == "FUEGO💥") || (ataqueJugador[index] == "ROCA🧱" && ataqueOponente[index] == "AGUA🌊")) {
            indexAmbosOponente(index, index)
            crearMensaje("Ganaste 🤑")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador 
        } else {
            indexAmbosOponente(index, index)
            crearMensaje("Perdiste 🤡")
            victoriasOponente++
            spanVidasOponente.innerHTML = victoriasOponente
        }
    }
        contadorVidas() 
}
function contadorVidas() {
    if (victoriasJugador > victoriasOponente) {
        crearMensajeFinal("FELICITACIONES! You WON, buena esa Campeón 👑")

    } else if (victoriasOponente > victoriasJugador ) {
        crearMensajeFinal("SO SAD, Mala suerte, echate un baño de playa 🎃")
    } else {
        crearMensajeFinal("Es un Empate")  
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
    psectionMensajes.innerHTML = "💧>🔥>🥌>💧"
    resAtkJug.innerHTML = indexAtaqueJugador
    resAtkOpo.innerHTML = indexAtaqueOponente

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

    
    btnReinciar.addEventListener("click", reLoad)

}

window.addEventListener("load", iniciarJuego)