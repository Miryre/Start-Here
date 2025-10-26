import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      
      {/* Hero Section - We'll build this next */}
      <section className="hero">
        <div className="hero-content">
          <h1>StartHere</h1>
          <p>Your guide to affordable college living</p>
        </div>
      </section>
    </div>
  );
};

export default App;
