/**
 * Created by admin to 2017/5/8.
 */
const router = require('express').Router()
const {ManagerService} = require('../services')

router.get('/', function (req, res, next) {
  ManagerService.getAll({}, function (err, managers) {
    if (!err) {
      managers.rows = managers.rows.map(function (row) {
        return {
          id: row.id,
          username: row.username,
          phoneNumber: row.phoneNumber,
          email: row.email,
          isActive: row.isActive,
          createdAt: row.createdAt,
          updatedAt: row.updatedAt
        }
      })
      res.json(managers)
    } else {
      res.status(500).json({
        message: err.message
      })
    }
  })
})

router.post('/', function (req, res, next) {
  res.send('This is a post request.')
})

router.put('/:id', function (req, res, next) {
  res.send('This is a put request.' + req.params.id)
})

router.delete('/:id', function (req, res, next) {
  res.send('This is a delete request.' + req.params.id)
})

module.exports = router
