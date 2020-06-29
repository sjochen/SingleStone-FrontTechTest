import React from 'react';
import Header from '../Header';
import Body from '../Body';
import Button from '../Button';
import HowItWorks from '../HowItWorks';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      
      <div>
        <Body />
        <Button />
      </div>

      <div>
        <HowItWorks />
      </div>
    </div>
  );
}

export default App;
