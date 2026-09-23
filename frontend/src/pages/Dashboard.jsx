import { useState, useEffect } from 'react';
import api from '../api';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function Dashboard({ onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    try {
      const { data } = await api.get('/tasks');
      setTasks(data);
    } catch (err) {
      setError('Could not load tasks');
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const addTask = async (task) => {
    const { data } = await api.post('/tasks', task);
    setTasks((prev) => [data, ...prev]);
  };

  const toggleTask = async (id, done) => {
    const { data } = await api.put(`/tasks/${id}`, { done });
    setTasks((prev) => prev.map((t) => (t._id === id ? data : t)));
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>My Tasks</h2>
        <button onClick={onLogout}>Sign out</button>
      </div>
      {error && <div className="error">{error}</div>}
      <div className="card">
        <TaskForm onAdd={addTask} />
      </div>
      <div className="card">
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    </div>
  );
}
