import React, { Component } from 'react'



export default function Newsletter({ email }) {
  const unsubscribe = `https://mailer.gittoken.io/newsletter/unsubscribe/${email}`

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Thanks for Subscribing to the GitToken Newsletter!</h2>
      <img src="https://raw.githubusercontent.com/git-token/media/master/png/git_token_logo.png" width="400" height="400" />
      <br/>
      <p>
        We're working hard to launch GitToken on Ethereum. To keep you informed,
        each month we will send you a progress report.
      </p>
      <br/>
      <p>
        Thanks again for your support! In addition to this newsletter, connect with
        GitToken on <a href="https://medium.com/gittoken/">Medium</a>, <a href="https://twitter.com/gittoken/">Twitter</a>,
        and <a href="https://gitter.im/git-token/">Gitter</a>.
      </p>
      <p>
        Looking to contribute? Check out the GitToken <a href="https://github.com/git-token/">GitHub</a> repositories!
      </p>
      <br/>
      <small>If you did not subscribe to this newsletter, please feel free to <a href={unsubscribe}>unsubscribe</a> at any time</small>
      <br/>
    </div>
  )
}
