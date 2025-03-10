import { Box, Button, TextField } from "@mui/material";
import { Task } from "./TodoItem";
import { useState } from "react";

export function UpdateItem(props:{item:Task, updateList: ()=>Promise<void>}) {
    const [text, setText] = useState(props.item.title); 

    const handleUpdate = async (id: string, title:string) => {
        fetch('http://localhost:3000/api/v1/tasks/'+id, 
            { 
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({title})
             })
        .then(async () => {
            await props.updateList();
        });

        
      
      };
   
    return (
        <>
        <Box component="form" display="flex" gap={2} marginBottom={2}  >
            <TextField  
            id="outlined-basic" 
            label="What task do you have today?" 
            variant="outlined" 
            onChange={(e) => setText(e.target.value)} 
            value={text}
            fullWidth 
            />
            <Button variant="contained" onClick={async () =>{
                
                await handleUpdate(props.item.id, text)
            }
            }size="small" >Update</Button>
        </Box>

        </>
    )
}