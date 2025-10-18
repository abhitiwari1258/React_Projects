const Random = ()=>{
    let random = Math.floor(Math.random()*100)
    return <li style={{color:"green"}}>{random}</li>
}

export default Random