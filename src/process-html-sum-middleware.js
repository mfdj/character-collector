
module.exports = function(req, res, next) {
  req.weirdEchoResult = ''

  if (req.htmlSum && typeof req.htmlSum === 'string') {
    let characters = new Map
    let char

    for (let i = 0, len = req.htmlSum.length; i < len; i++) {
      char = req.htmlSum[i]

      if (!char.match(/[0-9]/)) {
        if (!characters.has(char)) {
          characters.set(char)
          req.weirdEchoResult += char
        }
      }
    }
  }

  next()
}
