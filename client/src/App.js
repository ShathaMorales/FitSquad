import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Main from './views/Main';
import Update from './views/Update';
import Details from './views/Details';
import Add from './views/Add';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;