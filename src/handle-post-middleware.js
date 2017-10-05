
module.exports = function (req, res, next) {
	let body = req.body

  req.urls = []
	if (body && typeof body === 'string') {
		req.urls = req.body.split(',')
	}

	next()
}
