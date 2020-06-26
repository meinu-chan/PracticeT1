import React, {Component} from 'react'

import Dropdown from 'react-bootstrap/Dropdown'


function Sorting(){
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" color='green'>
                Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
                    <Dropdown.Item >Name</Dropdown.Item>
                    <Dropdown.Item >Area</Dropdown.Item>
                    <Dropdown.Item >Population</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Sorting