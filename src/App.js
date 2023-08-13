import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Beers from "./components/Beers";
import AddBeers from "./components/AddBeers";
import RandomBeers from "./components/RandomBeers";
import SingleBeer from "./components/SingleBeer";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/random-beer" element={<RandomBeers />} />
          <Route path="/new-beer" element={<AddBeers />} />
          <Route path="/beers/:beerId" element={<SingleBeer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;