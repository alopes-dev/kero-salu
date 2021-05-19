import  Sequelize from 'sequelize';
import connection from '../conection';

export const  PersonLanguage = connection.define('PessoaIdiomas', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    Percentagem: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    IdiomaId: {
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