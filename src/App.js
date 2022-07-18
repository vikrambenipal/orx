import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setUsers(res.data));
  })

  return (
    <div className="App">
      {users.map(user => {
        return (
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.address.street + ", " + user.address.suite + ", " + user.address.city}</p>
            <p>{user.website}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
