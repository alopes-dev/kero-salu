import  Sequelize from 'sequelize';
import connection from '../conection';

export const  Status = connection.define('estados', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    Designacao: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
