import React from 'react'
import Instructions from '../Instructions/Instructions';
import './App.css';

const displayEmojiName = (event) => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: "cara feliz"
  },
  {
    emoji: '🎉',
    name: "lanzador de serpentina"
  },
  {
    emoji: '🤸‍♀️',
    name: "mujer haciendo voltereta lateral"
  },
]

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return (
    <div className="container">
      <h1 id={greeting}>Hola ¿cómo están?</h1>
      {displayAction && <p>Estoy escribiendo JSX</p>}
      <Instructions/>
      <ul>
        {
          emojis.map((emoji) => (
            <li key={emoji.name}>
              <button onClick={displayEmojiName}>
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
