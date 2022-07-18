import React, { useState, useEffect } from 'react';
import User from './components/User';
import Search from './components/Search';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setUsers(res.data));
  })

  return (
    <div className="App">
      <h1>ORX Tecnical Interview Challenge</h1>
      <h2>Vikram Benipal</h2>
      <Search setSearch={setSearch}/>
      <User users={users} search={search} />
    </div>
  );
}

export default App;
