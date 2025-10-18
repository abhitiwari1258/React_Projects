function DynamicComp(){
// ----------------using Js-------------------------
    
    const studentName = "Shyam"

    const subMarks = [45,78,90,67,75]
    const studPercentage = ()=>{
        let sum = 0;
        for(let i=0; i<subMarks.length; i++){
            sum += subMarks[i]
        }
        return sum/subMarks.length;
    }
// ---------------------------------------------------
    return(
        <>
            <p>{studentName} score {studPercentage()} percent</p>
        </>
    )
}

export default DynamicComp