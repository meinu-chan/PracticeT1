import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MainSort from './Components/Sort/MainSort';
import MainSearch from './Components/Search/MainSearch'

function App() {
  return (
    <div className="App">
      <Container fluid='md'>
        <Row>
          <Col md='auto'>
            <MainSort/>
          </Col>
          <Col md='auto'>
            <MainSearch />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
