import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TaskList } from './appNotas';

function notas() {
  const [notas, setnotas] = useState([]);
  const [pagenotas, setPagenotas] = useState('ativos'); // Página inicial

  const addnotas = (text) => {
    const newnotas = { id: Date.now(), text, completed: false };
    setnotas([...notas, newnotas]);
  };

  const togglenotas = (id) => {
    const updatednotas = notas.map((task) =>
    notas.id === id ? { ...notas, completed: !notas.completed } : task
    );
    setTasks(updatednotas);
  };

  const deletenotas= (id) => {
    const updatednotas = notas.filter((notas) => notas.id !== id);
    setTasks(updatednotas);
  };


  useEffect(() => {
    const storednotas = JSON.parse(localnotas.getItem('notas')) || [];
    setTasks(storednotas);
  }, []);

  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [tasks]);

 
  const filterednotas = notas.filter((notas) => {
    if (page === 'ativos') {
      return !notas.completed;
    } else if (page === 'concluídas') {
      return notas.completed;
    }
    return true; 
  });

  const handleAddnotas = (e) => {
    e.preventDefault();
    const notasText = e.target.tasknotas.value;
    addTask(notasText);
    e.target.tasknotas.value = '';
  };

  return (
    <div>
      <h1>Lista de Notinhas</h1>
      <Link to="/ativos">
        <button onClick={() => setPage('ativos')}>Notas Ativas</button>
      </Link>
      <Link to="/concluídas">
        <button onClick={() => setPage('concluídas')}>Notinhas Concluídas</button>
      </Link>
      <TaskList notas={filterednotas} page={page} toggleTask={togglenotas} deletenotas={deletenotas} />
      <form onSubmit={handleAddTask}>
        <input type="text" name="notasText" />
        <button type="submit">Adicionar Notinhas</button>
      </form>
    </div>
  );
}

export default notas;
