import Sequelize from 'sequelize';

// Importamos y leemos dotenv
import dotenv from 'dotenv'
dotenv.config()

const op = Sequelize.Op

/* 
    Creamos una instancia de sequelize, como primer argumento le pasamos
    la DB a la que nos queremos conectar. El segundo argumento es el nombre
    del usuario de gestor de DB (mysql en este caso). El tercero es el
    password del gestior de DB (mysql), y el cuarto es un objeto con una serie 
    de configuraciones que van dentro de un objeto.
*/
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {

    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: {
        $and: op.and,
        $or: op.or,
        $eq: op.eq,
        $gt: op.gt,
        $lt: op.lt,
        $lte: op.lte,
        $like: op.like
      }
});

export default db;