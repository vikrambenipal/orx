import React from 'react'
import styled from 'styled-components';

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`



const Search = ({ setSearch }) => {

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }
  return (
    <SearchContainer>
        <input onChange={handleChange} type="text" placeholder="Search for Users"/>
    </SearchContainer>
  )
}

export default Search;