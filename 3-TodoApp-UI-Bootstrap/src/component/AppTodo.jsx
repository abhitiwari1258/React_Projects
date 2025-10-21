import Btn from "./Btn"
const AppTodo = ()=>{
    const addHandler = ()=>{
        console.log(`trying to add `);  
    }
    return(
        <>
            <div className="container ">
                <div className="row kg-row">
                <div className="col-5"><input type="text" className="form-control" placeholder="Username"></input></div>
                <div className="col-3"><input type="date" className="form-control" placeholder="Username"></input></div>
                <div className="col-2">
                    <Btn btnType="success" btnText="Add" handler={addHandler}/>
                </div>
                </div>
            </div>
        </>
    )
}

export default AppTodo