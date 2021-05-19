import  Sequelize from 'sequelize';
import connection from '../conection';

export const FunctionType = connection.define('TipoFuncoes', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    Designacao: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    AreaId: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});