import Promise from 'bluebird'

export default function sendMail({ subject, to, html }) {
  return new Promise((resolve, reject) => {

    this.gmailSend({ subject, to, html }, (error, result) => {
      if (error) { reject(error) }
      resolve(result)
    })

  })
}
