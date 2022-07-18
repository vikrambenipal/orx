import React, { useState, useEffect } from 'react';
import User from './components/User';
import Search from './components/Search';
import Filter from './components/Filter';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);
  const [toDo, setToDo] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setUsers(res.data));
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => setToDo(res.data));
  }, [])

  return (
    <div className="App">
      <h1>ORX Tecnical Interview Challenge</h1>
      <h2>Vikram Benipal</h2>
      <Search setSearch={setSearch}/>
      <Filter setFilter={setFilter}/>
      <User users={users} toDo={toDo} setToDo={setToDo} filter={filter} search={search} />
    </div>
  );
}

export default App;
