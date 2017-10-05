const connect = require('connect')

const app = connect()

app.use(function (req, res, next) {
  next(new Error('test'))
})

// generic error to user, full error-stack printed to dev-console

app.use(function onerror(err, req, res, next) {
  console.log(err)
  res.statusCode = 500
  res.end('internal server error')
})

app.listen(3000)
