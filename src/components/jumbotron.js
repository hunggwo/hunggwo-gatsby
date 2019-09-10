import React, { Component } from 'react';
import logo from './hunggwo-logo-only.svg';
import facebook from './facebook.svg';


class Jumbotron extends Component {
  render() {
    const categories = this.props.items.map((item, index) => {
      return (
        <div className="col-4" 
          style={{
            height: `150px`,
          }}
          onClick={() => this.props.handleClick(item)} key={index}>
          <span className={'nav-link ' + (this.props.item.name === item.name ? 'active' : '')}>{item.name}</span>
          <img src={`/photos/${item.name}/1.jpg`} style={{
           height: `90%`,
          }} />
        </div>
      )
    })

    return (
      <div className="">
       
          <img src={facebook} />
        <hr></hr>
        <div className="row">{categories}</div>
      </div>
    )
  }
}


export default Jumbotron;