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

function Searching(){
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" color='green'>
                Search By
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <ul style={styles.ul}>
                <Jumbotron>
                    <li><Dropdown.Item href="#/action-1">Name</Dropdown.Item></li>
                    <li><Dropdown.Item href="#/action-2">Full name</Dropdown.Item></li>
                    <li><Dropdown.Item href="#/action-3">Capital</Dropdown.Item></li>
                    <li><Dropdown.Item href="#/action-3">Region</Dropdown.Item></li>
                </Jumbotron>
                </ul>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Searching