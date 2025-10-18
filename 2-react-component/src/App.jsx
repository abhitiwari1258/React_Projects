import './App.css'
import Head from './components/Head'
import Para from './components/Para'
import Btn from './components/Btn'
import DynamicComp from './components/DynamicComp'
import StudentList from './components/StudentList'
import Random from './components/Random'
import StudProps from './props/StudProps'
import BtnProps from './props/BtnProps'
function App() {
  const newStudent = ["Prashant","Kisan","Anuj"]

  const clickHandler = ()=>{
    console.log("clickHandler");
  }

  const deleteHandler = ()=>{
    console.log("deleteHandler");
  }

  const sendHandler = ()=>{
    console.log("sendHandler");
  }

  return (
    <>
      <Head/>
      <Random/>
      <Random/>
      <Random/>
      <Random/>
      <StudProps newStudent = {newStudent}/>
      <BtnProps btnType="success" btnText="Click Me" handler={clickHandler}/>
      <BtnProps btnType="failure" btnText="Delete Me" handler={deleteHandler}/>
      <BtnProps btnText="Send Me" handler={sendHandler}/>
      <Para/>
      <Btn/>
      <DynamicComp/>
      <StudentList/>
    </>
  )
}

export default App
