import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Reviews />
      <Footer />
   </div>
  );
};   
      
    

export default App;
