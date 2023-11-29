import React from 'react';

export function appNotas({ notas, page, toggleTask, deleteTask }) {
  const filterednotas = page === 'ativos' ? notas.filter((notas) => !notas.completed) : notas.filter((notas) => notas.completed);

  return (
    <ul>
      {filterednotas.map((notas) => (
        <li key={notas.id}>
          <input
            type="checkbox"
            checked={notas.completed}
            onChange={() => toggleNotas(notas.id)}
          />
          <span style={{ textDecoration:notas.completed ? 'line-through' : 'none' }}>
            {notas.text}
          </span>
          <button onClick={() => deleteNotas(notas.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}
