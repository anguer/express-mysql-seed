/**
 * Created by admin on 2017/5/9.
 */
const {Managers} = require('../models')

const ManagerService = {
  getAll (options, callback) {
    Managers.findAndCount({
      where: {
        // isActive: true
      },
      offset: 0,
      limit: 10,
      order: []
    }).then(function (data) {
      return callback(null, data)
    }).catch(function (err) {
      return callback(err, null)
    })
  },
  getById (id, callback) {
    Managers.findById(id).then(function (manager) {
      if (!manager) {
        return callback(new Error('User does not exist'), null)
      } else {
        return callback(null, {
          id: manager.id,
          username: manager.username
        })
      }
    }).catch(function (err) {
      return callback(err, null)
    })
  },
  add ($data, callback) {
    Managers.create($data).then(function (manager) {
      if (!manager) {
        return callback(new Error('User register failed'), null)
      } else {
        return callback(null, {
          id: manager.id,
          username: manager.username
        })
      }
    }).catch(function (err) {
      return callback(err, null)
    })
  }
}

module.exports = ManagerService
