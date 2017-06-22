/**
 * Created by admin on 2017/5/8.
 */
const router = require('express').Router()

router.use(function (req, res, next) {
  console.log('base route =>', req.originalUrl)
  next()
})

// defined api list
router.use('/managers', require('./managers'))
// ...

module.exports = router
