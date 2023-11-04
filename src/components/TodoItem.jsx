import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import ClearIcon from '@mui/icons-material/Clear';
import { Paper } from '@mui/material';
import EditTodoDialog from './EditTodoDialog';
import { useState } from 'react';

export default function TodoItem({todo, deleteTodo, editTodo}) {
  const [openDialog, setOpenDialog] = useState(false)

  const dialogoHandler = () => {
    setOpenDialog(!openDialog);
  }



  return (
    <>
    <EditTodoDialog editTodo={editTodo} open={openDialog} dialogoHandler={dialogoHandler} todo={todo}/>
    <Paper style={{padding: '0.75em 0em'}}>
    <ListItem
            
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                <ClearIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start" tabIndex={-1} disableRipple
                  
                  
                />
              </ListItemIcon> 
              <ListItemText primary={todo.text} onClick={() => setOpenDialog(true)}/>
            </ListItemButton>
          </ListItem>
          </Paper>
          </>
  );
}
