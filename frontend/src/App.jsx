import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const onStorage = () => setToken(localStorage.getItem('token'));
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login onAuth={setToken} />} />
      <Route path="/register" element={<Register onAuth={setToken} />} />
      <Route
        path="/"
        element={token ? <Dashboard onLogout={() => { localStorage.removeItem('token'); setToken(null); }} /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
