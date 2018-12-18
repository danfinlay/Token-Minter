import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DownloadMetaMaskButton from '../DownloadMetaMaskButton';
import Eth from 'ethjs-query';
import etherscanLink from 'etherscan-link';
import { Link } from 'react-router-dom'
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import queryString from 'querystringify'
import artifact from './ERC20MintableBurnable';
const contract = require("truffle-contract");

const schema = {
  title: "Token Details",
  properties: {
    name: {type: "string", title: "Token Name", default: "My Token", required: true},
    initialValue: {type: "number", title: "Token Supply", default: '1000', required: true},
    symbol: {type: "string", title: "Token Symbol", default: "TKN", required: true},
    decimals: {type: "number", title: "Token Decimals", default: 18, required: true},
  }
};

class MintableToken extends Component {

  constructor (props) {
    super()
    this.state = {
      name: 'My Token',
      symbol: 'TKN',
      decimals: 18,
      initialValue: '1000',
    }
  }


  render (props, context) {
    const { name, symbol, decimals, initialValue } = this.state

    return (
      <div className="values">
        <h1>Mintable Token</h1>
        <Link to="/"><Button>Home</Button></Link>

        <div className="form-content">
          { Object.keys(schema.properties).map((key) => {
            return (
              <div key={key}>
                <TextField
                  id={key}
                  required={schema.properties[key].required}
                  errormessage={this.state[key + 'Error']}
                  label={schema.properties[key].title}
                  margin="normal"
                  value={this.state[key]}
                />
              </div>
            )
          }) }

          <Button onClick={this.deployToken.bind(this)}>
            Create New Token
          </Button>
        </div>

      </div>
    )
  }

  async deployToken() {
    const { name, symbol, decimals, initialValue } = this.state

    console.log('Deploy token here', artifact)
    const TokenContract = contract(artifact)
    TokenContract.setProvider(window.ethereum);
    try {
      const token = await TokenContract.new(name, symbol, decimals, initialValue, {
        from: window.ethereum.selectedAddress,
      })
      console.log('token:', token)
    } catch (e) {
      console.error(e)
    }

    console.log('ho hum!')

  }
}

MintableToken.contextTypes = {
  web3: PropTypes.object,
}

export default MintableToken;
