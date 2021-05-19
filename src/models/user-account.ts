import  Sequelize from 'sequelize';
import connection from '../conection';

export const  UserAccount = connection.define('ContaUsuario', {
  Id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  UserName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  EmailAlternativo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Provider: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  PassWord: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  PessoaId: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  EmpresaId: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  EstadoId: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});
