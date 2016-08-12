const request = require('request')

module.exports = (user_id, password, cb) => {
  request.post({
    url:'https://mypayroll.vensurehr.com/ClientLogin',
    form: {
      action: 'login',
      enter_button: 'login',
      force_refresh: 'C',
      login_time: (new Date().getTime()),
      password: password,
      user_id: user_id,
      user_type: 'C'
    },
    jar: true
  }, cb)
}
