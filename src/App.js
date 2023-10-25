
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Projects from './Pages/Projects';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
     </Routes>
     <Footer />
    
    </div>
  );
}

export default App;
