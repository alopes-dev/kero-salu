import  Sequelize from 'sequelize';
import connection from '../conection';

export const  Documents = connection.define('Documento', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    NumDocumento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    TipoDocumentoId: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});
