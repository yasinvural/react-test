import React, {Component} from 'react';
import Item from './Item';

export default class ListItems extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.results.map((item, i) => 
          <Item   imgUrl={item.artworkUrl100} 
                  item={item.trackName} 
                  key={item.trackId}
                  moreDetail={item.trackViewUrl} 
                  description={item.longDescription} />)          
        }
      </ul> 
    );
  }
}