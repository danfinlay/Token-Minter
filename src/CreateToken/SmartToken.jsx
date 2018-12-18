import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import DownloadMetaMaskButton from '../DownloadMetaMaskButton';
import Eth from 'ethjs-query';
import etherscanLink from 'etherscan-link';
import { Link } from 'react-router-dom'
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import queryString from 'querystringify'

const metaMarkAddress = '0x617b3f8050a0bd94b6b1da02b4384ee5b4df13f4';

class SmartToken extends Component {

  constructor (props) {
    super()
  }

  render (props, context) {
    return (
      <div className="values">
        <h1>Smart Token</h1>
        <h2>Coming soon!</h2>
        <Link to="/"><Button>Home</Button></Link>
        <Link to="/create/mintable"><Button>Mintable Token Instead</Button></Link>
      </div>
    )
  }
}

SmartToken.contextTypes = {
  web3: PropTypes.object,
}

export default SmartToken;
