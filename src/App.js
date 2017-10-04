import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './Search';
import ListItems from './ListItems';
import HttpService from './Service';


const httpService = new HttpService();

export default class App extends Component {
  constructor(props){
        super(props);
        this.state = {
            searchQuery: '',
            anotherResults: []
        };

        //bindings
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getData = this.getData.bind(this);
        
  }

  getData = () =>{
    httpService.getProducts(this.state.searchQuery).then(data => {
      console.info(data);
      const movies = data.results.map(movie => movie.trackName);
      this.setState({
        results: movies,
        anotherResults: data.results
      });
    },error => {
        console.info(error);
    });
  }
  
  handleChange(e){      
      this.setState({
        searchQuery: e.target.value
      });
    }

    handleClick(){
      this.getData();
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="js-header"> iTunes Search React Sample</h2>
        </div>
        <Search searchQuery={this.state.searchQuery} 
                handleChange={this.handleChange} 
                handleClick={this.handleClick} />
        <ListItems results={this.state.anotherResults} /> 
      </div>
    );
  }
}
