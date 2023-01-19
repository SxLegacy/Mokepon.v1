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

let jugadorId = null
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
let lienzo = mapa.getContext("2d")
let intervalo 
let mapaBackground = new Image()
mapaBackground.src = "./assets/mokemap.png"

let miMokepon
let suMokepon

let alturaNecs
let anchoTengo = window.innerWidth - 40
alturaNecs = anchoTengo*600/800
const anchoMaxMapa = 360

if (anchoTengo > anchoMaxMapa) {
    anchoTengo == anchoMaxMapa - 20
}

mapa.width = anchoTengo
mapa.height = alturaNecs



class Mokepon {
    constructor (nombre,foto,vida,fotoMapa,id =null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho =40
        this.alto =40
        this.x  = aleatorio(20,mapa.width - this.ancho)
        this.y  = aleatorio(20,mapa.height - this.alto)
        /* this.x =20
        this.y =30 */
        
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.velocX = 0
        this.velocY = 0
    }
    pintarMokepon() {
        //esto es un metodo xq se encuentra dentro de mi funcion dentro de un array
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
        }    
}
class Mokepon2 {
    constructor (nombre,foto,vida,fotoMapa,id = null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho =40
        this.alto =40
        this.x = aleatorio(20,mapa.width - this.ancho)
        this.y = aleatorio(20,mapa.height - this.alto)
        /* this.x = 20
        this.y = 30  esto era cuando queria uan posicion fija*/      
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.velocX = 0
        this.velocY = 0
        this.mapaFoto.style.borderWidth = 1+"px"
        this.mapaFoto.style.borderStyle = "solid"
        this.mapaFoto.style.borderColor = "#00fff2"
        this.mapaFoto.style.borderRadius = 40+"px"
    }   
    pintarMokepon() {
        //esto es un metodo xq se encuentra dentro de mi funcion dentro de un array
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        ) 
    } 
}
/* estos son "objetos instancia" xq ya tienen sus propiedades */
let Fisher = new Mokepon("Fisher💧","./assets/fisher.jpg", 5)
let Opalux = new Mokepon("Opalux🥌","./assets/opalux.jpg",5)
let Churizar = new Mokepon("Churizar🔥","./assets/churizar.jpg",5)
let Langoschiz = new Mokepon2("Langoschiz💧🔥","./assets/langos.jpg",5)
let Pydoz = new Mokepon2("Pydoz🔥🥌","./assets/piroz.jpg",5)
let Tucapalma = new Mokepon2("Tucapalma💧🥌", "./assets/tucapalma.jpg",5)

