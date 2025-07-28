/* new file for part2 in assignment */

function TodoForm(){
    return <form>
        <label htmlFor="todoTitle">Todo</label>
        <input type="text" id="todoTitle" name="todoTitle"></input>
        <button text="Add Todo">Add Todo</button>
    </form>
}

export default TodoForm