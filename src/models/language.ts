import  Sequelize from 'sequelize';
import connection from '../conection';

export const  Language = connection.define('Idiomas', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    Designacao: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    Status: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
});
