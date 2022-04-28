import Sequelize from "sequelize";
import config from "../config/config.js";

// const connection = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
//     host: config.DB_HOST,
//     dialect: config.DB_DIALECT,
//     ssl: true,
//     tls: true
// });

const connection = new Sequelize(config.DB_URI, {
    ssl: {
        require: true,
        rejectUnauthorized: false
    },
    tls: true
});

try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}