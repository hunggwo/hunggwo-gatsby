
// import { Link } from "gatsby"
import React, { Component } from "react";
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"


import Photos from "../components/photos";
import Jumbotron from "../components/jumbotron";
import items from "../components/items";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      selectItem: items[0],  
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    this.setState({ selectItem: item });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <p style={{ 
          textAlign: `center`,
          background: `rgba(255,222,0,0.6)`,
          borderRadius: `10px`,
          padding: `2px 6px`,
        }}>二十年在地經營，與各大企業合作豐富，提供最好品質、最直得信賴的廣告夥伴</p>
        <p style={{ textAlign: `center`}}><small>我們提供多項服務，客製化產品，請點擊照片觀看更多實既案例</small></p>
        <Jumbotron item={this.state.selectItem} items={this.state.items} handleClick={this.handleClick}/>
        {/* <Photos item={this.state.selectItem} /> */}
      </Layout>
      
    );
  }
}
export default IndexPage
