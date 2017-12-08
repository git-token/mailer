import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mysql from 'mysql'
import gmailSend from 'gmail-send'

import {
  newsletterRouter
} from './routers/index'

import {
  sendMail,
  welcomeMessage
} from './mailer/index'

import {
  query,
  saveNewsletterRecipient,
  unsubscribe
} from './sql/index'

export default class GitTokenMailer {
  constructor({ mysqlOpts, gmail, sessionSecret }) {
    this.port = 8686;
    const { user, pass } = gmail

    this.gmailSend = gmailSend({ user, pass })

    this.query = query.bind(this)
    this.sendMail = sendMail.bind(this)
    this.welcomeMessage = welcomeMessage.bind(this)
    this.newsletterRouter = newsletterRouter.bind(this)
    this.saveNewsletterRecipient = saveNewsletterRecipient.bind(this)
    this.unsubscribe = unsubscribe.bind(this)

    /* MySql Connection */
    this.mysql = mysql.createConnection(mysqlOpts)

    /* Express Application */
    this.app = express()


    this.app.use(require('cookie-parser')());
    this.app.use(require('express-session')({
      secret: sessionSecret,
      resave: true,
      saveUninitialized: true
    }));
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))

    this.app.use(cors())

    this.app.use('/newsletter/', this.newsletterRouter())

    this.listen()
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`GitToken Mailer Listening on Port: ${this.port}`)
    })
  }
}
