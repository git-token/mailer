import Promise from 'bluebird'

export default function saveNewsletterRecipient({ email }) {
  return new Promise((resolve, reject) => {
    this.query({
        queryString: `
          DELETE FROM newsletter_recipients WHERE email = "${email}";
        `
    }).then(() => {
      resolve(true)
    }).catch((error) => {
      reject(error)
    })
  })
}
