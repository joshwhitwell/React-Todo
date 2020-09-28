import React from 'react'
import Todo from './Todo'

function TodoList(props) {
    const { toDoList, inputHandler } = props
    return (
        <ol>
            {toDoList?.map(toDo => <Todo key={toDo.id} toDo={toDo} inputHandler={inputHandler} />)}
        </ol>
    )
}

export default TodoList