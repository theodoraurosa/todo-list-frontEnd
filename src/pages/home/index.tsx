import { useEffect, useState } from "react";
import TodoItem, { Task } from "./components/TodoItem";
import { Container, List } from "@mui/material";
import TodoForm from "./components/TodoForm";

export default function Home() {
    const [todos, setTodos] = useState<Task[]>([]);
     
    const removeItem = (id: string) => {
        const newTodos = todos.filter(item => item.id !== id);
        setTodos(newTodos)
    }

    const addTaskToList = (todo: Task) => {
        setTodos([...todos, todo]);
    };
    

  // FETCH GET Para consultar todos tarefas
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://localhost:3000/tasks?limit=100',{method: "GET"})
            .then(response => response.json())
            .then(data => {
                console.log({data});
                setTodos(data.items)
            });

  
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
                    <TodoItem key={todo.id} item={todo} deleteItem={removeItem}  ></TodoItem>
                    
                    
                ))}
                
            </List>
        </Container>
    )
}