import  Sequelize from 'sequelize';
import connection from '../conection';

export const  CurriculumDetailed = connection.define('CurriculoDetalhe', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    CurriculoId: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    DetalheId: {
        type: Sequelize.STRING(50),
        allowNull: true
    },

    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});
