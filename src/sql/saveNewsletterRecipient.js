import Promise from 'bluebird'

export default function saveNewsletterRecipient({ email }) {
  return new Promise((resolve, reject) => {
    this.query({
      queryString: `
        CREATE TABLE IF NOT EXISTS newsletter_recipients (
          email  CHARACTER(100) PRIMARY KEY
        );
      `
    }).then(() => {
      return this.query({
        queryString: `
          INSERT INTO newsletter_recipients (
            email
          ) VALUES (
            "${email}"
          );
        `
      })
    }).then(() => {
      resolve(true)
    }).catch((error) => {
      reject(error)
    })
  })
}
