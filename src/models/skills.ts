import  Sequelize from 'sequelize';
import connection from '../conection';

export const  Skill = connection.define('Skills', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    Designacao: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    Percentagem: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    Descricao: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
});
