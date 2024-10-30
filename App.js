// src/App.js
import React from 'react';
import AddTask from './components/addTask';
import ListTask from './components/listTask';
import './App.css';

function App() {
    return (
        <div className="container">
          <header> <h1>Gestionnaire de Tâches</h1></header>
           
            <AddTask />
            <ListTask />
        </div>
    );
}

export default App;
