import  Sequelize from 'sequelize';
import connection from '../conection';

export const  ActivitySector = connection.define('SectorDeAtividades', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    Designacao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    EstadoId: {
        type: Sequelize.STRING(50),
    },
});

