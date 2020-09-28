import React from 'react'

function Todo(props) {
    const { toDo, toggleHandler } = props
    return (
        <li onClick={() => {toggleHandler(toDo.id)}}>
            {toDo.todo}
        </li>
    )
}

export default Todo