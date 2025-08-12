import { useRef } from 'react';

function TodoForm(){
    const todoTitleInput = useRef("");
        function handleAddTodo(event){
            event.preventDefault()
            console.dir(event.target.title.value)
            event.target.title.value = "";
            todoTitleInput.current.focus()
        }
    return <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Todo</label>
            <input ref={todoTitleInput} type="text" id="todoTitle" name="title"></input>
            <button text="Add Todo">Add Todo</button>
        </form>
}

export default TodoForm