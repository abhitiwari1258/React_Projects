import './BtnProps.css'
function BtnProps({btnType,btnText, handler}){
    if(btnType === "success"){
        return <button className="green" onClick={handler}>{btnText}</button>
    }else if(btnType === "failure"){
        return <button className="red" onClick={handler}>{btnText}</button>
    }else{
        return <button className="blue" onClick={handler}>{btnText}</button>
    }
}

export default BtnProps