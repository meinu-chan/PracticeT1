import React from 'react'

import Dropdown from 'react-bootstrap/Dropdown'
import Jumbotron from 'react-bootstrap/Jumbotron'

const styles = {
    ul:{
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

function Sorting(){
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" color='green'>
                Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <ul style={styles.ul}>
                <Jumbotron>
                    <li><Dropdown.Item href="#/action-1">Name</Dropdown.Item></li>
                    <li><Dropdown.Item href="#/action-2">Area</Dropdown.Item></li>
                    <li><Dropdown.Item href="#/action-3">Population</Dropdown.Item></li>
                </Jumbotron>
                </ul>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Sorting