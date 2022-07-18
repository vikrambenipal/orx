import React from 'react'
import styled from 'styled-components';

const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`

const Filter = ({ setFilter }) => {

    const handleFilter = (e) => {
        const filterBy = e.target.value;
        setFilter(filterBy);
    }

    return (
        <FilterContainer>
            <select onChange={handleFilter}>
                <option>none</option>
                <option>.com</option>
                <option>.net</option>
                <option>other</option>
            </select>
        </FilterContainer>
    )
}

export default Filter;