import React from 'react'

import Form from 'react-bootstrap/Form'

import SearchBut from './SearchBut'

function NewForm(){
    return(<Form.Group>
        <Form.Control type="text" placeholder="Enter sign" />
        <SearchBut/>
      </Form.Group>)
}

export default NewForm