import React from 'react'
import Todo from './Todo'

function TodoList(props) {
    const { toDoList} = props
    return (
        <ol>
            {toDoList?.map(toDo => <Todo key={toDo.id} toDo={toDo}/>)}
        </ol>
    )
}

export default TodoList