import React from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';
import './App.scss';

function App() {
  return (
    <div className="container">
      <List />
      <Form />
    </div>
  );
}

export default App;
