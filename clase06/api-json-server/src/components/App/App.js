import React, { useEffect, useRef, useState } from 'react'
import { getColors, setColor } from '../../servicios/colors';
import "./App.css";

function App() {

  const [alert, setAlert] = useState(false);
  const [colorInput, setColorInput] = useState("");
  const [colors, setColors] = useState([]);
  
  let mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if (colors.length && !alert) {
      return;
    }
    getColors().then(items => {
      if (mounted.current) {
        setColors(items);
      }
    });
    return () => mounted.current = false;
  }, [alert, colors])

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        if (mounted.current) {
          setAlert(false);
        }
      }, 1000);
    }
  }, [alert]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setColor(colorInput).then(() => {
      if (mounted.current) {
        setColorInput("");
        setAlert(true);
      }
    })
  }

  return (
      <React.StrictMode>
        <div className="wrapper">
          <h2>Mi lista de colores</h2>
          <ul>
            {colors.map((item) => <li key={item.id}>{item.color}</li>)}
          </ul>
          {alert && <h2>Envío exitoso.</h2>}
          <form onSubmit={handleSubmit}>
            <label>
              <p>Nuevo color: </p>
              <input type="text" onChange={event => setColorInput(event.target.value)} value={colorInput}/>
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </React.StrictMode>         
  );
}

export default App;
