import React from 'react';

import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import axios from 'axios';
import _ from 'lodash';


const DEFAULT_COUNTRIES = [];

export default class SortPLS extends React.Component {  
  state = {
    countries: DEFAULT_COUNTRIES,
  };

  componentDidMount() {
    this.loadCountries();
  }
  
  loadCountries = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      const { data: countries } = response;
      console.log('response', countries);

      this.setState((state) => {
        return { countries };
      });
    })
    .catch(error => {
      console.log("error", error);
    });
  };
  
  sortByField = (field) => {
    console.log('field', field, this.state)
    const { countries: currentCountries } = this.state;
    const countries = _.sortBy(currentCountries, field);;
    
    this.setState({ countries });
  };
  

  renderTableBody() {
    const { countries } = this.state;

    const countriesList = countries.map((country,id) => {
      return (
        
        <tr className="tableRow" key={id}>
          <td>{country.name}</td>
          <td>{country.capital}</td>
          <td>{country.region}</td>
          <td>{country.area}</td>
          <td>{country.population}</td>
         </tr>   
      );  
    });
    
    return countriesList;
  }

  render() {
    return (
     <div>
      <Container>
        <Row>
          <Col>
            <Dropdown style={{marginBottom: '1rem'}}>
              <Dropdown.Toggle variant="success" id="dropdown-basic" color='green'>
                Sort By
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={()=>this.sortByField('name')}>Name</Dropdown.Item>
                <Dropdown.Item onClick={()=>this.sortByField('area')}>Area</Dropdown.Item>
                <Dropdown.Item onClick={()=>this.sortByField('population')}>Population</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Navbar bg="light" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavDropdown title="Search By" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Name</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Full Name</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Capital</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Region</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
      <Table>
          <thead>
            <tr>
              <th>Country name</th>
              <th>Capital</th>
              <th>Region</th>
              <th>Area</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            { this.renderTableBody() }
          </tbody>
        </Table>
     </div>
    );
  }
}

