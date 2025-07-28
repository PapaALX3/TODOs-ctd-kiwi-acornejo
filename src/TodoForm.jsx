
function TodoForm(){
    return (<form>
        <label htmlFor="todoTitle">Todo</label>
        <input type="text" id="todoTitle" name="todoTitle"></input>
        <button text="submit">Add Todo</button>
    </form>
    )
}

export default TodoForm