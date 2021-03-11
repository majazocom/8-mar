import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Clock from './components/Clock';

const themes = {
  hotpink: {
    background: "hotpink",
    textColor: "#ffffff"
  },
  teal: {
    background: "teal",
    textColor: "#000000"
  },
  green: {
    background: "light-green",
    textColor: "#000000"
  }
}

export const ThemeContext = React.createContext(themes.hotpink);

function App() {
  let rolemodels = require('./assets/wit.json');
  const [currentRolemodel, setCurrentRolemodel] = useState('Rolemodels');
  
  console.log(rolemodels);

  useEffect(() => {
    document.title = currentRolemodel;
  }, [currentRolemodel]);

  return (
    <ThemeContext.Provider value={themes.hotpink} className="App">
      <header>
        <h1>International Womens Day</h1>
        <Clock />
      </header>
      <main>
        {
          rolemodels.map((rolemodel, index) =>  
            <Card onClick={() => setCurrentRolemodel(rolemodel.name)} key={index} data={rolemodel} />
          )
        }
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
