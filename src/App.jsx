import './App.css';
import Form from './components/Form';
import UserHome from './components/UserHome';
import AdminHome from './components/AdminHome';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'; 
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  return (  
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route index element={<Form/>}></Route>
        <Route path='/userHome' element={<UserHome/>}></Route>
        <Route path='/adminHome' element={<AdminHome/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

function Navigation(){
  return <nav>
    <ul>
      <li>
        <Link to="/userHome">userHome</Link>
      </li>
      <li>
        <Link to="/adminHome">adminHome</Link>
      </li>
    </ul>
  </nav>
}

export default App
