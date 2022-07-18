import React, { Fragment } from 'react'
import styled from 'styled-components';

const UserContainer = styled.div`
    border: 2px solid black;
`
const ToDoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    border-bottom: 2px solid black;
    p {
        margin-left: 30px;
    }
    button {
        color: white;
        background-color: red;
        font-size: 20px;
        margin-right: 30px;
        margin-top: 5px;
        margin-bottom: 10px;
        cursor: pointer;
    }
`

const ItemText = styled.p`
    cursor: pointer;
    text-decoration: ${props => props.completed ? 'line-through' : 'none'}

`
const User = ({ users, toDo, setToDo, filter, search }) => {

    const toggleItem = (e) => {
        const id = e.target.id;
        let newToDos = toDo;
        const index = newToDos.findIndex(item => item.id == id);
        newToDos[index].completed = !newToDos[index].completed;
        setToDo([...newToDos]);
    }

    const handleDelete = (e) => {
        const id = e.target.id;
        console.log(id)
        const newToDos = toDo.filter(item => item.id != id);
        setToDo([...newToDos]);
    }

    const filterItems = (user) => {
        if(filter == "none"){
            return true;
        }else if(filter == "other"){
            console.log("here")
            return (!user.website.includes(".net") && (!user.website.includes(".com")));
        }else{
            return user.website.includes(filter);
        }
    }

  return (
    <div>
        {users
        .filter(user => filterItems(user))
        .filter(user => user.name.toLowerCase().includes(search.toLowerCase()) || user.email.includes(search))
        .map((user,key) => {
        return (
          <div>
            <UserContainer key={key}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.address.street + ", " + user.address.suite + ", " + user.address.city}</p>
                <p>{user.website}</p>
                <h3>To Do Items:</h3>
                {toDo.map(item => (
                    item.userId == user.id ? (
                        <ToDoContainer>
                            <div>
                                <ItemText completed={item.completed} id={item.id} onClick={toggleItem}>{item.title}</ItemText>
                                <p>Completed: {item.completed ? "Complete!" : "Incomplete"}</p>
                            </div>
                            <button id={item.id} onClick={handleDelete}>DELETE</button>
                        </ToDoContainer>
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