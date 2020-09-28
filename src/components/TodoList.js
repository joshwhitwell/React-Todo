import React from 'react'
import Todo from './Todo'

function TodoList(props) {
    const { toDoList, toggleHandler } = props
    return (
        <ol>
            {toDoList?.map(toDo => 
            <Todo 
                key={toDo.id} 
                toDo={toDo} 
                toggleHandler={toggleHandler}
            />)}
        </ol>
    )
}

export default TodoList