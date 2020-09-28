import React from 'react'

function TodoForm(props) {
    const { changeHandler, submitHandler, inputValue, clearHandler } = props
    return (
        <div>
            <form>
                <input 
                    type='text'
                    placeholder='new todo'
                    onChange={changeHandler}
                    value={inputValue}  
                />
                <button onClick={submitHandler}>Submit</button>
                <button onClick={clearHandler}>Clear</button>
            </form>
        </div>
    )
}

export default TodoForm