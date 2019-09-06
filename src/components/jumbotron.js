import React, { Component } from 'react';
import logo from './hunggwo-logo-only.svg';

class Jumbotron extends Component {
  render() {
    const categories = this.props.items.map((item, index) => {
      return (
        <li className="nav-item" onClick={() => this.props.handleClick(item)} key={index}>
          <span className={'nav-link ' + (this.props.item.name === item.name ? 'active' : '') }>{item.name}</span>
        </li>
      )
    })

    return (
      <div className="jumbotron">
        <div className="jumbotron-header">
          <img className="img-fluid" src={logo}/>
          <div className="" >
            <h1>弘國廣告</h1>
            <h4>台中市西區忠明路59號</h4>
            <h4>04-23145649</h4>
            <a href="mailto:hunggwo@seed.net.tw">hunggwo@seed.net.tw</a>
          </div>
        </div>
        
        <hr></hr>
        <ul className="nav nav-pills nav-fill justify-content-center">{categories}</ul>
      </div>
    )
  }
}


export default Jumbotron;