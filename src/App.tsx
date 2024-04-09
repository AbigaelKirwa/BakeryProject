import React from 'react';
import './App.css';
import Theme from "./context/Theme"
import TopNavigation from './components/TopNavigation';
import Home from './pages/landingPage/Home';
import About from './pages/landingPage/About';


function App() {
  return (
    <Theme>
    <div className="App" style={{background:"linear-gradient(to right, #2C3260, #151A2E)"}}>
      <TopNavigation/>
      <Home/>
      <About/>
    </div>
    </Theme>
  );
}

export default App;
