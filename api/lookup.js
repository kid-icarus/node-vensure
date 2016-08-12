const request = require('request')

module.exports = (cb) => {
  request.post({
    url: 'https://mypayroll.vensurehr.com/EmployeeSelect/Lookup',
    form: {
      'criteria': '',
      'menu_name': 'MNT-PERSONALMAN'
    },
    jar: true
  }, cb)
}
