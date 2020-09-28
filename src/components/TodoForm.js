import React from 'react'

function TodoForm(props) {
    const { changeHandler, submitHandler, inputValue } = props
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
            </form>
        </div>
    )
}

export default TodoForm