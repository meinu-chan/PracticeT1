import React from 'react'

import Dropdown from 'react-bootstrap/Dropdown'

import SearchBox from './SearchBox'

function Searching(){
    return(
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" color='green' >
                            Search By
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                                <Dropdown.Item onClick={a}>Name</Dropdown.Item> 
                                <Dropdown.Item href="#/action-2">Full name</Dropdown.Item> 
                                <Dropdown.Item href="#/action-3">Capital</Dropdown.Item> 
                                <Dropdown.Item href="#/action-3">Region</Dropdown.Item> 
                        </Dropdown.Menu>
                        <SearchBox/>
                    </Dropdown>
    )
}
var a = () =>{
    return(
    <SearchBox/>);
}
export default Searching