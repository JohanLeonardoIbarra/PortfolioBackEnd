import Connection from '../../db/connection.js';
import { Model, DataTypes } from 'sequelize';

class Project extends Model {}

Project.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    img: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    deploy: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    github: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
}, {
    sequelize: Connection,
    modelName: 'projects'
});

export default Project;