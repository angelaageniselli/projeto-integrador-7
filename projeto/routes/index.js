var express = require('express');
var router = express.Router();
const { Usuario } = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});





router.post('/login', async function(req, res, next) {
  try {
    const usuarioLogin = await Usuario.findOne({
      where: {
        email: req.body.email
      }
    })
    if(usuarioLogin && usuarioLogin.senha == req.body.senha) {
      req.session.estaLogado = true
      req.session.usuarioLogado = usuarioLogin
      res.redirect('/admin')
    } else {
      res.render('erro-validacao', { mensagemErro: 'Senha inválida' })
    }
  } catch (erro) {
    next(erro)
  }
})

module.exports = router;
