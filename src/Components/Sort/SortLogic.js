import React, { Component } from 'react';
import axios from 'axios';

const DEFAULT_COUNTRIES = [];

class App extends React.Component {  
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
        const currenciesList = country.currencies.map(currency => {
          return (
            <p key={currency.name}>
              <span>{currency.name}</span>
              <span>{currency.symbol}</span>
            </p>  
          );
        });
        const langList = country.languages.map(language => language.name);
        
        return (
          <tr className="tableRow" key={id}>
            <td>{country.name}</td>
            <td>{currenciesList}</td>
            <td>{country.region}</td>
            <td><img src={country.flag} alt={country.denonym} /></td>
            <td>{country.population}</td>
            <td>{langList}</td>
           </tr>   
        );  
      });
      
      return countriesList;
    }
  
    render() {
      return (
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Country name</th>
                <th>Currencies</th>
                <th>Region</th>
                <th>Flag</th>
                <th
                  onClick={this.sortByField('population')}
                >
                  Population
                </th>
                <th>Languages</th>
              </tr>
            </thead>
            <tbody>
              { this.renderTableBody() }
            </tbody>
          </table>
        </div>
      );
    }
  }
  ReactDOM.render(
    <App />,
    document.getElementById('container')
  );