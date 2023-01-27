import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import './App.scss'
import NavBar from './Components/Navbar/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Home/>
    </div>
  );
}

export default App;
