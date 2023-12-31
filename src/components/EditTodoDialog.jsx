import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props: TransitionProps & {children: React.ReactElement<any, any>;}, ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodoDialog({open, dialogoHandler, todo, editTodo}) {
  const [editedText, setEditedText] = React.useState(todo.text);

  const textHandler = () => {
    editTodo(todo.id, editedText)
    dialogoHandler();
  }



  return (
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogoHandler}
        aria-describedby="alert de edição"
        fullWidth
      >
        <DialogTitle>{"Editando Tarefa:"}</DialogTitle>
        <DialogContent>
          <TextField defaultValue={editedText} fullWidth onChange={(e) => setEditedText(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogoHandler}>Cancelar</Button>
          <Button onClick={textHandler}>Editar</Button>
        </DialogActions>
      </Dialog>
    
  );
}
