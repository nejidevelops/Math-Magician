import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Calculator />
        <Quote />
      </div>
    </>
  );
}

export default App;
