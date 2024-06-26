import React from 'react';
import './App.css';
import Theme from "./context/Theme"
import TopNavigation from './components/TopNavigation';
import Home from './pages/landingPage/Home';
import About from './pages/landingPage/About';
import Bakers from './pages/landingPage/Bakers';
import Categories from './pages/landingPage/Categories';
import CustomerReviews from './pages/landingPage/CustomerReviews';
import Footer from './components/Footer';


function App() {
  return (
    <Theme>
    <div className="App" style={{background:"linear-gradient(to right, #2C3260, #151A2E)", width:"100%", overflowX:"hidden"}}>
      <TopNavigation/>
      <Home/>
      <Categories/>
      <Bakers/>
      <About/>
      <CustomerReviews/>
      <Footer/>
    </div>
    </Theme>
  );
}

export default App;
