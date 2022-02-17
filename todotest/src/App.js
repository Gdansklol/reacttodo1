import React,{useState} from "react";
import "./App.css";
import Template from "./components/Template";
import TodoList from "./components/TodoList";

const App =()=>{
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Todo 1",
      checked: true
    },
    {
      id:2,
      text: "Todo 2",
      checked: false
    },
    {
      id:3,
      text: "Todo 3",
      checked: true
    },
    {
      id:4,
      text: "Todo 4",
      checked: false
    },
  ]);

  return (
  <Template>
   
    <TodoList todos={todos}/>
    
    </Template>
  );
  };
export default App;