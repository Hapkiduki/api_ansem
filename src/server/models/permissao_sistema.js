const MySQL2 = require('../mysql/mysql2');
const Sequelize = require('sequelize');


const PermissaoSistema = MySQL2.instance.cnn.define('permissao_sistema', {
    usuario: {
        type: Sequelize.STRING,
        field: 'co_usuario',
        primaryKey: true
    },
    co_tipo_usuario: { type: Sequelize.BIGINT },
    co_sistema: { type: Sequelize.BIGINT },
    in_ativo: { type: Sequelize.CHAR },
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'permissao_sistema',
    sequelize: MySQL2.instance
});



module.exports = PermissaoSistema;