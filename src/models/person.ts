import  Sequelize from 'sequelize';
import connection from '../conection';

export const  Person = connection.define('Pessoa', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    Nome: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    SobreNome: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    Morada: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    DataNascimento: {
        type: Sequelize.DATE,
        allowNull: true,
    },

    IsCandidato: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
});
