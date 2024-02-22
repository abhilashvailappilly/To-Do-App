import "./App.css";
import { useState } from "react"
import {TaskList,CompletedTaskList,Time,Day} from "./components/taskList"
function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')
  const time = new Date().toDateString()
  return (
    <div className="App d-flex flex-column align-item-center justify-content-center" style={{  }}>
      <div className="mt-10">
        <h1 className="appHeader">To Do App</h1>
        <Day />
        <div className="d-flex align-items-center justify-content-center">
          <input value={toDo} onChange={(e)=>setToDo(e.target.value)} className="m-2 rounded-pill searchbar no-outline p-1 bg-dark text-white" type="text" placeholder={"Add a task.."} />
         
          <div>
            <button onClick={()=>{setToDos([...toDos,{id:Date.now(),text:toDo,status:false}]); setToDo('') }} className=" btn-add rounded-3">Add</button>
          </div>
        </div>
        <Time date={time} />

      </div>
      <div className=" d-flex  ">
        
        <div className="col-md-6 m-2">
          
          <h1 className="text-warning TaskHeader">Pending Tasks</h1>
          {
            toDos.map((todo,index)=>{
             if(!todo.status){
              return (

                <TaskList 
                 key={index} 
                todo={todo} 
                setToDos={setToDos} 
                toDos={toDos} />  
              )
            }
            return null
            })
          }
          </div> 
          <div className="col-md-6 m-2">
          <h1 className="text-success TaskHeader">Completed Task</h1>
          {
            toDos.map((obj,index)=>{
              
              if(obj.status){
                return (
                  <CompletedTaskList 
                  key={index} 
                 todo={obj} 
                 setToDos={setToDos} 
                 toDos={toDos} /> 
                )
              }
              return null
            })
          }
       
          
        </div>
      </div>
    </div>
  );
}

export default App;
