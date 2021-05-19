import  Sequelize from 'sequelize';
import connection from '../conection';

export const Candidature = connection.define('Candidaturas', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    CandidatoId: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    IsAnalizado: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    Status: {
        type: Sequelize.INTEGER,
        allowNull: true,
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

