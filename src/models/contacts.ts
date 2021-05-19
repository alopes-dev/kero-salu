import  Sequelize from 'sequelize';
import connection from '../conection';

export const  Contacto = connection.define('Contacto', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    Telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    Email: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },

    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
});
