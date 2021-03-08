import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  let rolemodels = require('./assets/wit.json');
  const [currentRolemodel, setCurrentRolemodel] = useState('Rolemodels');
  
  console.log(rolemodels);

  useEffect(() => {
    document.title = currentRolemodel;
  }, [currentRolemodel]);

  return (
    <div className="App">
      <header>
        <h1>International Womens Day</h1>
      </header>
      <main>
        {
          rolemodels.map((rolemodel, index) =>  
            <Card onClick={() => setCurrentRolemodel(rolemodel.name)} key={index} data={rolemodel} />
          )
        }
      </main>
    </div>
  );
}

export default App;
