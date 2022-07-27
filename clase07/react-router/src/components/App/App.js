import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import "./App.css";

import Coffee from '../Coffee/Coffee';
import Snack from '../Snack/Snack';
import Dessert from '../Dessert/Dessert';

function App() {
  return (
      <React.StrictMode>
        <div className="wrapper">
          <h1>Coffee Bar</h1>
          <BrowserRouter>
            <nav>
              <ul>
                <li><Link to="/coffees">Coffees</Link></li>
                <ul>
                  <li><Link to="/coffees?type=esspresso">Esspresso</Link></li>
                  <li><Link to="/coffees?type=cappuccino">Cappuccino</Link></li>
                </ul>
                <li><Link to="/snacks">Snacks</Link></li>
                <li><Link to="/desserts">Desserts</Link></li>
                <ul>
                  <li><Link to="/desserts/cake">Cake</Link></li>
                  <li><Link to="/desserts/donuts">Donuts</Link></li>
                </ul>
              </ul>
            </nav>
            <Routes>
              <Route path="/coffees" element={<Coffee/>}/>
              <Route path="/snacks" element={<Snack/>}/>
              <Route path="/desserts" element={<Dessert/>}/>
              <Route path="/desserts/:type" element={<Dessert/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </React.StrictMode>         
  );
}

export default App;
