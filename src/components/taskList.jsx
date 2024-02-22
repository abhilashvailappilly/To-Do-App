import React from 'react'

// Functio to display Pending tasks
function TaskList(props) {
  return (
    <div  className="  pendingTask rounded-pill d-flex justify-content-between align-items-center mt-3 ">
    <p className=" mt-1 mb-1 mr-1 {if(props.todo.status)} text-dark fw-bold  pl-3" style={{paddingLeft: '1rem', overflow:'hidden' , textOverflow:'ellipsis'}}> {props.toDo.text}</p>
    <div className='d-flex'>
    <div style={{backgroundColor:'green'}} className="rounded-circle m-1" >
      <i className="fas fa-check m-2 text-white fs-5" onClick={()=>{
      console.log(props.toDos)
        props.setToDos(props.toDos.filter(obj=>{
            if(obj.id === props.toDo.id ){
                obj.status = !props.toDo.status;
            }
            return obj
        }))
    
    }} value={props.toDo.id}></i>
    </div>
    <div style={{backgroundColor:'blue'}} className="rounded-circle m-1">
    <i className="fas fa-pencil-alt m-2 text-white fs-5 " 
    onClick={()=>{
        props.setToDo(props.toDo.text)
        props.setToDos(props.toDos.filter((obj)=>{
            if(obj.id === props.toDo.id){
                return null
            }
            return obj;
        }))

    }}
    ></i>
    </div>
    <div style={{backgroundColor:'red'}} className="rounded-circle m-1">
          <i className="fas fa-trash-alt m-2 text-white fs-5" onClick={()=>{
            props.setToDos(props.toDos.filter((obj)=>{
                if(obj.id !== props.toDo.id){
                    return obj
                }
                return null;
            }))
            console.log(props.toDos)

          }}></i>
        </div>
    </div>
</div>
  )
}

// Function to display the time 
function Time(props){
    return (
        <label htmlFor="" className="text-white fw-bold time-class ">{props.date}</label>
    )
}

// Function to Display all the completed tasks
function CompletedTaskList(props){
    return(
        <div  className=" completedTask rounded-pill d-flex justify-content-between align-items-center mt-3 ">
        <p className=" mt-1 mb-1 mr-1  text-dark fw-bold  pl-3" style={{paddingLeft: '1rem', overflow:'hidden' , textDecoration:'line-through' ,textOverflow:'ellipsis'}}> {props.toDo.text}.</p>
        <div className='d-flex'>
        {/* <div style={{backgroundColor:'orange'}} className="rounded-circle m-1" >
          <i className="fas fa-check m-2 text-white fs-5" onClick={()=>{
          
            props.setToDos(props.toDos.filter(obj=>{
                if(obj.id === props.todo.id ){
                    obj.status = !props.todo.status;
                }
                return obj
            }))
        
        }} value={props.todo.id}></i>
        </div> */}
        <div style={{backgroundColor:'red'}} className="rounded-circle m-1">
          <i className="fas fa-trash-alt m-2 text-white fs-5" onClick={()=>{
            props.setToDos(props.toDos.filter((obj)=>{
                if(obj.id !== props.toDo.id){
                    return obj
                }
                return null;
            }))
            console.log(props.toDos)

          }}></i>
        </div>
        </div>
    </div>
    )
}

//Functio to display only the Day
function Day(){
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const emojis = [ '🌝', '🌟', '🌈', '☁️','🌞', '🌧️', '❄️']; 
        const date = new Date();
        const dayIndex = date.getDay();
        const dayName = dayNames[dayIndex];
        const emoji = emojis[dayIndex]; 
    return (

        <h4 className='text-warning day'>{dayName} {emoji}</h4>
    )
}

export  {TaskList,Time,CompletedTaskList,Day}
