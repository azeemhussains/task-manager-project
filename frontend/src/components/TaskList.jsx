export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) return <p style={{ color: '#6b7280' }}>No tasks yet.</p>;
  return (
    <div>
      {tasks.map((t) => (
        <div className="task-row" key={t._id}>
          <input type="checkbox" checked={t.done} onChange={(e) => onToggle(t._id, e.target.checked)} />
          <span style={{ flex: 1, textDecoration: t.done ? 'line-through' : 'none' }}>{t.title}</span>
          <span style={{ fontSize: 12, color: '#6b7280' }}>{t.priority}</span>
          <button onClick={() => onDelete(t._id)} style={{ background: 'transparent', color: '#dc2626' }}>Delete</button>
        </div>
      ))}
    </div>
  );
}
