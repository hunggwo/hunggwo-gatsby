import React, { Component } from 'react';


class Jumbotron extends Component {
  render() {
    const categories = this.props.items.map((item, index) => {
      return (
        <a href={item.name} class="col-md-4 col-sm-6 shadow-sm" style={{ padding: 5}}>
          <div class="one-item" style={{
            backgroundImage: `url(/photos/${item.name}/1.jpg)`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
          }}>
            <div className="one-item-name">{item.name}</div>\
          </div>
        </a>
        
      )
    })

    return (
      <div className="">
        <div className="row">{categories}</div>
      </div>
    )
  }
}


export default Jumbotron;