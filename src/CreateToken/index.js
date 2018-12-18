import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import { Link, BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import MintableToken from './MintableToken';
import SmartToken from './SmartToken';
import Menu from './Menu';

class CreateToken extends Component {
  render (props, context) {
    return (
      <Switch>
        <Route path="/create/mintable" component={MintableToken} />
        <Route path="/create/smart-token" component={SmartToken} />
        <Route path="/" component={Menu} />
      </Switch>
    )
  }
}

export default CreateToken;

