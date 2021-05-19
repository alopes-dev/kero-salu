import  Sequelize from 'sequelize';
import connection from '../conection';

export const  curriculum = connection.define('Curriculo', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    Designacao: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    ResumoProfissional: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    CandidatoId: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },

    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
});
