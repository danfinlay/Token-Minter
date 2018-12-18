import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import queryString from 'querystringify'
import { Link } from 'react-router-dom'

class ManageToken extends Component {

  constructor () {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Coming soon!</h1>
        <Link to="/"><Button>Home</Button></Link>
      </div>
    )
  }

  visitForm () {

    const opts = {}
    const keys = ['tokenImage', 'tokenName', 'tokenAddress', 'tokenNet', 'tokenSymbol', 'tokenDecimals']

    keys.forEach((key) => {
      const el = document.querySelector('#' + key)
      if (!el) return
      opts[key] = el.value
    })

    window.location.href = './add?' + queryString.stringify(opts)
  }
}

export default ManageToken;

