import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function App() {

  const [todoList,setTodoList] = useState([]);   //store each todo adding
  const [newTask,setNewTask] = useState(['']);    //for storing typing todo

  const deleteTask = (taskName)=>{
    setTodoList(todoList.filter((task)=> taskName!==task
 ));
  }
  

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2> Drope Your Todos Here   🌝</h2>
      </div>
      <div className="input">
        <input value={newTask} onChange={(e)=>setNewTask(e.target.value)}  type="text" placeholder="🖊️ Add Todo..."/>
        <i onClick={()=>setTodoList([...todoList,newTask],setNewTask(''))} className="fas fa-plus"></i>
      </div>
      
      
      <div className="todos">
        {todoList.map((task)=>{
          return(
            <div className="todo">
            <div className="left">
              <p>{task}</p>
            </div>
            <div className="right">
              <i onClick={()=>deleteTask(task)} className="fas fa-times"></i>
            </div>
          </div>
          )

    })
          
        }
        
      </div>
    </div>
  );
}

export default App;
