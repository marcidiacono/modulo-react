import React, { useReducer, useState } from 'react'
import "./App.css";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      name: "",
      novel: "",
      count: 1,
      "gift-wrap": false,
    }
  } else {
    return {
      ...state,
      [event.name]: event.value,
    }
  }
}


function App() {
  const [formData, setFormData] = useReducer(formReducer, { count: 1, });
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true,
      })
    }, 5000);
  }
  const handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox"
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    })
  }
  return (
      <React.StrictMode>
        <div className="wrapper">
          <h1>Libros para toda ocasión</h1>
          {submitting && 
            <div>
              Usted ha enviado lo siguiente:
              <ul>
                {Object.entries(formData).map(([name, value]) => (
                  <li key={name}>
                    <strong>{name}</strong>: {value.toString()}
                  </li>
                ))}
              </ul>
            </div>}
          <form onSubmit={handleSubmit}>
            <fieldset disabled={submitting}>
              <label>
                <p>Nombre:</p>
                <input name="name" onChange={handleChange} value={formData.name || ""}/>
              </label>
            </fieldset>
            <fieldset disabled={submitting}>
              <label>
                <p>Novelas</p>
                <select name="novel" onChange={handleChange} value={formData.novel || ""}>
                  <option value="">--Elija una opción</option>
                  <option value="police">Novela policial</option>
                  <option value="fantasy">Novela fantástica</option>
                  <option value="gothic">Novela gótica</option>
                </select> 
              </label>
              <label>
                <p>Cantidad</p>
                <input type="number" name="count" onChange={handleChange} step="1" value={formData.count || ""}/>
              </label>
              <label>
                <p>Para regalo</p>
                <input  type="checkbox" 
                        name="gift-wrap" 
                        onChange={handleChange} 
                        checked={formData["gift-wrap"] || false}
                        disabled={formData.novel !== "police"}
                />
              </label>
            </fieldset>
            <button type="submit" disabled={submitting}>Enviar</button>
          </form>
        </div>
      </React.StrictMode>         
  );
}

export default App;
