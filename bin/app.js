const GitTokenMailer = require('../dist/index').default
const config = require('../config')

const mailer = new GitTokenMailer(config)
