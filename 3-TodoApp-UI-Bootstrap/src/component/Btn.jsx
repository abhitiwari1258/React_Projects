// import './Btn.css'
function Btn({btnType,btnText, handler}){
    if(btnType === "success"){
        return <button className="btn btn-success button" onClick={handler}>{btnText}</button>
    }else if(btnType === "danger"){
        return <button className="btn btn-danger button" onClick={handler}>{btnText}</button>
    }
}

export default Btn