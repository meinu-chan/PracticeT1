import React from 'react';

import Table from 'react-bootstrap/Table';

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
      this.setState({ countries });
    })
    .catch(error => {
      console.log("error", error)
    });
  };
  
  sortByField = (field) => () => {
  	const { countries: currentCountries } = this.state;
    const countries = _.sortBy(currentCountries, field);
    
    this.setState({ countries });
  };

  renderTableBody() {
    const { countries } = this.state;

    const countriesList = countries.map((country,id) => {
      return (
        <tr key={id}>
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
    );
  }
}