const {response, request} = require('express')

const usuariosGet = (req=request, res=response)=> {
    // res.send('Hello World')
    const {q,n='bo name', page=1,limit=1} = req.query
    res.json({
        msg:"get controller",
        q,
        n,
        page,
        limit
    })
  }
const usuariosPut = (req, res=response)=> {
    // res.send('Hello World')
    const id = req.params.id
    res.json({
        msg:"put controller",
        id
    })
  }
const usuariosPost = (req, res=response)=> {
    // res.send('Hello World')
    const body = req.body;
    // const { nombre } = req.body;
    
    res.json({
        msg:"post controller",
        body
    })
  }
const usuariosDelete = (req, res=response)=> {
    // res.send('Hello World')
    
    res.json({
        msg:"delete controller"
    })
  }


module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}