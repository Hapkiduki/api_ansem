const Sequelize = require('sequelize');
const config = require('../config/config');

class MySQL2 {

    constructor() {

        console.log('Se instancia la clase MySQL');

        this.cnn = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            dialect: 'mysql',
            define: { engine: 'MYISAM' }
        });


        this.conectarDB();

    }

    // Patron Singleton para evitar multiples instancias
    static get instance() {
        return this._instance || (this._instance = new this());
    }

    conectarDB() {

        this.cnn.authenticate()
            .then(() => {
                console.log('Base de datos Online!');
            })
            .catch(err => {
                console.error(err.message);
                return;
            });

    }

}

module.exports = MySQL2;