import React, { Component } from 'react';

import { graphql } from 'react-apollo';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import Logos from './Logos';

import {Card} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import CircularProgress from 'material-ui/CircularProgress';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';

import ReactCardFlip from 'react-card-flip';
import { TODOS } from './graphql';

import './App.css';

const styles = {
  tabs: {
    backgroundColor: 'white',
  },
  tab: {
    fontSize: 20,
    textTransform: 'initial',
    fontWeight: 400,
  },
  button: {
    color: 'rgba(0, 0, 0, 0.54)',
    borderBottom: '1px solid #eee',
    marginBottom: '-1px'
  },
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 24,
  }
};

class App extends Component {

  state = {
    currentFilter: 'SHOW_ALL',
    isFlipped: false,
  };

  handleClick(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  handleChange = filter => {
    this.setState({ currentFilter: filter });
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <Card className="card" key="front">
          <div className="header" onClick={this.handleClick.bind(this)}>
            Todo App powered by GraphQL and React <FontIcon className="material-icons" style={styles.icon}>info</FontIcon>
          </div>
          <AddTodo addTodo={this.props.addTodo}/>
          {this.props.todos && this.props.todos.length > 0 &&
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            tabItemContainerStyle={styles.tabs}>
            <Tab
              style={styles.tab}
              buttonStyle={styles.button}
              label="All"
              value="SHOW_ALL">
            </Tab>
            <Tab
              style={styles.tab}
              buttonStyle={styles.button}
              label="Active"
              value="SHOW_ACTIVE">
            </Tab>
            <Tab
              style={styles.tab}
              buttonStyle={styles.button}
              label="Complete"
              value="SHOW_COMPLETED">
            </Tab>
          </Tabs>}
          {this.props.loading &&
            <CircularProgress size={80} thickness={5} />
          }
          <div className="turn" style={{ opacity: this.state.isFlipped?'0':'1' }}>
            <TodoList
              todos={this.props.todos || []}
              filter={this.state.currentFilter}
              toggleTodo={this.props.toggleTodo}
            />
          </div>
          <Footer/>
        </Card>
        <Card className="card" key="back">
          <div className="header" onClick={this.handleClick.bind(this)}>
            Todo App powered by GraphQL and React <FontIcon className="material-icons" style={styles.icon}>info</FontIcon>
          </div>
          <div className="chips" style={styles.wrapper}>
            <Chip style={styles.chip}>React</Chip>
            <Chip style={styles.chip}>Apollo Client v2</Chip>
            <Chip style={styles.chip}>Queries</Chip>
            <Chip style={styles.chip}>Mutations</Chip>
            <Chip style={styles.chip}>Subscriptions</Chip>
          </div>
          <Logos/>
          <div className="empty"></div>
          <Footer/>
        </Card>
      </ReactCardFlip>
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