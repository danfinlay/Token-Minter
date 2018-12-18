import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwitchNetworkNotice from './SwitchNetworkNotice'
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import { Link, BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';

class CreateToken extends Component {
  render (props, context) {
    return (
      <div>
        <h1>Welcome!</h1>
        <Link to="/create"><Button>Create New Token</Button></Link>
        <Link to="/manage"><Button>Manage Existing Token</Button></Link>
      </div>
    )
  }
}

export default CreateToken;
