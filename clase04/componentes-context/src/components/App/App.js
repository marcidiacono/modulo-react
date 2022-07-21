import React from 'react'
import Header from '../Header/Header';
import IcecreamMaker from '../IcecreamMaker/IcecreamMaker';
import UserContext from '../User/User';

const user = {
  name: "Homero",
  favorites: [
    "chocolate",
    "caramelo",
  ]
}

function App() {
  return (
      <React.StrictMode>
        <UserContext.Provider value={user}>
          <Header/>
          <IcecreamMaker/>
        </UserContext.Provider>
      </React.StrictMode> 
  );
}

export default App;
