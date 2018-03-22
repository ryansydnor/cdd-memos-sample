import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Card, {CardContent} from 'material-ui/Card'
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui-icons/ChevronLeft';
import Typography from 'material-ui/Typography';

import TodoListContainer from './TodoListContainer';
import TodoDetailsContainer from './TodoDetailsContainer';


class App extends Component {

  state = { selectedTodoId: null };

  updateView = (selectedTodoId) => {
    this.setState({ selectedTodoId });
  }

  render() {
    const { selectedTodoId } = this.state;

    return (
      <div style={{width:'768px', margin:'0 auto'}}>
        <AppBar position="static" color="primary">
          <Toolbar>
            {selectedTodoId &&
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
          { selectedTodoId && <TodoDetailsContainer id={ selectedTodoId } /> }
          { !selectedTodoId && <TodoListContainer selectTodo={this.updateView} /> }
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default App;