import  Sequelize from 'sequelize';
import connection from '../conection';

export const PersonContacts = connection.define('PessoaContactos', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    ContactoId: {
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

