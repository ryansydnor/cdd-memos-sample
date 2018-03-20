import React, { Component } from 'react';

import { graphql } from 'react-apollo';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

import {Card} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import CircularProgress from 'material-ui/CircularProgress';
import FontIcon from 'material-ui/FontIcon';
import { TODOS } from './graphql';

import './App.css';

class App extends Component {

  state = {
    currentFilter: 'SHOW_ALL'
  };

  handleChange = filter => {
    this.setState({ currentFilter: filter });
  }

  render() {
    return (
        <Card className="card" key="front">
          <div className="header">
            Todo App powered by GraphQL and React <FontIcon className="material-icons">info</FontIcon>
          </div>
          <AddTodo addTodo={this.props.addTodo}/>
          {this.props.todos && this.props.todos.length > 0 &&
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
          >
            <Tab
              label="All"
              value="SHOW_ALL">
            </Tab>
            <Tab
              label="Active"
              value="SHOW_ACTIVE">
            </Tab>
            <Tab
              label="Complete"
              value="SHOW_COMPLETED">
            </Tab>
          </Tabs>}
          {this.props.loading &&
            <CircularProgress size={80} thickness={5} />
          }
          <div className="turn">
            <TodoList
              todos={this.props.todos || []}
              filter={this.state.currentFilter}
              toggleTodo={this.props.toggleTodo}
            />
          </div>
          <Footer/>
        </Card>
    );
  }
}

const withTodos = graphql(
  TODOS,
  {
    props: ({ ownProps, data }) => {
      if (data.loading) return { loading: true }
      if (data.error) return { hasErrors: true }
      console.log('data', data);
      return {
        todos: data.allTodoes,
      }
    },
  }
)

export default withTodos(App);