
const request = require('request-promise-native')

module.exports = function (req, res, next) {
  req.htmlSum = ''

  if (! Array.isArray(req.urls) || req.urls.length === 0) {
    console.log('no URLs to fetch')
    next()
    return
  }

  const requestCount = req.urls.length
  let completed = 0

  const nextIfComplete = function() {
    completed++
    console.log(`${completed} of ${requestCount} complete`)

    if (completed === requestCount) {
      next()
    }
  }

  req.urls.forEach(function (url) {
    console.log(`requesting: ${url}`)

    request.get(url)
      .then(function (htmlString) {
        req.htmlSum += htmlString
        nextIfComplete()
      })
      .catch(function() {
        nextIfComplete()
      })
  })
}
