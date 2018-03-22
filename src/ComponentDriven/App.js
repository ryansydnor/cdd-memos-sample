import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Card, {CardContent} from 'material-ui/Card'
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui-icons/ChevronLeft';
import Typography from 'material-ui/Typography';

import MemoListContainer from './MemoListContainer';
import MemoDetailsContainer from './MemoDetailsContainer';
import LoggedInUserContainer from './LoggedInUserContainer';


class App extends Component {

  state = { selectedMemoId: null };

  updateView = (selectedMemoId) => {
    this.setState({ selectedMemoId });
  }

  render() {
    const { selectedMemoId } = this.state;

    return (
      <div style={{width:'960px', margin:'0 auto'}}>
        <AppBar position="static" color="primary">
          <Toolbar style={{display:'flex'}}>
            {selectedMemoId &&
              <IconButton color="secondary" onClick={() => this.updateView()}>
                <ChevronLeft />
              </IconButton> 
            }
            <Typography variant="headline" color="secondary" style={{flex:1}}>
              Component Driven Development with GraphQL and Apollo
            </Typography>
            <div>
              <LoggedInUserContainer />
            </div>
          </Toolbar>
        </AppBar>
        <Card>
          <CardContent>
          { selectedMemoId && <MemoDetailsContainer id={ selectedMemoId } /> }
          { !selectedMemoId && <MemoListContainer selectMemo={this.updateView} /> }
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default App;