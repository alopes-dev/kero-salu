import  Sequelize from 'sequelize';
import connection from '../conection';

export const  VacanciesLanguage = connection.define('OportunidadeIdiomas', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    IdiomaId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    OportunidadeId: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },

    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
});
