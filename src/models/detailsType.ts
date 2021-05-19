import  Sequelize from 'sequelize';
import connection from '../conection';

export const  DetailsType = connection.define('TipoDetalhe', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    Designacao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Descricao: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    tipoIcon: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
});

