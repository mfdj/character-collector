const connect = require('connect')
const bodyParser = require('body-parser')

// app

const app = connect()
const handlePost = require('./src/handle-post-middleware')
const urlFetcher = require('./src/url-fetcher-middleware')
const sumProcessor = require('./src/process-html-sum-middleware')

// post-body will be parsed to a string; be permissive about content-type so clients can be lazy
app.use(bodyParser.text({type: '*/*'}))

// NOTE: would probably refactor the `chracter-collector` routing to it's own module but
// at present it's the only end-point

app.use('/chracter-collector', handlePost)
app.use('/chracter-collector', urlFetcher)
app.use('/chracter-collector', sumProcessor)

app.use('/chracter-collector', function(req, res) {
  console.log('length of htmlSum: ' + req.htmlSum.length)
  console.log('length of final result: ' + req.weirdEchoResult.length)

  res.end(req.weirdEchoResult)
})

// generic error to user, full error-stack printed to dev-console (should be last in the stack)

app.use(function onerror(err, req, res, next) {
  console.log(err)
  res.statusCode = 500
  res.end('internal server error')
})

// could add some configuration around host, port, etc.

app.listen(3000)
