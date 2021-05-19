import  Sequelize from 'sequelize';
import connection from '../conection';

export  const curriculumLanguage = connection.define('CurriculoIdiomas', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    CurriculoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    IdiomaId: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    Percentagem: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
});

