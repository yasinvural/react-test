import React, {Component} from 'react';
import './Card.css';

export default class Card extends Component{
    render(){
        return(
            <div className="card js-card">
                <div className="card-block">
                <img className="card-img-top" src={this.props.imgUrl}/>
                    <h2 className="card-title js-card-title">{this.props.title}</h2>
                    <p className="card-text js-card-text">{this.props.description}</p>
                    <a target="_blank" href={this.props.moreDetail} className="btn btn-success pull-right ">More detail</a>                
                </div>
            </div>
        );
    }
}