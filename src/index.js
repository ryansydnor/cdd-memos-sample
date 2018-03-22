import React from 'react';
import ReactDOM from 'react-dom';
import TraditionalApp from './Traditional/App';
import ComponentDrivenApp from './ComponentDriven/App';
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
      {/* <TraditionalApp /> */}
      { <ComponentDrivenApp /> }
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
