import { useEffect, useState } from "react";
import TodoItem, { Task } from "./components/TodoItem";
import { Container, List } from "@mui/material";
import TodoForm from "./components/TodoForm";
import { UpdateItem } from "./components/updateItem"; 
import { CustomizedDialogs } from "../../components/modal"; 


export default function Home() {
    const [todos, setTodos] = useState<Task[]>([]);
    const [open, setOpen] = useState(false); 
    const [selectedTask, setSelectedTask] = useState<Task>();

    const removeItem = (id: string) => {
        const newTodos = todos.filter(item => item.id !== id);
        setTodos(newTodos)
    }

    const addTaskToList = (todo: Task) => {
        setTodos([...todos, todo]);
    };
    
    const getTodoList = async ()=>{
        const result = await (await fetch('http://localhost:3000/api/v1/tasks?limit=100',{method: "GET"})).json();
        setTodos([])
        setTodos(result.items) 
    }

    const handleUpdate = (id:string)=>{ 
        const task = todos.filter((item)=> item.id === id);
        setSelectedTask(task.pop())
        setOpen(true)
    }
  // FETCH GET Para consultar todos tarefas
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        
        (async ()=>{await getTodoList()})()
  
    }, []);

    return (
        <Container style={{minWidth: 600}} sx={{
            p: 2,
            border: "1px dashed grey",
            minWidth: { xs: "100%", sm: 500, md: 600 }, 
            maxWidth: "100%", 
          }}>
            <TodoForm todoHandler={addTaskToList} />
              <List sx={{ mt: 2 }}>
                {todos.map((todo) => (
                    <TodoItem 
                    updateItem={handleUpdate} 
                    key={todo.id} item={todo} 
                    deleteItem={removeItem}  
                    ></TodoItem>
                    
                    
                ))}
                
                </List>
                <CustomizedDialogs open={open} handleClose={()=>{ setOpen(false)}} title="UPDATE TASK">
                    {selectedTask && <UpdateItem updateList={async ()=>{
                        setOpen(false)
                        setTodos([])
                        await getTodoList();
                        }} item={selectedTask}></UpdateItem>}
                </CustomizedDialogs>
        </Container>
    )
}