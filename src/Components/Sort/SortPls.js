import React from 'react';

import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';

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