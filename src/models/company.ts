import  Sequelize from 'sequelize';
import connection from '../conection';

export const  Company = connection.define('Empresa', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    Designacao: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    Nif: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    RazaoSocial: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    Missao: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    Telefone: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    DataCriacao: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    
    Visao: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
});
