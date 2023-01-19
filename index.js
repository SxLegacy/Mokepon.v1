console.log("Hola mundo")
//para usar express debo importarla aqui con una variable y despues puedo comenzar a crear una app para el servidor
const express = require("express")
const app = express()

//con estas 3 ya no me dara errores
const cors = require("cors") 
app.use(cors())  
app.use(express.json())  





const jugadores = []
class Jugador {
    constructor(id) {
        this.id = id
    }
    //ahora creare un metodo para asignarle el mokepon
    asignarMokepon(mokepon) {
        this.mokepon = mokepon
    }
    actualizarPosicion(x,y) {
        this.x = y
        this.y = y
    }
}
class Mokepon {
    constructor(nombre) {
        this.nombre = nombre
    }
}

//"http://localhost:8080
// ahora necesito un puerto para que escuche mis demandas
app.get(`/unirse`, (req, res) => {
    const id= `${Math.random()}`
    const jugador = new Jugador(id)
    jugadores.push(jugador)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(id)
    
})

app.post("/mokepon/:jugadorId",(req, res) =>{
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugadorId)
    if(jugadorIndex>= 0) {
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }
    //el req. es para yo extraer dicha informacion, que llega de la variable /:jugadorId

    console.log(jugadores);
    console.log(jugadorId);
    res.end() // y cumplido el post  le respondo que termine
})
app.post(`/mokepon/:jugadorId/posicion`, (req,res) =>{
    const jugadorId = req.params.jugadorId || ""
    const x =req.body.x || 0
    const y= req.body.y || 0
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugadorId)
    if(jugadorIndex >= 0) {
        jugadores[jugadorIndex].actualizarPosicion(x,y)
    }
    //siempre se debe dar una respuesta asi sea vacia res.end()
    const enemigos = jugadores.filter((jugador)=> jugadorId !== jugador.id) 
    res.send({
        enemigos
    })
})

app.listen(8080, () => {
    console.log("Servidor funcionando")
})


