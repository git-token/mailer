require('dotenv').config({ path: `${process.cwd()}/.env`})


const config = {
  sessionSecret: process.env['SESSION_SECRET'],
  gmail: {
    user: process.env['GMAIL_USER'],
    pass: process.env['GMAIL_PASSWORD']
  },
  mysqlOpts: {
    host: process.env['MYSQL_HOST'],
    user: process.env['MYSQL_USER'],
    password: process.env['MYSQL_ROOT_PASSWORD'],
    database: process.env['MYSQL_DATABASE']
  }
}

module.exports = config
