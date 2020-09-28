import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

// const dummyData = {
//   todo: 'Clean House',
//   id: Date.now(),
//   completed: false
// }

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      toDoList: [],
      inputValue: ''
    }
  }

  changeHandler = (e) => {
    this.setState({...this.state, inputValue: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    const newToDo = {
      todo: this.state.inputValue,
      id: Date.now(),
      completed: false
    }
    this.setState({...this.state, 
      toDoList: [...this.state.toDoList, newToDo], 
      inputValue: ''
    })
  }

  clearHandler = (e) => {
    e.preventDefault()
    let filtered = [...this.state.toDoList].filter(todo => todo.completed === false)
    this.setState({...this.State, toDoList: filtered})
  }

  toggleHandler = (id) => {
    this.setState({...this.state, toDoList: this.state.toDoList.map(todo => todo.id === id ? {...todo, completed: true} : todo)})
  }

  render() {
    return (
      <div>
        <h2>To-Do List</h2>
        <TodoList 
          toDoList={this.state.toDoList}
          toggleHandler={this.toggleHandler}
        />
        <TodoForm 
          submitHandler={this.submitHandler} 
          changeHandler={this.changeHandler}
          inputValue={this.state.inputValue}
          clearHandler={this.clearHandler} 
        />
      </div>
    );
  }
}

export default App;
