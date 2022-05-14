
const { Usuario } = require('../models');

module.exports = {
    create: async (req, res, next) => {
        console.log('entrou no controller Cria usuario');
        console.log(JSON.stringify(req.body)); 
        try {
            await Usuario.create(req.body)
        } catch (error) {
            console.log("-------------------------------");
            console.log(">>>> ERRO: ", JSON.stringify(error?.parent?.sqlMessage)); //Sempre use isso para saber o erro do sequelize
            console.log("-------------------------------");
        }
        res.redirect("/"); // Redirecionando para a Página de Produtos
    }, 
    login: (req, res, next)=>{
        res.redirect('/');
    }
}
