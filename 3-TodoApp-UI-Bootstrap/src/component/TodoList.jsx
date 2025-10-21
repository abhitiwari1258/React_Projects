import TodoItem from "./TodoItem"
const TodoList = ()=>{
    const todoList = [{id:1, todoItem:"Save Milk", todoDate:"08-10-2025"},
                    {id:2, todoItem:"Go To Gym", todoDate:"Every Day"},
                    {id:3, todoItem:"Coding", todoDate:"Every Day"},
                    {id:4, todoItem:"Travelling", todoDate:"20-10-2025"}]
    return(
        <>
            {todoList.map((item)=>{
                return <TodoItem key={item.id} id={item.id} todoItem={item.todoItem} todoDate={item.todoDate}/>
            })}
        </>
    )
}

export default TodoList