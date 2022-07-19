import React from 'react'
import Alert from '../Alert/Alert';
import AlertSuccess from '../AlertSuccess/AlertSuccess';
// Sacamos este import cuando trabajamos con objetos de estilo...
// import './App.css';
// Esto es para usar JSS
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    padding: 20,
  }
})

function App() {
  // Es para estilos en línea
  /*
  const wrapper = {
    padding: 20
  }
  */
  const classes = useStyles();
  return (
    /*
    <div style={wrapper}>
        <Alert 
          title="No se encontraron datos"
          type="error">
          <div>Los datos que ud. está buscando no existen en la base de datos.</div>  
        </Alert>
        <AlertSuccess/>    
    </div>
    */
    <div className={classes.wrapper}>
        <Alert 
          title="No se encontraron datos"
          type="error">
          <div>Los datos que ud. está buscando no existen en la base de datos.</div>  
        </Alert>
    <AlertSuccess/>    
</div>
  );
}

export default App;
