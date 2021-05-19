import  Sequelize from 'sequelize';
import connection from '../conection';

export const  PersonDocuments = connection.define('PessoaDocumentos', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    DocumentoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    PessoaId: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
});