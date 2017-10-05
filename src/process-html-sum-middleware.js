
module.exports = function(req, res, next) {
  req.weirdEchoResult = ''
  next()
}
