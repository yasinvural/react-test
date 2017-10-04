import React, { Component } from 'react';
import './Search.css'

export default class Search extends Component{
    render(){
        return(
            <div className="input-group js-search-container">
                <input className="form-control"
                        type="text"
                        placeholder="type to search"
                        value={this.props.searchQuery}
                        onChange = {this.props.handleChange}/>
                <span className="input-group-btn">
                    <button className="btn btn-primary" onClick={this.props.handleClick}>Search</button>
                </span>
            </div>
        );
    }
}
