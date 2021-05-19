import  Sequelize from 'sequelize';
import connection from '../conection';

export const  VacanciesCompetence = connection.define('OportunidadeCompetencias', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    CompetenciaId: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    OportunidadeId: {
        type: Sequelize.STRING(50),
        allowNull: true
    },

    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});
