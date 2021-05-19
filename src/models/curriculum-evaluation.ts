import  Sequelize from 'sequelize';
import connection from '../conection';

export const curriculumEvaluation = connection.define('AvaliacaoCurriculo', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    Designacao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    IsFavorito: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    OportunidadeId: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    CurriculoId: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

