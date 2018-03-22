import React from 'react';
import ReactDOM from 'react-dom';
import App from './Traditional/App';
import { ApolloProvider } from 'react-apollo';
import { client } from './graphql/client';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#067c64'
    },
    secondary: {
      main: '#ffffff'
    }
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <App />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