let FisherOpo = new Mokepon("Fisher💧","./assets/fisher.jpg", 5)
let OpaluxOpo = new Mokepon("Opalux🥌","./assets/opalux.jpg",5)
let ChurizarOpo = new Mokepon("Churizar🔥","./assets/churizar.jpg",5)
let LangoschizOpo = new Mokepon2("Langoschiz💧🔥","./assets/langos.jpg",5)
let PydozOpo = new Mokepon2("Pydoz🔥🥌","./assets/piroz.jpg",5)
let TucapalmaOpo = new Mokepon2("Tucapalma💧🥌", "./assets/tucapalma.jpg",5)

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
FisherOpo.ataques.push (
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"🔥", id:"boton-fuego"},    
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"🔥", id:"boton-fuego"},    
)
OpaluxOpo.ataques.push (
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"💧", id:"boton-agua"},
)
ChurizarOpo.ataques.push (
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🥌", id:"boton-roca"},
)
LangoschizOpo.ataques.push (
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"🥌", id:"boton-roca"},    
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"🥌", id:"boton-roca"},    
)
PydozOpo.ataques.push (
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🥌", id:"boton-roca"},
    {nombre:"💧", id:"boton-agua"},
)
TucapalmaOpo.ataques.push (
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
    sectionVerMapa.style.display = "none"
    
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
    unirseAlJuego()
}
function unirseAlJuego() {
    fetch(`http://localhost:8080/unirse`)
    //{method: "post"} en el caso que queramos definir un argumento
        .then(function(res) { //.then es una propiedad de las func asincronas  
                      
             if(res.ok) {
                res.text()
                .then(function (respuesta) {
                    console.log(respuesta) //ahora me da mi id en consola
                    jugadorId= respuesta
                }) 
             }
    })
}
function seleccionarMascotaJugador() {
    //sectionSelectatk.style.display = "flex"
    sectionSelectMasc.style.display = "none"
    
    /* let imagenDePydoz = new Image()
    imagenDePydoz.src = Pydoz.foto */
    
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
        return
    }
    botonMascotaJugador.disabled = true
   
    console.dir(mascJug)
    selecMascMokepon(mascJug)

    extraerAtaques(mascJug)
    sectionVerMapa.style.display = "flex"    
    iniciarMapa()
    
}
function selecMascMokepon (mascJug) {
    fetch (`http://localhost:8080/mokepon/${jugadorId}`,{
        method: "post", 
        headers: {  //esto es para decir que tipo de dato le vamos a enviar
            "Content-Type": "application/json"
        },        
        body: JSON.stringify({
            mokepon: mascJug
        })
    })
    //esto es una config tipo post

}
function extraerAtaques(mascJug) {
    let ataques
   
   /*  for (let i = 0; i < mokepones.length; i++) {
        if (mascJug == mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }        
    } */ /* esto es una iteracion usando for, la de abajo es usando forEach */

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

function seleccionarMascotaOponente(enemigo) {
    spanMascotaOponente.innerHTML = enemigo.nombre
    ataquesMokeponOponente = enemigo.ataques
    // let mascotaAleatorio = aleatorio(0,mokepones.length+mokepones2.length-1)    
    // if (mascotaAleatorio <2) {         
    //     spanMascotaOponente.innerHTML = mokepones [mascotaAleatorio].nombre      
    //     ataquesMokeponOponente = mokepones [mascotaAleatorio].ataques
    // } else if (mascotaAleatorio >2) {        
    //     spanMascotaOponente.innerHTML = mokepones2  [mascotaAleatorio-mokepones2.length].nombre
    //     ataquesMokeponOponente = mokepones2  [mascotaAleatorio-mokepones2.length].ataques
    // }

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
function iniciarMapa() {  
    //mapa.width = 600 
    miMokepon = obtenerObjetoMasc(mascJug)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener("keydown", presionoTecla)
    window.addEventListener("keyup", moveStop)
}
function pintarCanvas() {
    
    miMokepon.x = miMokepon.x + miMokepon.velocX
    miMokepon.y = miMokepon.y + miMokepon.velocY 
    lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
        mapaBackground, 
        0,
        0, 
        mapa.width, 
        mapa.height,
    )
    miMokepon.pintarMokepon()
    enviarPosicion(miMokepon.x,miMokepon.y)
    FisherOpo.pintarMokepon()
    OpaluxOpo.pintarMokepon()
    ChurizarOpo.pintarMokepon()
    LangoschizOpo.pintarMokepon()
    PydozOpo.pintarMokepon()
    TucapalmaOpo.pintarMokepon()
    if(miMokepon.velocX !== 0 || miMokepon.velocY !== 0) {
        colision(FisherOpo)
        colision(OpaluxOpo)
        colision(ChurizarOpo)
        colision(LangoschizOpo)
        colision(PydozOpo)
        colision(TucapalmaOpo)
        detenerEnBordesDelMapa();
    }
    
}
function enviarPosicion (x,y) {
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function(res){
        if(res.ok){
            res.json()
                .then(function (respuesta){
                    respuesta.enemigos
                    console.log(enemigos)
                    
                    enemigos.forEach(function (enemigo) {
                        let mokeponEnemigo = null
                        const mokeponNombre = enemigo.mokepon.nombre || ""
                        if(mokeponNombre ==="Fisher💧") {
                            let mokeponEnemigo = new Mokepon ("Fisher💧","./assets/fisher.jpg", 5)
                        } else if (mokeponNombre ==="Opalux🥌") {
                            let mokeponEnemigo = new Mokepon("Opalux🥌","./assets/opalux.jpg",5)
                        } else if(mokeponNombre ==="Churizar🔥") { 
                        let mokeponEnemigo = new Mokepon("Churizar🔥","./assets/churizar.jpg",5)
                        } else if(mokeponNombre ==="Langoschiz💧🔥") {let mokeponEnemigo = new Mokepon2("Langoschiz💧🔥","./assets/langos.jpg",5)
                        } else if (mokeponNombre ==="Pydoz🔥🥌"){
                            let mokeponEnemigo = new Mokepon2("Pydoz🔥🥌","./assets/piroz.jpg",5)
                        } else if (mokeponNombre ==="Tucapalma💧🥌"){
                            let mokeponEnemigo = new Mokepon2("Tucapalma💧🥌", "./assets/tucapalma.jpg",5)
                        }
                        
                        mokeponEnemigo.id = enemigo.id
                        mokeponEnemigo.x = enemigo.x
                        mokeponEnemigo.y = enemigo.y
                        mokeponEnemigo.pintarMokepon()

                    })
                })
        }
    })
}
function moverUp() {
    miMokepon.velocY = -5
    /* Pydoz.y = Pydoz.x - 5
    pintarPj()  esto era para ejecuciones de 1 solo click*/
} 
function moverRight() {
    miMokepon.velocX = 5
}
function moverDown() {
    miMokepon.velocY = 5
}
function moverLeft() {    
    miMokepon.velocX = -5
}
function moveStop() {    
    miMokepon.velocY = 0
    miMokepon.velocX = 0
} 
function presionoTecla(event) {
    switch (event.key) {
        case "ArrowUp":
            moverUp()            
            break
        case "ArrowDown":
            moverDown()
            break
        case "ArrowRight":
            moverRight()
            break
        case "ArrowLeft":
            moverLeft()
            break
        default:
            break
    }
}
function obtenerObjetoMasc() {
    let newMokepon

    mokepones.forEach((mokepon) => {
        if (mascJug == mokepon.nombre) {
            newMokepon = mokepon
        }
    })
    mokepones2.forEach((mokepon2) => {
        if (mascJug == mokepon2.nombre) {
            newMokepon = mokepon2
        }
    })
    return newMokepon
}
function colision(enemigo) {
    let mascota = miMokepon
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.width
    const izquierdaEnemigo = enemigo.x
    const arribaMascota= mascota.y
    const abajoMascota= mascota.y + mascota.alto
    const derechaMascota= mascota.x + mascota.width
    const izquierdaMascota= mascota.x

    if(
        abajoMascota-25 < arribaEnemigo  || arribaMascota+25 > abajoEnemigo || derechaMascota-25 < izquierdaEnemigo|| izquierdaMascota+25  > derechaEnemigo
    ) {
        return
    }
    moveStop()
    clearInterval(intervalo)
    sectionVerMapa.style.display = "none"
    sectionSelectatk.style.display = "flex"
    
    seleccionarMascotaOponente(enemigo)
    //alert ( "Hay colision con "+ enemigo.nombre )
}
function detenerEnBordesDelMapa() {
    let mascotaJugador1 = miMokepon
    // Verificar si las mascotas ya llegaron al borde del mapa
  
    const arribaMapa = 0;
    const abajoMapa = mapa.height - mascotaJugador1.alto;
    const derechaMapa = mapa.width;
    const izquierdaMapa = 0;
  
    const arribaJugador = mascotaJugador1.y;
    const derechaJugador = mascotaJugador1.x + mascotaJugador1.ancho;
    const izquierdaJugador = mascotaJugador1.x;
  
    if (arribaJugador < arribaMapa) {
      mascotaJugador1.y = arribaMapa;
    }
  
    if (arribaJugador > abajoMapa) {
      mascotaJugador1.y = abajoMapa;
    }
  
    if (derechaJugador > derechaMapa) {
      mascotaJugador1.x = derechaMapa - mascotaJugador1.ancho;
    }
  
    if (izquierdaJugador < izquierdaMapa) {
      mascotaJugador1.x = izquierdaMapa;
    }
  
    // console.log(abajoJugador, mascotaJugador.y);
}
/* pintarHalo() {
    // Círculo externo a mi mascota en el mapa
    lienzo.strokeStyle = 'rgba(255, 0, 0, 5)'
    lienzo.beginPath()
    lienzo.arc(
        this.x + this.ancho / 2,
        this.y + this.alto / 2, 
        this.ancho / 2 + 10, 
        0,
        Math.PI * 2, 
        true
        ) 
    lienzo.stroke()
} */
window.addEventListener("load", iniciarJuego)