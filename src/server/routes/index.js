const express = require('express');
const Sequelize = require('sequelize');

// Models
const {
    PermissaoSistema,
    Usuario,
    Fatura,
    Os,
    Salario
} = require('../models/relationships');

const app = express();
const Op = Sequelize.Op;


// Obtiene la lista de consultores
app.get('/location', (req, res) => {

    res.json({
        ok: true,
        mensaje: 'hola'
    });

});

app.post('/location', function(req, res) {

    let body = req.body;

    res.json({
        ok: true,
        mensaje: body
    });
});


// Obtiene la lista de consultores
app.get('/consultores', (req, res) => {

    Usuario.findAll({
            //attributes: ['co_usuaario', 'no_usuario'],
            order: [
                ['no_usuario', 'ASC']
            ],
            include: [{
                model: PermissaoSistema,
                as: 'permissao_sistema',
                where: {
                    co_sistema: '1',
                    in_ativo: 's',
                    co_tipo_usuario: {
                        [Op.in]: ['0', '1', '2']
                    }
                }
            }, ],
        })
        .then(usuario => {
            res.json({
                ok: true,
                usuario
            });
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                ok: false,
                err
            });
        })

});

app.get('/relatorio/:usuario', (req, res) => {


    let usuario = req.params.usuario
    let brut_salario = 0;

    Salario.findOne({
            attributes: ['brut_salario'],
            where: { co_usuario: usuario },
        })
        .then(data => {

            if (data != undefined) {
                brut_salario = data.brut_salario;
            }
        })
        .catch(err => {
            console.log(err)
            brut_salario = err
        });


    Fatura.findAll({
            attributes: { exclude: ['co_os'] },
            order: [
                ['data_emissao', 'ASC']
            ],
            include: [{
                attributes: { exclude: ['co_usuario'] },
                model: Os,
                as: 'os',
                where: {
                    co_usuario: usuario,
                },
                include: {
                    model: Usuario,
                }
            }],
        })
        .then(fatura => {
            res.json({
                ok: true,
                fatura,
                brut_salario
            });
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                ok: false,
                err
            });
        })

});

module.exports = app;