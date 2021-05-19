import  Sequelize from 'sequelize';
import connection from '../conection';

export const  DocumentsType = connection.define('TipoDocumentos', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    Designacao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    EstadoId: {
        type: Sequelize.STRING(50),
    },
});
