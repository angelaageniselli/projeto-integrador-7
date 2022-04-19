module.exports = (connection, DataTypes) =>{

    connection.define('Usuario', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(50)
        },
        sobrenome: {
            type: DataTypes.STRING(50)
        },
        email: {
            type: DataTypes.STRING(100)
        },
        senha:{
            type: DataTypes.STRING(15)
        }
    }, {
        timestamps: true,
        tableName: 'usuarios'
    })
    model.sync({ alter: true })
    return model
}