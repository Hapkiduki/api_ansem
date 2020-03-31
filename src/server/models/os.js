const MySQL2 = require('../mysql/mysql2');
const Sequelize = require('sequelize');

const Os = MySQL2.instance.cnn.define('os', {
    co_os: { type: Sequelize.INTEGER, primaryKey: true },
    co_sistema: { type: Sequelize.INTEGER },
    co_usuario: { type: Sequelize.STRING },
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'cao_os',
    sequelize: MySQL2.instance
});

module.exports = Os;