import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Card, {CardContent} from 'material-ui/Card'
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui-icons/ChevronLeft';
import Typography from 'material-ui/Typography';
import TodoList from './/TodoList';
import TodoDetails from './TodoDetails';
import gql from 'graphql-tag';


class App extends Component {

  state = { selectedTodo: null };

  updateView = (selectedTodo) => {
    this.setState({ selectedTodo });
  }

  render() {
    const { allTodos = [] } = this.props.data;
    const { selectedTodo } = this.state;
    return (
      <div style={{width:'768px', margin:'0 auto'}}>
        <AppBar position="static" color="primary">
          <Toolbar>
            {selectedTodo &&
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
          { selectedTodo && <TodoDetails todo={selectedTodo} /> }
          { !selectedTodo && <TodoList todos={allTodos} selectTodo={this.updateView} /> }
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default graphql(gql`
  query todos {
    allTodos { 
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