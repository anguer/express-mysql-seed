/**
 * Created by admin on 2017/5/18.
 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Managers', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id',
      default: 0
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'username',
      unique: 'CI_USERNAME'
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'phone_number',
      unique: 'CI_PHONE_NUMBER'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'email',
      validate: {
        isEmail: true
      }
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'password_hash'
    },
    isActive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'is_active'
    }
  }, {
    tableName: 'sys_managers',
    freezeTableName: true,
    classMethods: {
      associate: function (models) {
        models.Managers.hasMany(models.ManagerRoles, {
          foreignKey: 'managerId'
        })
      }
    }
  })
}
