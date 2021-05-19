import  Sequelize from 'sequelize';
import connection from '../conection';

export const  Employer = connection.define('Empregador', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    PessoaId: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});