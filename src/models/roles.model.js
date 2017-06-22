/**
 * Created by admin on 2017/5/18.
 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Roles', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id',
      default: 0
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    }
  }, {
    tableName: 'sys_roles',
    freezeTableName: true,
    classMethods: {
      associate: function (models) {
        models.Roles.hasMany(models.ManagerRoles, {
          foreignKey: 'roleId'
        })
      }
    }
  })
}
