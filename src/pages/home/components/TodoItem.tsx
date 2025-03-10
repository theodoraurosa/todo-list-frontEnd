
import { Box, Checkbox,  Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'; 
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react";



export interface Task {
  id: string;
  title: string; 
  completed: boolean;
}

const TodoItem = (props: {item: Task , updateItem: (id: string)=>void; deleteItem: (id: string)=>void}) => { 
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [item, setItem] = useState<Task>();


  useEffect(()=>{
    setItem(props.item)
  },[])

  const handleCompleted = (id: string, value: boolean)=>{ 
    if(item)
      setItem({...item, completed: !item.completed})

    fetch('http://localhost:3000/api/v1/tasks/'+id,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({completed: value})
      })
        .then(response => response.json())
        .then((dataO)=>{console.log({dataO});
        });
  }
   
  if(!item) return <></>


const handleDelete = (id: string) => {
  fetch('http://localhost:3000/api/v1/tasks/'+id, { method: 'DELETE' })
  .then(() => {});

  props.deleteItem(id)
};



const handleUpdate = (id: string) => {
  fetch('http://localhost:3000/api/v1/tasks/'+id, { method: 'UPDATE' })
  .then(() => {});

  props.updateItem(id);

};

  return (
    
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Checkbox {...label}  defaultChecked={item.completed === true} onChange={(e, isChecked)=>handleCompleted(item.id, isChecked)}/>
      <Box textAlign="left" width="100%"> 
        <Typography style={{textDecoration: item.completed === true ? "line-through" : "none"}} variant="body1" component="h2">{item.title}</Typography>
      </Box>
      
      
      <Box>
      <IconButton aria-label="update" onClick={() => handleUpdate(item.id)}>
        <EditIcon></EditIcon>
        </IconButton>
      </Box>

      <Box>
      <IconButton aria-label="delete" onClick={() => handleDelete(item.id)}>
          <DeleteIcon />
        </IconButton>
      </Box>

    </Box>
  );
};

export default TodoItem;
