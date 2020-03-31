const MySQL2 = require('../mysql/mysql2');
const Sequelize = require('sequelize');

const Fatura = MySQL2.instance.cnn.define('fatura', {
    fatura: { type: Sequelize.INTEGER, field: 'co_fatura', primaryKey: true },
    co_os: { type: Sequelize.INTEGER },
    valor: { type: Sequelize.FLOAT },
    total_imp_inc: { type: Sequelize.FLOAT },
    data_emissao: { type: Sequelize.DATE },
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'cao_fatura',
    sequelize: MySQL2.instance
});

module.exports = Fatura;