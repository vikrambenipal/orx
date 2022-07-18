import React, { Fragment } from 'react'
import styled from 'styled-components';

const UserContainer = styled.div`
    border: 2px solid black;
`

const User = ({ users, toDo, search }) => {
  return (
    <div>
        {users.filter(user => (user.name.includes(search) || user.email.includes(search))).map((user,key) => {
        return (
          <div>
            <UserContainer key={key}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.address.street + ", " + user.address.suite + ", " + user.address.city}</p>
                <p>{user.website}</p>
                <h2>To Do Items:</h2>
                {toDo.map(item => (
                    item.userId == user.id ? (
                        <div>
                            <p>{item.title}</p>
                            <p>Completed: {item.completed ? "Complete!" : "Incomplete"}</p>
                        </div>
                    ) : <Fragment/>
                ))}

            </UserContainer>
            
          </div>  
          
        )
      })}
    </div>
  )
}

export default User;