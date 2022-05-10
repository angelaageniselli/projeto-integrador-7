const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const router = express.Router();

router.get('/', function(req, res){
    res.render('cadastro_usuario');
})

router.post('/cadastro_usuario', UsuarioController.create)

module.exports = router;