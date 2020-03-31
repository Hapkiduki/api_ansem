const MySQL2 = require('../mysql/mysql2');
const Sequelize = require('sequelize');

const Usuario = MySQL2.instance.cnn.define('usuario', {
    co_usuario: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    no_usuario: { type: Sequelize.STRING }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'cao_usuario',
    sequelize: MySQL2.instance
});



module.exports = Usuario;