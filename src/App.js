import React from 'react';
import TodoList from './components/TodoList'

const dummyData = {
  todo: 'Clean House',
  id: Date.now(),
  completed: false
}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      toDoList: [dummyData]
    }
  }
  render() {
    return (
      <div>
        <h2>To-Do List</h2>
        <TodoList toDoList={this.state.toDoList}/>
      </div>
    );
  }
}

export default App;
