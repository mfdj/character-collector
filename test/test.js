const assert = require('assert')
const expect = require('chai').expect

// handle-post middleware

describe('handle-post middleware', function() {

  const handlePost = require('../src/handle-post-middleware')

  describe('middleware decorates request with a url-list', function() {
    it('it handles a comma delimited string on the post-body', function() {
      let req = {
        body: "https://foo.bar.com,https://baz.qux.com"
      }

      handlePost(req, {}, function(){})

      expect(req.urls).to.have.same.members(['https://foo.bar.com', 'https://baz.qux.com'])
    })

    it('return an empty list if post-body is not a string', function() {
      let req = {}

      handlePost(req, {}, function(){})

      expect(req.urls).to.have.same.members([])
    })
  })
})
