const express = require('express');
const router = express.Router();



router.get('/', function cadastroProdutos(req, res){
    res.render('produtos');
})

module.exports = router;