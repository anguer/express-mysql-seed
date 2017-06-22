/**
 * Created by admin to 2017/5/8.
 */
const express = require('express')
const logger = require('morgan')
// const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

// import routes
const api = require('./routes/index')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// app.use(cookieParser('Why not work'))
// app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  const origin = req.headers.origin
  if (typeof origin === 'undefined') {
    // No Cross Origin redirect
    res.header('Access-Control-Allow-Origin', '*')
  } else if (
    (origin.indexOf('http://localhost')) === 0 ||
    (origin.indexOf('http://172.16.') === 0) ||
    (origin.indexOf('http://192.168.1.') === 0) ||
    (origin.indexOf('http://domain.com') === 0)
  ) {
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Credentials', 'true')
  } else {
    res.header('Access-Control-Allow-Origin', 'http://localhost')
  }
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, X-Access-Token')

  next()
})


// set baseUrl
app.use('/api', api)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500)
  // res.render('error');
  res.json(err)
})

module.exports = app
