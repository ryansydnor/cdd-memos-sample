import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import { client } from './client';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider>
      <App client={client}/>
    </MuiThemeProvider>
  </ApolloProvider>, 
  document.getElementById('root')
);
