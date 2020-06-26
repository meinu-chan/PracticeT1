import React from 'react'

import Dropdown from 'react-bootstrap/Dropdown'

import SortPls from './SortPls'


function SortLabel(){
    var sort= new SortPls();
    return(
        <div></div>
       /*  <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" color='green'>
                Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>sort.sortByField('name')}>Name</Dropdown.Item>
                    <Dropdown.Item onClick={()=>sort.sortByField('area')}>Area</Dropdown.Item>
                    <Dropdown.Item onClick={()=>sort.sortByField('population')}>Population</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown> */
    )
}

export default SortLabel