
module.exports = function (req, res, next) {
  req.urls = []
	if (req.body && typeof req.body === 'string') {
		req.urls = req.body.split(',')
	}

	next()
}
