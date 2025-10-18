const StudentList = ()=>{
    let students = ["Abhishek","Sachin","Yash"]

    return <ol>
        {students.map((student)=>{
            return <li>{student}</li>
        })}
    </ol>
}

export default StudentList;