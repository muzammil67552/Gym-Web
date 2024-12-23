import { ToastContainer, toast } from 'react-toastify';
import  {BrowserRouter as Router } from 'react-router-dom'
import BMICalculator from './components/BMICalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import WorkoutSessions from './components/WorkoutSessions';

import './App.css'

function App() {
 

  return (
    <>
      <Router>
              <Navbar/>
              <Hero/>
              <WorkoutSessions/>
              <Gallery/>
              <Pricing/>
              <Contact/>
              <BMICalculator/>
              <Footer/>
              <ToastContainer/>
      </Router> 
    </>
  )
}

export default App
