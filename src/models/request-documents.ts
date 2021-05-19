import  Sequelize from 'sequelize';
import connection from '../conection';

export const  RequestDocuments = connection.define('SolicitacaoDocumentos', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    DetalheEspecifico: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    TipoDocunentoId: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    Status: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    CandidaturaId: {
        type: Sequelize.STRING(50),
        allowNull: true,
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

