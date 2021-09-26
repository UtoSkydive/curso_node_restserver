const {Router} = require('express')
const {usuariosGet,usuariosPost,usuariosDelete,usuariosPut} = require('../controllers/users.controller')
const router = Router()
router.get('/',usuariosGet)

router.put('/:id',usuariosPut)
router.post('/',usuariosPost)
router.delete('/',usuariosDelete)

module.exports = router