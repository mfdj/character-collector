const connect = require('connect')
const handlePost = require('./src/handle-post-middleware')

const app = connect()

app.use('/weird-echo', handlePost)

app.use('/weird-echo', function(req, res) {
  res.end('number of urls: ' + req.urls.length)
})

// generic error to user, full error-stack printed to dev-console

app.use(function onerror(err, req, res, next) {
  console.log(err)
  res.statusCode = 500
  res.end('internal server error')
})

app.listen(3000)
