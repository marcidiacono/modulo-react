import React, { useReducer, useState, lazy, Suspense } from 'react'
// Esta es una importación estática
// import BookInformation from '../BookInformation/BookInformation';
import "./App.css";

const BookInformation = lazy(() => import(/* chink: "BookInformation"*/'../BookInformation/BookInformation'));

function App() {

  const [book, setBook] = useState("La Ilíada");
  const [show, toogle] = useReducer((state) => !state, true);

  return (
      <React.StrictMode>
        <div className="wrapper">
          <h1>Literatura Clásica</h1>
          <div><button onClick={toogle}>Alternar Detalles</button></div>
          <button onClick={() => setBook("La Ilíada")}>La Ilíada</button>
          <button onClick={() => setBook("La República")}>La República</button>
          <button onClick={() => setBook("La Divina Comedia")}>La Divina Comedia</button>
          <button onClick={() => setBook("Metamorfosis")}>Metamorfosis</button>
          <Suspense fallback={<div>Cargando componente...</div>}>
            {show && <BookInformation name={book}/>}
          </Suspense>
        </div>
      </React.StrictMode>         
  );
}

export default App;
