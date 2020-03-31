const MySQL2 = require('../mysql/mysql2');
const Sequelize = require('sequelize');

const Salario = MySQL2.instance.cnn.define('salario', {
    usuario: { type: Sequelize.STRING, field: 'co_usuario', primaryKey: true },
    brut_salario: { type: Sequelize.FLOAT },
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'cao_salario',
    sequelize: MySQL2.instance
});

module.exports = Salario;