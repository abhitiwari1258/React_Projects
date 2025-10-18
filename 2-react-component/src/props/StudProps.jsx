
const StudProps = (props)=>{
    console.log(props.newStudent);
    
    return <ol>
        {props.newStudent.map((student)=>{
            return <li>{student}</li>
        })}
    </ol>
}

export default StudProps
