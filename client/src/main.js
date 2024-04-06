import './public/main.css';
import Navigation from './components/navbar';
import Home from './routes/Home.js';

function Main() {
  return (
    <div className="App">
      <nav>
        <Navigation />
        <Home />
      </nav>
    </div>
  );
}

export default Main;