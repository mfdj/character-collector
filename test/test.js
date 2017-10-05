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

describe('sum response', function() {

  const processor = require('../src/process-html-sum-middleware')

  describe('generates the "weird-echo" response', function() {
    it('it handles a custom htmlString property and parses it for the final result', function() {
      let req = {
        htmlSum: "abcdxyz1234daffazh2aaah3114"
      }

      processor(req, {}, function(){})

      assert.strictEqual(req.weirdEchoResult, 'abcdxyzfh')
    })

    it("it sets an empty result when there is no htmlSum", function() {
      let req = {}

      processor(req, {}, function(){})

      assert.strictEqual(req.weirdEchoResult, '')
    })
  })
})
