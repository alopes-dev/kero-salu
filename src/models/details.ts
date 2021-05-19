import  Sequelize from 'sequelize';
import connection from '../conection';

export const  Details = connection.define('Detalhe', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    Designacao: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    NomeDaInstituicao: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    DescricaoDaInstituicao: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    LocalDaInstituicao: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    DataInicio: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    DataFim: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    TipoDetalheId: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
});
