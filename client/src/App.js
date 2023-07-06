import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Main from './views/Main';
import Update from './views/Update';
import Details from './views/Details';
import Add from './views/Add';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:8000/api/users/loggedin", { withCredentials: true })
      .then(res => {
        console.log(res.data.user)
        console.log(res.data.user._id)
        setUser(res.data.user)
      })
      .catch(err => console.log(err))

  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<Add user={user} />} />
        <Route path="/edit/:id" element={<Update user={user} />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;