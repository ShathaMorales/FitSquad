import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import { useEffect, useState } from 'react';
import Schedule from './views/Schedule';
import Login from './components/Login';
import Details from './views/Details';
import Update from './views/Update';
import Main from './views/Main';
import Add from './views/Add';
import axios from 'axios';
import './App.css';

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
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </div>
  );
}

export default App;