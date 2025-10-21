import Btn from "./Btn"
const TodoItem = ({id,todoItem,todoDate})=>{

    const deleteHandler = ()=>{
        console.log(`trying to deletr ${id} ${todoItem}`);  
    }
    return(
        <>
            <div className="container">
                <div className="row kg-row">
                    <div className="col-5 text-truncate">
                        {todoItem}
                    </div>
                    <div className="col-3">
                        {todoDate}
                    </div>
                    <Btn/>
                    <div className="col-2">
                        <Btn btnType="danger" btnText="Remove" handler={deleteHandler}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoItem