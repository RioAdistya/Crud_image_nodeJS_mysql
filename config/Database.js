import {Sequelize} from "sequelize";

const db = new Sequelize('uploadimage_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;