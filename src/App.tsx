import React from 'react';
import './App.css';
import Theme from "./context/Theme"
import TopNavigation from './components/TopNavigation';
import Home from './pages/landingPage/Home';


function App() {
  return (
    <Theme>
    <div className="App" style={{background:"linear-gradient(to right, #2C3260, #151A2E)"}}>
      <TopNavigation/>
      <Home/>
    </div>
    </Theme>
  );
}

export default App;
