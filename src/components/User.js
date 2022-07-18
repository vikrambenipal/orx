import React from 'react'
import styled from 'styled-components';

const UserContainer = styled.div`
    border: 2px solid black;
`

const User = ({ users, search }) => {
  return (
    <div>
        {users.filter(user => user.name.includes(search)).map(user => {
        return (
          <UserContainer>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.address.street + ", " + user.address.suite + ", " + user.address.city}</p>
            <p>{user.website}</p>)
          </UserContainer>
        )
      })}
    </div>
  )
}

export default User;