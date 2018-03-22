import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Card, {CardContent} from 'material-ui/Card'
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui-icons/ChevronLeft';
import Typography from 'material-ui/Typography';
import MemoList from './MemoList';
import MemoDetails from './MemoDetails';
import gql from 'graphql-tag';


class App extends Component {

  state = { selectedMemo: null };

  updateView = (selectedMemo) => {
    this.setState({ selectedMemo });
  }

  render() {
    const { allMemos = [] } = this.props.data;
    const { selectedMemo } = this.state;
    return (
      <div style={{width:'768px', margin:'0 auto'}}>
        <AppBar position="static" color="primary">
          <Toolbar>
            {selectedMemo &&
              <IconButton color="secondary" onClick={() => this.updateView()}>
                <ChevronLeft />
              </IconButton> 
            }
            <Typography variant="title" color="secondary">
              Component Driven Development with GraphQL and Apollo
            </Typography>
          </Toolbar>
        </AppBar>
        <Card>
          <CardContent>
          { selectedMemo && <MemoDetails memo={selectedMemo} /> }
          { !selectedMemo && <MemoList memos={allMemos} selectMemo={this.updateView} /> }
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default graphql(gql`
  query memos {
    allMemos { 
      id
      text
      body
      user {
        id
        name
        url
        avatar {
          url
        }
      }
    }
  }
`)(App);