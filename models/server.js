const express = require('express')
const cors = require('cors')
class Server {
    constructor(){
        this.app= express();
        this.port = process.env.PORT;
        this.usuariosRoutes='/api/users';

        //Middlewares funciones añaden funcionalidades
        this.middlewares()

        //rutas
        this.routes()
    }

    middlewares(){
        //cors
        this.app.use(cors())
        //parseo y lectura d eel body
        this.app.use(express.json())
        //directroo publico
        this.app.use(express.static('public'))
    }

    routes(){
        // this.app.get('/api',(req, res)=> {
        //     // res.send('Hello World')
        //     res.json({
        //         msg:"get world"
        //     })
        //   })
       this.app.use(this.usuariosRoutes,require('../Routes/user.routes'))
    }

    Listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor corriendoe en purto',this.port)
        })
    }
}

module.exports = Server