import React from 'react'

function Todo(props) {
    const {toDo} = props
    return (
        <li>
            {toDo.todo}
        </li>
    )
}

export default Todo