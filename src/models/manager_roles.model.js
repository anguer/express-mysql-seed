/**
 * Created by admin on 2017/5/18.
 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ManagerRoles', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id',
      default: 0
    },
    managerId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'manager_id'
    },
    roleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'role_id'
    }
  }, {
    tableName: 'sys_manager_roles',
    freezeTableName: true,
    classMethods: {
      associate: function (models) {
        models.ManagerRoles.belongsTo(models.Managers, {
          foreignKey: 'managerId'
        })
        models.ManagerRoles.belongsTo(models.Roles, {
          foreignKey: 'roleId'
        })
      }
    }
  })
}
