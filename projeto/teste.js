const { Usuario } = require('./models')

Usuario.create({
    nome: "Ana Rayssa",
    sobrenome: "Souza",
    email: "anarayssa@gmail.com",
    senha: "afsgahs"
}).then((usuarioCriado) => {
    console.log(usuarioCriado)
})