import React from 'react';

const SearchBox = ({seatrhfield, searchChange}) => {
    return (
        <div>
        <input type='search' placeholder='search robots'
        onChange={searchChange}
    />
        </div>
    );
}
export default SearchBox;