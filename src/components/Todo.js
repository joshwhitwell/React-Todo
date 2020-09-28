import React from 'react'

function Todo(props) {
    const { toDo, toggleHandler } = props

    const toDoStyles = {
        textDecoration: toDo.completed ? 'line-through' : 'none'
    }

    return (
        <li style={toDoStyles} onClick={() => {toggleHandler(toDo.id)}}>
            {toDo.todo}
        </li>
    )
}

export default Todo