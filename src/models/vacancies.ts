import  Sequelize from 'sequelize';
import connection from '../conection';

export const   Vacancies = connection.define('Oportunidades', {
    Id: {
        type: Sequelize.STRING(50),
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    CargaHoraria: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    DataLimite: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    Salario: {
        type: Sequelize.FLOAT,
        allowNull: true,
    },

    IsFinalizado: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    Status: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    Cidade: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    EstadoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    TipoEmpregoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    CargoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    TipoFormacaoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    TipoFuncaoId: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    ProvinciaId: {
        type: Sequelize.STRING(50),
    },
    EmpresaId: {
        type: Sequelize.STRING(50),
    },
    NacionalidadeId: {
        type: Sequelize.STRING(50),
    },
    Experiencia: {
        type: Sequelize.STRING(50),
    },
    NumVagas: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    Detalhes: {
        type: Sequelize.STRING(50),
    },
});
