const PermissaoSistema = require('./permissao_sistema');
const Usuario = require('./usuario');
const Fatura = require('./fatura');
const Os = require('./os');
const Salario = require('./salario');

PermissaoSistema.hasMany(Usuario, { foreignKey: 'co_usuario' })
Usuario.belongsTo(PermissaoSistema, { foreignKey: { name: 'co_usuario' } });

Fatura.belongsTo(Os, { as: 'os', foreignKey: 'co_os', sourceKey: 'co_os' })
Os.hasMany(Fatura, { foreignKey: 'co_os', sourceKey: 'co_os' });

Usuario.hasMany(Os, { as: 'os', foreignKey: 'co_usuario' })
Os.belongsTo(Usuario, { foreignKey: 'co_usuario' });

module.exports = { PermissaoSistema, Usuario, Fatura, Os, Salario };