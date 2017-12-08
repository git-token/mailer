import { Router } from 'express'
import ReactDomServer from 'react-dom/server'
import {
  Newsletter
} from '../components/index'

import {
  welcomeMessage
} from '../mailer/index'

export default function newsletterRouter() {
  let router = Router()

  router.get('/unsubscribe/:email?', (req, res) => {
    const { email } = req.params
    this.unsubscribe({ email }).then((result) => {
      res.redirect('https://gittoken.io')
    }).catch((error) => {
      console.log('error', error)
      res.status(500).send(JSON.stringify(error, null, 2))
    })
  })

  router.post('/subscribe', (req, res) => {
    const { email } = req.body
    this.saveNewsletterRecipient({ email }).then(() => {
      // const html = this.welcomeMessage({ email })
      const html = ReactDomServer.renderToStaticMarkup(Newsletter({ email }))
      console.log('html', html)

      return this.sendMail({
        subject: 'Thanks for Subscribing to the GitToken Newsletter!',
        to: email,
        html
      })
    }).then((result) => {
      res.status(200).send(result)
    }).catch((error) => {
      console.log('error', error)
      res.status(500).send(JSON.stringify(error, null, 2))
    })
  })

  return router;
}
