import Login from './Components/Login'
import  Home  from './Components/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />}></Route>
      <Route path='/home' exact element={<Home />}></Route>
    </Routes>

  );
}

export default App;
