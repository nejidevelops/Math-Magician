import { Routes, Route } from 'react-router';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
