import React, {Component} from 'react'

import Dropdown from 'react-bootstrap/Dropdown'

function Sorting(){
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" color='green'>
                Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
                    <Dropdown.Item href="#/">Name</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Area</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Population</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Sorting