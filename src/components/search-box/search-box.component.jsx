import React from 'react';

import './search-box.component.styles.css';

//This is a functional component
//Functional components just gets props and returns HTML!
//Exportable SearchBox
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className="search"
        type="search" 
        placeholder={placeholder} 
        onChange={handleChange}
    />
)