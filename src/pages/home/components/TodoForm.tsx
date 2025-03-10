import {  Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { Task } from "./TodoItem";

const TodoForm =  (props: {todoHandler: (task: Task)=>void }) => {
  const [text, setText] = useState("");


  const saveNewTask = async (todo: string)=>{
    let todoNew = await fetch("http://localhost:3000/api/v1/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: todo, listname:"default", category: "default" }), 
    })
      .then((res) => {
        
        return res.json()  
      }).then((data)=> data)  
      .catch((err) => console.error("Erro ao criar a tarefa:", err));
      setText("")
    return todoNew
  }

  
return (
  <Box component="form" display="flex" gap={2} marginBottom={2}  >
    <TextField  
      id="outlined-basic" 
      label="What task do you have today?" 
      variant="outlined" 
      onChange={(e) => setText(e.target.value)} 
      value={text}
      fullWidth 
    />
    <Button variant="text" onClick={async () =>{
      const newTodo = await saveNewTask(text);
      console.log({newTodo});
      
      props.todoHandler({title: text, id:newTodo.id, completed: newTodo.completed})}
      }size="small" >Add Task</Button>
  </Box>
);

  }
  
  export default TodoForm