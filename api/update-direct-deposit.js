const request = require('request')

module.exports = (opts, cb) => {
  request.post({
    url: 'https://mypayroll.vensurehr.com/ach/write',
    form: opts,
    jar: true
  }, cb)
}
