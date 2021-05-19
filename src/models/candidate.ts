import  Sequelize from 'sequelize';
import connection from '../conection';

export const Candidate = connection.define('Candidato', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    IsFavorito: {
        type: Sequelize.INTEGER,
        allowNull: true
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

