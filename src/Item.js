import React, {Component} from 'react';
import Card from './Card';

export default class Item extends React.Component {
  render() {
    return (
      <li key={this.props.item}>
          <Card title={this.props.item} 
                imgUrl={this.props.imgUrl}
                moreDetail={this.props.moreDetail} 
                description={this.props.description} />
      </li>
    );
  }
}